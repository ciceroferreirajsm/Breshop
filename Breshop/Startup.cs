using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Breshop.Models;
using Breshop.Interfaces;
using Breshop.Services;
using Breshop.Repository;

namespace Breshop
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // Injeção de dependencia
            services.AddTransient<IProdutoService, ProdutoService>();
            services.AddTransient<IProdutoRepository, ProdutoRepository>();
            services.AddTransient<IUsuarioService, UsuarioService>();
            services.AddTransient<IUsuarioRepository, UsuarioRepository>();
            services.AddTransient<ICarrinhoService, CarrinhoService>();
            services.AddTransient<ICarrinhoProdutoService, CarrinhoProdutoService>();
            services.AddTransient<ICarrinhoProdutoRepository, CarrinhoProdutoRepository>();
            services.AddTransient<ICarrinhoRepository, CarrinhoRepository>();
            services.AddTransient<IPedidoRepository, PedidoRepository>();
            services.AddTransient<IPedidoService, PedidoService>();

            services.AddAuthorization(auth =>
            {
                auth.AddPolicy("Admin", policy => policy.RequireClaim("Administrador"));
                auth.AddPolicy("Cliente", policy => policy.RequireClaim("Cliente"));
            });

            services.AddDbContext<BreshopContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("BreshopContext")));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Produto/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Produto}/{action=Ofertas}/{id?}");
            });
        }
    }
}
