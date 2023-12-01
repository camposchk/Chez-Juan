using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class ProductService : IProductService
{
    CjdbContext ctx;
    public ProductService(CjdbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task Create(ProductData data)
    {
        Produto produto = new Produto();

        produto.Nome = data.Nome;
        produto.Preco = data.Preco;
        produto.Categoria = data.Categoria;

        this.ctx.Add(produto);
        await this.ctx.SaveChangesAsync();
    }

    // public async Task<Produto> GetByLogin(string login)
    // {
    //     var query =
    //         from u in this.ctx.Usuarios
    //         where u.Email == login
    //         select u;
        
    //     return await query.FirstOrDefaultAsync();
    // }
}