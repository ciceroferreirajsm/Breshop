using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Breshop.Services
{
    public class PedidoRepository : IPedidoRepository
    {
        private readonly BreshopContext _context;

        public PedidoRepository(BreshopContext context)
        {
            _context = context;
        }

        public List<Pedido> ObterListaPedidos(int IdUsuario)
        {
            try
            {
                if (IdUsuario != 0)
                {
                    return _context.Pedido.OrderBy(x => x.IdUsuario == IdUsuario).ToList();
                }

                return new List<Pedido>();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public async Task<Pedido> FinalizarPedido(int IdUsuario, int idCarrinho)
        {
            try
            {
                if (IdUsuario != 0 && idCarrinho != 0)
                {
                    var Pedido = new Pedido
                    {
                        IdCarrinho = idCarrinho,
                        IdUsuario = IdUsuario,
                        DataPedido = DateTime.Now
                    };

                    _context.Pedido.Add(Pedido);
                    _context.SaveChanges();

                    return Pedido;
                }

                return new Pedido();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<Pedido> ObterPedidoPorCarrinho(int idCarrinho)
        {
            try
            {
                return _context.Pedido.FirstOrDefault(x => x.IdCarrinho == idCarrinho);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
