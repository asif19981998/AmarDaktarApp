using AmarDaktar.Models.EntityModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.DataBaseContext
{
    public class AmarDaktarDbContext : DbContext
    {
        public AmarDaktarDbContext(DbContextOptions options) : base(options)
        {

        }
        DbSet<Doctor> Doctors { get; set; }
    }
}
