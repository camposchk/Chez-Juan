using System;
using System.Collections.Generic;

namespace DTO;

public class OrderData
{
    public int UsuarioId { get; set; }
    public DateTime HoraPedido { get; set; }
    public DateTime? HoraEntrega { get; set; }  
    public List<ItemPedidoData> Itens { get; set; } = new List<ItemPedidoData>();  
}

public class ItemPedidoData
{
    public int ProdutoId { get; set; }
    public int Quantidade { get; set; }
}
