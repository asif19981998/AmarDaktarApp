using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Models.ViewModel.Doctor
{
    public class DoctorCreateVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string ImageName { get; set; }
        public IFormFile ImageFile { get; set; }
        public string ImageSrc { get; set; }
        public string Degree { get; set; }
        public string Specialist { get; set; }
        public string Description { get; set; }
        public double YearsOfExperience { get; set; }
        public string BMDC { get; set; }
        public double Fees { get; set; }
        public string PhoneNo { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
        public string Department { get; set; }

        public string Email { get; set; }
        public string MeetUrl { get; set; }
        public string FacebookUrl { get; set; }
        public string TwitterUrl { get; set; }
        public string LinkinUrl { get; set; }
        public string Position { get; set; }
        public bool IsDeleted { get; set; }

        public long? DeletedById { get; set; }
        public DateTime? DeletedOn { get; set; }

    }
}
