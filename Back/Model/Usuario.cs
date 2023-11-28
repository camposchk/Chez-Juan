using System;
using System.Collections.Generic;

namespace Back.Model;

public partial class Usuario
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public bool IsAdm { get; set; }

    public int? ImagemId { get; set; }

    public virtual Imagem? Imagem { get; set; }
}
