using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Breshop.Repository
{
    public class CarrinhoRepository : ICarrinhoRepository
    {
        private readonly BreshopContext _context;

        public CarrinhoRepository(BreshopContext context)
        {
            _context = context;
        }

        public Carrinho CriarCarrinho(int IdUsuario)
        {
            try
            {
                if (IdUsuario != 0)
                {
                    var carrinho = new Carrinho
                    {
                        IdUsuario = IdUsuario,
                        CarrinhoDisponivel = true
                    };

                    _context.Carrinho.Add(carrinho);
                    _context.SaveChanges();

                    return carrinho;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AtualizarCarrinho(int idCarrinho, int idCarrinhoProduto)
        {
            try
            {
                if (idCarrinho != 0 && idCarrinhoProduto != 0)
                {
                    var carrinho = ObterCarrinhoPorId(idCarrinho);

                    carrinho.IdProdutoCarrinho = idCarrinhoProduto;

                    _context.Carrinho.Update(carrinho);
                    _context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Carrinho ObterCarrinhoPorIdUsuario(int IdUsuario)
        {
            try
            {
                if (IdUsuario != 0)
                {
                    var retorno = _context.Carrinho.FirstOrDefault(x => x.IdUsuario == IdUsuario && x.CarrinhoDisponivel);

                    if (retorno == null)
                        return new Carrinho();

                    return retorno;

                }

                return new Carrinho();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Carrinho ObterCarrinhoPorId(int idCarrinho)
        {
            try
            {
                if (idCarrinho != 0)
                {
                    var retorno = _context.Carrinho.FirstOrDefault(x => x.IdCarrinho == idCarrinho && x.CarrinhoDisponivel);

                    return retorno;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Carrinho ObterCarrinhoPorIdRelatorio(int idCarrinho)
        {
            try
            {
                if (idCarrinho != 0)
                {
                    var retorno = _context.Carrinho.FirstOrDefault(x => x.IdCarrinho == idCarrinho);

                    return retorno;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void FinalizarCarrinho(Carrinho carrinho)
        {
            try
            {
                _context.Carrinho.Update(carrinho);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
