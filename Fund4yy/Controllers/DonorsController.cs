using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace YY_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DonorsController : ControllerBase
    {
        IDonorsBL _IDonorsBL;

        // Dependency Injection
        public DonorsController(IDonorsBL DonorsBL)
        {
            _IDonorsBL = DonorsBL;
        }
        // GET: api/Donors
        [HttpGet]
        public List<DonorsList> Get()
        {
            return _IDonorsBL.GetAllDonors();
        }

        //// GET: api/Donors/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Donors
        [HttpPost]
        public Boolean Post([FromBody] Donors Donor)
        {
            return _IDonorsBL.PostDonor(Donor);
        }

        //    // PUT: api/Donors/5
        //    [HttpPut("{id}")]
        //    public void Put(int id, [FromBody] string value)
        //    {
        //    }

        //    // DELETE: api/ApiWithActions/5
        //    [HttpDelete("{id}")]
        //    public void Delete(int id)
        //    {
        //    }
    }
}
