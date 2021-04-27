using AmarDaktar.BLL.Contracts;

using AmarDaktar.Models.EntityModels;
using AmarDaktar.Repositories.Abastractions.IEntity;
using AmarDaktar.Repositories.Abastractions.IUnitWork;
using AmarDaktarApp.AppBaseControllerServiceRepository;
using Base.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.BLL
{
    public class DoctorService: AppBaseService<Doctor>, IDoctorService
    {
        private IDoctorRepository _repository;
        public DoctorService(IDoctorRepository iRepository,IUnitOfWork iUnitOfWork):base(iRepository, iUnitOfWork)
        {
            _repository = iRepository;

        }
    }
}
