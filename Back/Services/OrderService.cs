using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Back.Services;

using DTO;
using Model;
public class OrderService : IOrderService
{
    private readonly CjdbContext ctx;

    public OrderService(CjdbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task CreateOrder(OrderData data)
    {
        Pedido pedido = new Pedido
        {
            UsuarioId = data.UsuarioId,
            HoraPedido = data.HoraPedido,
            HoraEntrega = data.HoraEntrega
        };

        foreach (var itemData in data.Itens)
        {
            pedido.ItemPedidos.Add(new ItemPedido
            {
                ProdutoId = itemData.ProdutoId,
                Qtd = itemData.Quantidade
            });
        }

        ctx.Pedidos.Add(pedido);
        await ctx.SaveChangesAsync();
    }

    public async Task<List<Pedido>> GetOrdersByUserId(int userId)
    {
        return await ctx.Pedidos
            .Where(p => p.UsuarioId == userId)
            .Include(p => p.ItemPedidos) 
            .ToListAsync();
    }
}
