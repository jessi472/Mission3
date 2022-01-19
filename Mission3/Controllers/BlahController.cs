//Jessica Kinghorn Mission 3
//Contoller used for all views in Mission 3 
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Controllers
{
    public class BlahController : Controller
    {
        //View About Me (home) page
        public IActionResult Index()
        {
            return View();
        }

        //View Grade Calculator Page
        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        //View Result from Grade CAlculator- model and js
        [HttpPost]
        public IActionResult GradeCalculator(Models.GradeCalculatorModel model)
        {
            return View();
        }
    }

}
