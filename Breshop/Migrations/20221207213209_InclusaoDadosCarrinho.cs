using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Breshop.Migrations
{
    public partial class InclusaoDadosCarrinho : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Carrinho",
                columns: table => new
                {
                    CD_CARRINHO = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_USUARIO = table.Column<int>(nullable: false),
                    CD_CARRINHO_PRODUTO = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Carrinho", x => x.CD_CARRINHO);
                });

            migrationBuilder.CreateTable(
                name: "Produto",
                columns: table => new
                {
                    CD_PRODUTO = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DS_DESCRICAO = table.Column<string>(nullable: true),
                    DS_TAMANHO = table.Column<string>(nullable: true),
                    VL_PRODUTO = table.Column<double>(nullable: false),
                    NM_MARCA = table.Column<string>(nullable: true),
                    NM_CATEGORIA = table.Column<string>(nullable: true),
                    DS_URL_IMAGEM = table.Column<string>(nullable: true),
                    IC_STATUS_PRODUTO = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produto", x => x.CD_PRODUTO);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    CD_USUARIO = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    DS_EMAIL = table.Column<string>(nullable: true),
                    DS_SENHA = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.CD_USUARIO);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Carrinho");

            migrationBuilder.DropTable(
                name: "Produto");

            migrationBuilder.DropTable(
                name: "Usuario");
        }
    }
}
