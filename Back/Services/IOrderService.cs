using System.Threading.Tasks;
using DTO;

namespace Back.Services;

using Model;
public interface IOrderService
{
    Task CreateOrder(OrderData data);

    Task<List<Pedido>> GetOrdersByUserId(int userId);

}
