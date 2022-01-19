//Jessica Kinghorn Mission 3
//Grade Calculator Model
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class GradeCalculatorModel
    {
        //Get/Set Assignments variable from user input
        [Required]
        [Range(0,100)]
        public string Assignments { get; set; }

        //Get/Set Group Projects variable from user input
        [Required]
        [Range(0, 100)]
        public string GroupProjects { get; set; }

        //Get/Set Quizzes variable from user input
        [Required]
        [Range(0, 100)]
        public string Quizzes { get; set; }

        //Get/Set Exams variable from user input
        [Required]
        [Range(0, 100)]
        public string Exams { get; set; }

        //Get/Set Intex variable from user input
        [Required]
        [Range(0, 100)]
        public string Intex { get; set; }


    }
}


