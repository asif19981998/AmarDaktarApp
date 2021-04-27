using AmarDaktar.DataBaseContext;
using AmarDaktar.Models.EntityModels;
using AmarDaktar.Repositories.Abastractions.IEntity;

using Base.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Repositories.EntityRepo
{
    public class DoctorRepository: BaseRepository<Doctor>,IDoctorRepository
    {
        private AmarDaktarDbContext _db;
        public DoctorRepository(AmarDaktarDbContext db) : base(db)
        {
            _db = db;
        }
    }
}
