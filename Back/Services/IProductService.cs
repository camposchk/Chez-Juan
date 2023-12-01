using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface IProductService
{
    Task Create(ProductData data);
    // Task<Product> Delete();
}