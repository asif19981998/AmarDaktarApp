using AmarDaktar.BLL.Contracts;
using AmarDaktar.Models.EntityModels;
using AmarDaktar.Repositories.Abastractions.IEntity;
using AmarDaktar.Repositories.Abastractions.IUnitWork;
using AmarDaktarApp.AppBaseControllerServiceRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.BLL
{
    public class HospitalService : AppBaseService<Hospital>, IHospitalService
    {
        private IHospitalRepository _repository;
        public HospitalService(IHospitalRepository iRepository, IUnitOfWork iUnitOfWork) : base(iRepository, iUnitOfWork)
        {
            _repository = iRepository;

        }
        public IEnumerable<Hospital> GetApprovedData()
        {
            return _repository.GetApprovedData();
        }
        public IEnumerable<Hospital> GetNotApprovedData()
        {
            return _repository.GetNotApprovedData();
        }
    }
}
