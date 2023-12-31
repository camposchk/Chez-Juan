using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Back.Services;

using DTO;
using Model;

public class UserService : IUserService
{
    CjdbContext ctx;
    ISecurityService security;
    public UserService(CjdbContext ctx, ISecurityService security)
    {
        this.ctx = ctx;
        this.security = security;
    }

    public async Task Create(UserData data)
    {
        Usuario usuario = new Usuario();
        var salt = await security.GenerateSalt();

        usuario.Email = data.Login;
        usuario.Nome = data.Nome;
        usuario.IsAdm = data.Adm;
        usuario.Senha = await security.HashPassword(
            data.Password, salt
        );
        usuario.Salt = salt;

        this.ctx.Add(usuario);
        await this.ctx.SaveChangesAsync();
    }

    public async Task<Usuario> GetByLogin(string login)
    {
        var query =
            from u in this.ctx.Usuarios
            where u.Email == login
            select u;
        
        return await query.FirstOrDefaultAsync();
    }
}