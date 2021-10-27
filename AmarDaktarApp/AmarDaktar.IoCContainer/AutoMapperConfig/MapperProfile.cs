using AmarDaktar.Models.EntityModels;
using AmarDaktar.Models.ViewModel.Doctor;
using AutoMapper;
using Login_and_Log_out.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.IoCContainer.AutoMapperConfig
{
    public class MapperProfile:Profile
    {
        public MapperProfile()
        {
            CreateMap<DoctorCreateVM, Doctor>();
            CreateMap<Doctor, DoctorCreateVM>();
            CreateMap<HospitalCreateVM, Hospital>();
            CreateMap<Hospital, HospitalCreateVM>();
            
        }
    }
}
