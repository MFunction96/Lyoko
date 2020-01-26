using IdentityServer4.EntityFramework.Options;
using Lyoko.Models;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Lyoko.Data
{
    public class LyokoDbContext : ApiAuthorizationDbContext<LyokoWarrior>
    {
        public LyokoDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
    }
}
