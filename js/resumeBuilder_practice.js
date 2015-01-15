var formattedName = HTMLheaderName.replace("%data%", "Derek Sheau");
var role = "Senior Operations Engineer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
    "name" : "Derek Sheau",
    "role" : "Operations Engineer",
    "contact" : {
        "desk": "610-650-3645",
        "mobile": "610-703-4642",
        "email": "ds252n@att.com"
    },
    "picture" : "images/me.jpg",
    "Welcome" : "Welcome to my resume.",
    "skills" : ["RF", "E911", "Web Developer"]
};

var work = {};
work.CurrentJob = "Senior Operations Engineer";
work.Employer = "AT&T";
work.YearsWorked = "2008 - Present";
work.City = "Norristown";


var projects = {
    "rf": ["Design Engieer", "E911 Engineer"],
    "Operations": ["Trouble Shooting", "CR Approvals", "LMUs", "E-SMLC"],
    "E911": ["TruePosition", "Ericsson SMLC"]
};

var eduacation2 = {
    "SchoolInfo": [                     // Start Array
    {                                   // Start first school Object
        "school": "Lehigh",
        "city": "Bethlehem",
        "major": "BSEE",
        "minor": "n/a",
        "graduated": "1994",
        "onlineCourseInfo": "n/a"
    },                                  // First school complete
    {                                   // Start second school Object
        "school": "Udacity",
        "city": "Virtual Learning",
        "major": "Front End Web Developer",
        "minor": "n/a",
        "graducated": "2015",
        "onlineCourseInfo": "www.udacity.com"      
    }                                   // Second school complete
  ]
}


    if (bio["skills"] == true) {
      $(#header).append(HTMLSkillsStart);
      // $(#skills).append(bio["skills"][0]);
    };