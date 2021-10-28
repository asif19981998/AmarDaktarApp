using AmarDaktar.Models.EntityModels;
using Base.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.BLL.Contracts
{
    public interface IHospitalService:IMainService<Hospital>
    {
        IEnumerable<Hospital> GetApprovedData();
        IEnumerable<Hospital> GetNotApprovedData();
    }
}
