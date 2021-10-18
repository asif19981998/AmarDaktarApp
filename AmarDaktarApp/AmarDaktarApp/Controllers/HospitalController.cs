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
using System.Threading.Tasks;

namespace AmarDaktarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : AppController
    {
        private IHospitalService _service;
        private IMapper _mapper;
        private readonly IWebHostEnvironment _hostEnvironment;
        public HospitalController(IHospitalService iService, IUnitOfWork iUnitOfWork, IMapper mapper, IWebHostEnvironment hostEnvironment) : base(iUnitOfWork)
        {
            _service = iService;
            _mapper = mapper;
            this._hostEnvironment = hostEnvironment;

        }
        // GET: api/<HospitalController>
        //[HttpGet]
        //public ICollection<Hospital> Get()
        //{
        //    return _service.GetAll();
        //}
        [HttpGet]
        public ActionResult<IEnumerable<Hospital>> GetHospital()
        {
            var data = _service.GetAll()
                .Select(x => new Hospital()
                {
                    Id = x.Id,
                    Name = x.Name,
                    ImageName = x.ImageName,
                    ImageFile = x.ImageFile,
                    Address = x.Address,
                    Email = x.Email,
                    AboutUs = x.AboutUs,
                    WebsiteUrl = x.WebsiteUrl,
                    ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, x.ImageName)
                }).ToList();

            return data;
        }

        // GET api/<HospitalController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<HospitalController>
        [HttpPost]
        public async Task<ActionResult<Hospital>> Post([FromForm] HospitalCreateVM hospitalModel)
        {
            var hospital = _mapper.Map<Hospital>(hospitalModel);
            hospital.ImageName = await SaveImage(hospitalModel.ImageFile);
            bool isSubmitterd = _service.Add(hospital);
            if (isSubmitterd)
                return StatusCode(200);
            return Ok("Not Saved");
        }

        // PUT api/<HospitalController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<HospitalController>/5
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
