// $("#main").append("Derek E. Sheau");
/** #main is the name of one of the div in index.html.  .append adds the text to the end of the text file **/

/** var awesomeThoughts = "I am Derek and I am AWESOME!";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts); **/

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
    "picture" : "images/fry.jpg",
    "Welcome" : "Welcome to my resume.",
    "skills" : ["RF", "E911", "Web Developer"]
};

var work = {
    "workInfo": [
        {
            "position": "Senior Operations Engineer",
            "employer": "AT&T",
            "yearsWorked": "2008 - Present",
            "city": "Norristown",
            "description": "Maintain nationwide E911 network from end to end.  Knowledge include GSM, UMTS and LTE positioning methods"
        },
        {
            "position": "Senior E911 Design Engineer",
            "employer": "TruePosition",
            "yearsWorked": "2004 - 2008",
            "city": "Berwyn",
            "description": "Designed UTDOA systems for major wireless carriers to provide FCC mandated emergency locations in their network"
        }
      ]
    }
 
/*
work.CurrentJob = "Senior Operations Engineer";
work.Employer = "AT&T";
work.YearsWorked = "6";
work.City = "Norristown";
*/

var education = {};
education["School"] = "Lehigh University";
education["Years"] = "1990-1994";
education["City"] = "Bethlehem";

// Create Object using JSON
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

var project = {
  "projectInfo": [
    {
      "title": "LMU",
      "date": "January 2010 - Current",
      "description": "Used remote diagnostic tools to troubleshoot and determine the course of action of how to repair the LMUs in the field.",
      "image": "images/lmu.jpg"
    },
    {
      "title": "SAS Deloyment",
      "date": "January 2010 - Current",
      "description": "Provide technical knowledge based on the operational side to the implementation and roll out of the Ericcson SAS.",
      "image": "images/sas.jpg"
    },
    {
      "title": "RF",
      "date": "June 2014 - Current",
      "description": "Designed and optimized the build out of coverage and capacity sites for the Philadelphia market.",
      "image": "image/antenna.jpg"
    },
    {
      "title": "Design",
      "description": "Design of the market deployment of the E911 hardware for clients requesting to meet FCC mandated location distances for their emergency systems"
    },
    {
      "title": "MediaWatch",
      "description": "Software and Hardware design for MediaWatch system."
    }
  ],
  "display": function () {
    if (project.projectInfo.length > 0) {
      for(myProject in project.projectInfo) {
        $("#projects").append(HTMLprojectStart);
        var ProjectTitle = HTMLprojectTitle.replace("%data%", project.projectInfo[myProject].title);
        var ProjectDate = HTMLprojectDates.replace("%data%", project.projectInfo[myProject].date);
        var ProjectDescript = HTMLprojectDescription.replace("%data%", project.projectInfo[myProject].description);
        $(".project-entry:last").append(ProjectTitle);
        $(".project-entry:last").append(ProjectDate);
        $(".project-entry:last").append(ProjectDescript);
        if (project.projectInfo[myProject].image > 0) {
          var ProjectImage = HTMLprojectImage.replace("%data%", project.projectInfo[myProject].image);
          $(".project-entry:last").append(ProjectImage);
        }
      }  
    }
  }  
}

/*
$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
//$("#topContacts").prepend(bio.name);
$("#main").append(work["CurrentJob"]);
$("#main").append(education.School);
*/

    if (bio["skills"].length > 0) {
      $("#header").append(HTMLskillsStart);
/*  CHANGED THIS LIST TO A FOR-IN LOOP BELOW 
      var formattedSkill = HTMLskills.replace("%data%", bio["skills"][0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio["skills"][1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio["skills"][2]);
      $("#skills").append(formattedSkill);
*/
      for(myskills in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio["skills"][myskills]);
        $("#header").append(formattedSkill);
      }
    }
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    var formattedContact = HTMLcontactGeneric.replace("%contact%", "Desk");
    var formattedContact = formattedContact.replace("%data%",  bio.contact.desk);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    
    $("#topContacts").prepend(formattedContact);
    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedPic);

// Add Work Info
function displayWork() {
    if (work.workInfo.length > 0) {
      $("#workExperience").append(HTMLworkStart);
      for(myWork in work.workInfo) {
        var formattedWork = HTMLworkEmployer.replace("%data%", work.workInfo[myWork].employer);
        var formattedPosition = HTMLworkTitle.replace("%data%", work.workInfo[myWork].position);
        var formattedEmployerTitle = formattedWork + " " + formattedPosition;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedCity = HTMLworkLocation.replace("%data%", work.workInfo[myWork].city);
        $(".work-entry:last").append(formattedCity);
        var formattedWorkDate = HTMLworkDates.replace("%data%", work.workInfo[myWork].yearsWorked);
        $(".work-entry:last").append(formattedWorkDate);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.workInfo[myWork].description);
        $(".work-entry:last").append(formattedDescription);
      }  
    }
}

// Call function to display the work information
displayWork();

// Track mouse click location
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
//    console.log(loc);
})


// Internationalize the name (i.e. Capitalize last name, make sure first letter of first name is capitalized)
$("#main").append(internationalizeButton);

function inName(nameString) {
    var splitName = nameString.trim.split(" ");
    splitName[1] = splitName[1].toUpperCase();
    splitName[0] = splitName[0].slice(0,1).toUpperCase + splitName[0].slice(1).toLowerCase;

    return splitName[0] + " " + splitName[1];
}

/**  Displays the projects.  This function has been moved to the project object above.
$("#projects").append(HTMLprojectStart);
var ProjectTitle = HTMLprojectTitle.replace("%data%", projects.ATT[1].title);
var ProjectDate = HTMLprojectDates.replace("%data%", projects.ATT[1].date);
var ProjectDescript = HTMLprojectDescription.replace("%data%", projects.ATT[1].description);
$(".project-entry:last").append(ProjectTitle);
$(".project-entry:last").append(ProjectDate);
$(".project-entry:last").append(ProjectDescript);

$("#projects").append(HTMLprojectStart);
var ProjectTitle = HTMLprojectTitle.replace("%data%", projects.ATT[2].title);
var ProjectDate = HTMLprojectDates.replace("%data%", projects.ATT[2].date);
var ProjectDescript = HTMLprojectDescription.replace("%data%", projects.ATT[2].description);
$(".project-entry:last").append(ProjectTitle);
$(".project-entry:last").append(ProjectDate);
$(".project-entry:last").append(ProjectDescript);
**/

// invoke the display projects function
project.display();

$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);  
});