using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

using DTO;

namespace Back.Controllers;

using Services;
using System.Collections.Generic;
using System.Threading.Tasks;


[ApiController]
[Route("order")]
public class OrderController : ControllerBase
{
    [HttpPost("create")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> CreateOrder(
        [FromBody] OrderData orderData,
        [FromServices] IOrderService service)
    {
        var errors = new List<string>();

        if (orderData is null)
        {
            errors.Add("Os dados do pedido são necessários.");
        }
        else
        {
            if (orderData.UsuarioId <= 0)
                errors.Add("É necessário informar o ID do usuário.");

            if (orderData.Itens == null || orderData.Itens.Count == 0)
                errors.Add("É necessário incluir pelo menos um item no pedido.");
        }

        if (errors.Count > 0)
            return BadRequest(errors);

        await service.CreateOrder(orderData);
        return Ok();
    }

    [HttpGet("getByUser/{userId}")]
    [EnableCors("DefaultPolicy")]
    public async Task<IActionResult> GetOrdersByUser(
        [FromRoute] int userId,
        [FromServices] IOrderService service)
    {
        if (userId <= 0)
            return BadRequest("ID de usuário inválido.");

        var orders = await service.GetOrdersByUserId(userId);
        
        if (orders == null || orders.Count == 0)
            return NotFound("Nenhum pedido encontrado para o usuário.");

        return Ok(orders);
    }
}
