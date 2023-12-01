using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Produto
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public double Preco { get; set; }

    public int Categoria { get; set; }

    public virtual ICollection<ItemPedido> ItemPedidos { get; } = new List<ItemPedido>();
}
