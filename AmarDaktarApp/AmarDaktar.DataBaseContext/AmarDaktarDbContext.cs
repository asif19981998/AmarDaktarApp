using AmarDaktar.Models.EntityModels;
using Login_and_Log_out.Models;
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
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Hospital> Hospitals { get; set; }
        public DbSet<User> Users { get; set; }


    }
}
