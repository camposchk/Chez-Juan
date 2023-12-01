using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Pedido
{
    public int Id { get; set; }

    public int? UsuarioId { get; set; }

    public DateTime HoraPedido { get; set; }

    public DateTime? HoraEntrega { get; set; }

    public virtual ICollection<ItemPedido> ItemPedidos { get; } = new List<ItemPedido>();

    public virtual Usuario? Usuario { get; set; }
}
