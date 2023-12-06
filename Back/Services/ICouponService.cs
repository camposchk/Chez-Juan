using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public interface ICouponService
{
    Task Create(CouponData data);

    Task<List<Cupom>> GetAllCoupons();
    // Task<Coupon> Delete();

    Task<Cupom> GetCouponByCode(string codigo);
}