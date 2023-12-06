using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Cupom
{
    public int Id { get; set; }

    public string Codigo { get; set; } = null!;

    public int Valor { get; set; }

    public bool IsPercentage { get; set; }
}
