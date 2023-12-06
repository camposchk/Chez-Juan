using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Back.Model;

public partial class CjdbContext : DbContext
{
    public CjdbContext()
    {
    }

    public CjdbContext(DbContextOptions<CjdbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Cupom> Cupoms { get; set; }

    public virtual DbSet<Imagem> Imagems { get; set; }

    public virtual DbSet<ItemPedido> ItemPedidos { get; set; }

    public virtual DbSet<Pedido> Pedidos { get; set; }

    public virtual DbSet<Produto> Produtos { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=CT-C-001L7\\SQLEXPRESS;Initial Catalog=CJDB;Integrated Security=True;TrustServerCertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Cupom>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Cupom__3214EC270D9ED6F8");

            entity.ToTable("Cupom");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Codigo)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.IsPercentage).HasColumnName("isPercentage");
            entity.Property(e => e.Valor).HasColumnName("valor");
        });

        modelBuilder.Entity<Imagem>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Imagem__3214EC2765AA35C8");

            entity.ToTable("Imagem");

            entity.Property(e => e.Id).HasColumnName("ID");
        });

        modelBuilder.Entity<ItemPedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ItemPedi__3214EC271DF6CB5F");

            entity.ToTable("ItemPedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.PedidoId).HasColumnName("PedidoID");
            entity.Property(e => e.ProdutoId).HasColumnName("ProdutoID");
            entity.Property(e => e.Qtd).HasDefaultValueSql("((1))");

            entity.HasOne(d => d.Pedido).WithMany(p => p.ItemPedidos)
                .HasForeignKey(d => d.PedidoId)
                .HasConstraintName("FK__ItemPedid__Pedid__440B1D61");

            entity.HasOne(d => d.Produto).WithMany(p => p.ItemPedidos)
                .HasForeignKey(d => d.ProdutoId)
                .HasConstraintName("FK__ItemPedid__Produ__4316F928");
        });

        modelBuilder.Entity<Pedido>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Pedido__3214EC27AA80288D");

            entity.ToTable("Pedido");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.HoraEntrega).HasColumnType("datetime");
            entity.Property(e => e.HoraPedido).HasColumnType("datetime");
            entity.Property(e => e.UsuarioId).HasColumnName("UsuarioID");

            entity.HasOne(d => d.Usuario).WithMany(p => p.Pedidos)
                .HasForeignKey(d => d.UsuarioId)
                .HasConstraintName("FK__Pedido__UsuarioI__3C69FB99");
        });

        modelBuilder.Entity<Produto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Produto__3214EC279B092A5B");

            entity.ToTable("Produto");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Nome)
                .HasMaxLength(80)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Usuario__3214EC277C0785B0");

            entity.ToTable("Usuario");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Email)
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.ImagemId).HasColumnName("ImagemID");
            entity.Property(e => e.Nome)
                .HasMaxLength(80)
                .IsUnicode(false);
            entity.Property(e => e.Salt)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Senha).IsUnicode(false);

            entity.HasOne(d => d.Imagem).WithMany(p => p.Usuarios)
                .HasForeignKey(d => d.ImagemId)
                .HasConstraintName("FK__Usuario__ImagemI__398D8EEE");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
