using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmarDaktar.Models.ViewModel.Doctor
{
    public class HospitalCreateVM
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ImageName { get; set; }
        public string PhoneNo { get; set; }
        public string Email { get; set; }
        public string WebsiteUrl { get; set; }
        public string AboutUs { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }

        [NotMapped]
        public string ImageSrc { get; set; }
        public bool IsDeleted { get; set; }
        public long? DeletedById { get; set; }
        public DateTime? DeletedOn { get; set; }

    }
}
