
using AmarDaktar.DataBaseContext;
using AmarDaktar.Repositories.Abastractions.IUnitWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Repositories.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(AmarDaktarDbContext db)
        {

        }
     
        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public Task<bool> SaveChangesAsync()
        {
            return null;
        }
        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
