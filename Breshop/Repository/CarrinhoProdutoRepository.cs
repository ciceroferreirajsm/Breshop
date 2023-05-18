using Breshop.Interfaces;
using Breshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Breshop.Repository
{
    public class CarrinhoProdutoRepository : ICarrinhoProdutoRepository
    {
        private readonly BreshopContext _context;

        public CarrinhoProdutoRepository(BreshopContext context)
        {
            _context = context;
        }

        public bool AdicionarNoCarrinhoProduto(CarrinhoProduto carrinhoProduto)
        {
            try
            {
                if (carrinhoProduto != null)
                { 
                    _context.Add(carrinhoProduto);
                    _context.SaveChanges();
                }

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public CarrinhoProduto CriarCarrinhoProduto(int IdCarrinho, int IdProduto, int QtdProduto)
        {
            try
            {
                var carrinhoProduto = _context.CarrinhoProduto.FirstOrDefault(x => x.IdCarrinho == IdCarrinho);

                if (carrinhoProduto == null)
                {
                    carrinhoProduto = new CarrinhoProduto
                    {
                        IdCarrinho = IdCarrinho,
                        QtdProduto = QtdProduto,
                        IdProduto = IdProduto
                    };

                    _context.CarrinhoProduto.Add(carrinhoProduto);
                    _context.SaveChanges();

                    return carrinhoProduto;
                }

                return carrinhoProduto;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public CarrinhoProduto ObterCarrinhoProdutoPorIdCarrinho(int IdCarrinho, int idProduto)
        {
            try
            {
                return _context.CarrinhoProduto.FirstOrDefault(x => x.IdCarrinho == IdCarrinho && x.IdProduto == idProduto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<CarrinhoProduto> ObterListaProdutosCarrinho(int idCarrinhoProduto, int idCarrinho)
        {
            try
            {
                return _context.CarrinhoProduto.OrderBy(x => x.IdCarrinhoProduto == idCarrinhoProduto).Where(x => x.IdCarrinho == idCarrinho).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AtualizarDoCarrinhoProduto(CarrinhoProduto carrinhoProduto)
        {
            try
            {
                carrinhoProduto.QtdProduto--;
                _context.CarrinhoProduto.Update(carrinhoProduto);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void RemoverDoCarrinhoProduto(CarrinhoProduto carrinhoProduto)
        {
            try
            {
                _context.CarrinhoProduto.Remove(carrinhoProduto);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
