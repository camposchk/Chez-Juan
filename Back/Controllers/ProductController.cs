using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace Back.Controllers;

using DTO;
using Services;

[ApiController]
[Route("product")]
public class ProductController : ControllerBase
{
    [HttpPost("cadastrar")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> Create(
        [FromBody]ProductData product,
        [FromServices]IProductService service)
    {
        var errors = new List<string>();
        if (product is null || product.Nome is null)
            errors.Add("É necessário informar o nome do produto.");

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.Create(product);
        return Ok();
    }

    [HttpDelete]
    [EnableCors("DefaultPolicy")]
    public IActionResult DeleteProduct()
    {
        throw new NotImplementedException();
    }
}