
using AmarDaktar.BLL.Contracts;
using AmarDaktar.Models.EntityModels;
using AmarDaktar.Repositories.Abastractions.IUnitWork;

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AmarDaktarApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : AppController
    {
        private IDoctorService _service;
        public DoctorController(IDoctorService iService,IUnitOfWork iUnitOfWork):base(iUnitOfWork)
        {
            _service = iService;

        }
        // GET: api/<DoctorController>
        [HttpGet]
        public ICollection<Doctor> Get()
        {
            return _service.GetAll();
        }

        // GET api/<DoctorController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<DoctorController>
        [HttpPost]
        public bool Post(Doctor doctor)
        {
          bool  isSubmitterd = _service.Add(doctor);
            return isSubmitterd;
        }

        // PUT api/<DoctorController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
