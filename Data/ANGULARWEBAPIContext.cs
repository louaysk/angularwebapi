using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ANGULARWEBAPI.Models;

namespace ANGULARWEBAPI.Data
{
    public class ANGULARWEBAPIContext : DbContext
    {
        public ANGULARWEBAPIContext (DbContextOptions<ANGULARWEBAPIContext> options)
            : base(options)
        {
        }

        public DbSet<ANGULARWEBAPI.Models.PaymentDetail> PaymentDetail { get; set; }
    }
}
