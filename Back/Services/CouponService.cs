using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class CouponService : ICouponService
{
    CjdbContext ctx;
    public CouponService(CjdbContext ctx)
    {
        this.ctx = ctx;
    }

    public async Task Create(CouponData data)
    {
        Cupom cupom = new Cupom();

        cupom.Codigo = data.Codigo;
        cupom.Valor = data.Valor;
        cupom.IsPercentage = data.IsPercentage;

        this.ctx.Add(cupom);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<List<Cupom>> GetAllCoupons()
    {
        return await ctx.Cupoms.ToListAsync();
    }

    public async Task<Cupom> GetCouponByCode(string codigo)
    {
        return await ctx.Cupoms.FirstOrDefaultAsync(c => c.Codigo == codigo);
    }

    // public async Task<Cupom> GetByLogin(string login)
    // {
    //     var query =
    //         from u in this.ctx.Usuarios
    //         where u.Email == login
    //         select u;

    //     return await query.FirstOrDefaultAsync();
    // }
}