var bio = {
    "name": "Derek Sheau",
    "role": "Senior Operations Engineer",
    "contacts": {
        "mobile": "610-703-4642",
        "email": "ds252n@att.com",
        "github": "dardmore",
        "twitter": "dsheau", 
        "location": "Philadelphia, PA"
    },
    "welcomeMessage": "I am an Engineering professional with a background in Front End Web Development!!",
    "skills": [
        "RF",
        "E911",
        "Web Developer"
    ],
    "biopic": "images/fry.jpg",
//    "biopic": "http://placehold.it/100x200",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",  bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedPic);
        $("#header").append(formattedWelcomeMessage);
        if (bio["skills"].length > 0) {
            $("#header").append(HTMLskillsStart);
            for(myskills in bio.skills) {
                var formattedSkill = HTMLskills.replace("%data%", bio["skills"][myskills]);
                $("#header").append(formattedSkill);
            }
        }
    }
}

var education = {
    "schools": [
        {
            "name": "Lehigh University",
            "location": "Bethlehem, PA",
            "degree": "BSEE",
            "majors": [
                "Electrical Engineering"
            ],
            "dates": 1994,
            "url": "http://www.lehigh.edu"
        },
        {
            "name": "School of Hardknocks",
            "location": "Palo Alto, CA",
            "degree": "Life",
            "majors": [
                "Family",
                "Time Management"
            ],
            "dates": 2014,
            "url": "N/A"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "date": 2015,
            "url": "www.udacity.com"
        },
        {
            "title": "Progam Management",
            "school": "SkillSoft",
            "date": 2014,
            "url": "www.skillport.com"
            
        }
    ],
    "display": function () {
        if (education.schools.length > 0) {
            for(myEducation in education.schools) {
                $("#education").append(HTMLschoolStart);
                var schoolName = HTMLschoolName.replace("%data%", education.schools[myEducation].name);
                schoolName = schoolName.replace("#", education.schools[myEducation].url);
                var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[myEducation].location);
                var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[myEducation].degree);
                var schoolDate = HTMLschoolDates.replace("%data%", education.schools[myEducation].dates);
                $(".education-entry:last").prepend(schoolName + schoolDegree);
                $(".education-entry:last").append(schoolDate);
                $(".education-entry:last").append(schoolLocation);
                for(myMajors in education.schools[myEducation].majors) {
                    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[myEducation].majors[myMajors]);
                    $(".education-entry:last").append(schoolMajor);
                }
            }
        }
        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(myOnlineCourses in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[myOnlineCourses].title);
                onlineTitle = onlineTitle.replace("#", education.onlineCourses[myOnlineCourses].url);
                var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[myOnlineCourses].school);
                var onlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[myOnlineCourses].date);
                var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[myOnlineCourses].url);
                onlineURL = onlineURL.replace("#", education.onlineCourses[myOnlineCourses].url);
                $(".education-entry:last").append(onlineTitle + onlineSchool);
                $(".education-entry:last").append(onlineDate);
                $(".education-entry:last").append(onlineURL);
            }
        }
    }
}

var work = {
    "jobs": [
        {
            "employer": "AT&T",
            "title": "Senior Operations Engineer",
            "location": "Norristown, PA",
            "dates": "2008 - Present",
            "description": "Maintain nationwide E911 network from end to end.  Knowledge include GSM, UMTS and LTE positioning methods"
        },
        {
            "employer": "TruePosition",
            "title": "Senior E911 Design Engineer",
            "location": "Berwyn, PA",
            "dates": "2004 - 2008",
            "description": "Designed UTDOA systems for major wireless carriers to provide FCC mandated emergency locations in their network"
        }
    ],
    "display": function () {
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            for(myWork in work.jobs) {
                var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[myWork].employer);
                var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[myWork].title);
                var formattedCity = HTMLworkLocation.replace("%data%", work.jobs[myWork].location);
                var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[myWork].dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[myWork].description);
                $(".work-entry:last").append(formattedWork + " " + formattedPosition);
                $(".work-entry:last").append(formattedCity);
                $(".work-entry:last").append(formattedWorkDate);
                $(".work-entry:last").append(formattedDescription);
            }
        }
    }
}

var projects = {
    "projects": [
        {
            "title": "LMU",
            "dates": "January 2010 - Current",
            "description": "Used remote diagnostic tools to troubleshoot and determine the course of action of how to repair the LMUs in the field.",
            "images": "images/lmu.jpg"
        },
        {
            "title": "SAS Deloyment",
            "dates": "January 2010 - Current",
            "description": "Provide technical knowledge based on the operational side to the implementation and roll out of the Ericcson SAS.",
            "images": "images/sas.jpg"
        },
        {
            "title": "RF",
            "dates": "June 2014 - Current",
            "description": "Designed and optimized the build out of coverage and capacity sites for the Philadelphia market.",
            "images": "image/antenna.jpg"
        }
    ],
    "display": function () {
        if (projects.projects.length > 0) {
            for(myProject in projects.projects) {
                $("#projects").append(HTMLprojectStart);
                var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[myProject].title);
                var projectDate = HTMLprojectDates.replace("%data%", projects.projects[myProject].dates);
                var projectDescript = HTMLprojectDescription.replace("%data%", projects.projects[myProject].description);
                $(".project-entry:last").append(projectTitle);
                $(".project-entry:last").append(projectDate);
                $(".project-entry:last").append(projectDescript);
                if (projects.projects[myProject].images > 0) {
                    var ProjectImage = HTMLprojectImage.replace("%data%", projects.projects[myProject].images);
                    $(".project-entry:last").append(ProjectImage);
                }
            }
        }  
    }
}

bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);