
using AmarDaktar.BLL.Contracts;
using AmarDaktar.Models.EntityModels;
using AmarDaktar.Models.ViewModel.Doctor;
using AmarDaktar.Repositories.Abastractions.IUnitWork;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AmarDaktarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : AppController
    {
        private IDoctorService _service;
        private IMapper _mapper;
        private readonly IWebHostEnvironment _hostEnvironment;
        public DoctorController(IDoctorService iService,IUnitOfWork iUnitOfWork,IMapper mapper, IWebHostEnvironment hostEnvironment) :base(iUnitOfWork)
        {
            _service = iService;
            _mapper = mapper;
            this._hostEnvironment = hostEnvironment;

        }
        // GET: api/<DoctorController>
        //[HttpGet]
        //public ICollection<Doctor> Get()
        //{
        //    return _service.GetAll();
        //}
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK,Type=typeof(Doctor))]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public  IActionResult GetDoctor()
        {
            var data =  _service.GetApprovedData()
                .Select(x => new Doctor()
                {
                    Id = x.Id,
                    Name = x.Name,
                    ImageName = x.ImageName,
                    Degree = x.Degree,
                    Specialist = x.Specialist,
                    Description = x.Description,
                    YearsOfExperience = x.YearsOfExperience,
                    BMDC = x.BMDC,
                    Fees = x.Fees,
                    PhoneNo = x.PhoneNo,
                    Password = x.Password,
                    Gender = x.Gender,
                    Department = x.Department,
                    Email = x.Email,
                    MeetUrl = x.MeetUrl,
                    FacebookUrl = x.FacebookUrl,
                    TwitterUrl = x.TwitterUrl,
                    LinkinUrl = x.LinkinUrl,
                    IsDeleted = x.IsDeleted,
                    Position = x.Position,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                }).ToList();

            return Ok(data);
        }

        [HttpGet]
        [Route("GetAllDoctor")]
        public ActionResult<IEnumerable<Doctor>> GetAllDoctor()
        {
            var data = _service.GetAll()
                .Select(x => new Doctor()
                {
                    Id = x.Id,
                    Name = x.Name,
                    ImageName = x.ImageName,
                    Degree = x.Degree,
                    Specialist = x.Specialist,
                    Description = x.Description,
                    YearsOfExperience = x.YearsOfExperience,
                    BMDC = x.BMDC,
                    Fees = x.Fees,
                    PhoneNo = x.PhoneNo,
                    Password = x.Password,
                    Gender = x.Gender,
                    Department = x.Department,
                    Email = x.Email,
                    MeetUrl = x.MeetUrl,
                    FacebookUrl = x.FacebookUrl,
                    TwitterUrl = x.TwitterUrl,
                    LinkinUrl = x.LinkinUrl,
                    IsDeleted = x.IsDeleted,
                    Position = x.Position,
                    IsApproved = x.IsApproved,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                }).ToList();

            return data;
        }


        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DoctorController>
        [HttpPost]
        [Consumes(MediaTypeNames.Application.Json)]
        public async Task<ActionResult<Doctor>> Post([FromForm] DoctorCreateVM doctorModel)
        {
          var doctor = _mapper.Map<Doctor>(doctorModel);
            doctor.ImageName = await SaveImage(doctorModel.ImageFile);
          bool  isSubmitterd = _service.Add(doctor);
            if (isSubmitterd)
              return  StatusCode(200);
          return Ok("Not Saved");
        }

        // PUT api/<DoctorController>/5
       [HttpPut]
       [Route("Update")]
       public async Task<IActionResult> Update(Doctor doctor)
        {
            try
            {
                var result = await _service.UpdateAsync(doctor);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return Ok(ex);
            }
        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
   
      [NonAction]
      public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
    
    }
}
