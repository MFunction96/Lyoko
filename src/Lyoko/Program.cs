using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using System.Net;
using System.Security.Authentication;

namespace Lyoko
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureKestrel(options =>
                {
                    options.Listen(IPAddress.Loopback, 4443, listenOptions =>
                    {
                        listenOptions.Protocols = HttpProtocols.Http2;
                        listenOptions.UseHttps("Certificates/localhost.pfx", "!QAZ2wsx");
                    });
                    options.ConfigureHttpsDefaults(listenOptions =>
                    {
                        listenOptions.SslProtocols = SslProtocols.Tls12;
                    });
                })
                .UseStartup<Startup>();
    }
}
