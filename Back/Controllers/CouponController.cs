using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace Back.Controllers;

using DTO;
using Services;

[ApiController]
[Route("coupon")]
public class CouponController : ControllerBase
{
    [HttpPost("cadastrar")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody]CouponData cupom,
        [FromServices]ICouponService service)
    {
        var errors = new List<string>();
        if (cupom is null || cupom.Codigo is null)
            errors.Add("É necessário informar o código do cupom.");

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(cupom);
        return Ok();
    }

    [HttpGet("buscar")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> GetAllCoupons([FromServices] ICouponService service)
    {
        var cupoms = await service.GetAllCoupons();
        return Ok(cupoms);
    }

    [HttpGet("verificar/{codigo}")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> VerifyCoupon(string codigo, [FromServices] ICouponService service)
    {
        var cupom = await service.GetCouponByCode(codigo);
        if (cupom == null)
            return NotFound("Cupom não encontrado.");

        return Ok(cupom);
    }

    [HttpDelete]
    [EnableCors("DefaultPolicy")]
    public IActionResult DeleteCoupon()
    {
        throw new NotImplementedException();
    }
}