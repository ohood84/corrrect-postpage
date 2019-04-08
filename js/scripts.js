function JobPosts(){
  this.jPosts = [];
}


JobPosts.prototype.addJobPosting = function(jobPost){
  this.jPosts.push(jobPost);
}

JobPosts.prototype.removeJob = function(jobPost){
  this.jPosts.pop(jobPosts);
}

var appSkillListElement="";
var jbSkillListElement="";

function JobPosting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,jbSkills,moreJbSkills) {
  this.companyName = comName;
  this.title = jobTitle;
  this.difficulty = difficulty;
  this.location = jobLocation;
  this.condition = jobCondition;
  this.description = jobDescription;
  this.jbSkills = jbSkills;;
  this.moreJbSkills = moreJbSkills;
}

function Developers() {
  this.devs=[];
}

 Developers.prototype.addDeveloper = function(dev){
  this.devs.push(dev);
}

 Developers.prototype.removeDeveloper = function(dev){
  this.devs.pop(dev);
}

function Developer(fName,lName,title,hourlyRate,experience,devSkills){
  this.fName = fName;
  this.lName = lName;
  this.title = title;
  this.hourlyRate = hourlyRate;
  this.experience = experience;
  this.devSkills = devSkills;
}

var textInfo = function(dev){ //to print the developer's information
  $("#app-name").text(dev.fName+" "+dev.lName);
  $("#app-h").text(dev.hourlyRate);
  $("#app-position").text(dev.title);
  $("#print-exp").text(dev.experience);

}

var jobTextInfo = function(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,moreJbSkills){ //to print the developer's information

  // $("bg-title").text(post.title);
}
var reset = function(){
  $("#job-app")[0].reset();
  $("#form-post")[0].reset();

}
var posting =function(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,moreJbSkills){
  if (difficulty === "entry"){
    // console.log(newPost);

    $(".entry-level").append('<div class="entry-level">'+
                            '<div class="alert alert-info">'+
                            '<h5 class="alert-heading">Job Title:<strong><span id="bg-title">'+jobTitle+'</span></strong></h5>'+
                            '<p>Company name: <span class="bg-comp-name">'+comName+'</span></p>'+
                            '<p>Location: <span class="bg-location">'+jobLocation+'</span></p>'+
                            '<p>Skills Required'+
                            '<ul>'+
                            '<span class="bg-skills">'+jbSkillListElement+'</span>'+
                            '</ul>'+
                            '</p>'+
                            '<p>Additional skills: <span class="bg-add-skills">'+moreJbSkills+'</span></p>'+
                            '<p>Description: <span class="bg-post-desc">'+jobDescription+'</span></p>'+
                            '<p>Work condition: <span class="bg-condition">'+jobCondition+'</span></p>'+


                            '<div class="flx-btn">'+
                            '<button type="button" class="apply">Apply For A Job</button>'+
                            '</div>'+
                              '</div>'+
                            '</div>');

          // $(".bg-skills").append()
  }

  else if (difficulty === "intermediate"){
    $(".int-level").append('<div class="int-level">'+
                          '<div class="alert alert-info">'+
                          '<h5 class="alert-heading">Job Title:<strong><span id="int-title">'+jobTitle+'</span></strong></h5>'+
                          '<p>Company name: <span id="int-comp-name">'+comName+'</span></p>'+
                          '<p>Location: <span id="int-location">'+jobLocation+'</span></p>'+
                          '<p> Skills Required'+
                          '<ul>'+
                          '<span id="int-skills">'+jbSkillListElement+'</span>'+
                          '</ul>'+
                          '</p>'+
                          '<p>Additional skills: <span id="int-add-skills">'+moreJbSkills+'</span></p>'+
                          '<p>Description: <span id="int-post-desc">'+jobDescription+'</span></p>'+
                          '<p>Work condition: <span id="int-condition">'+jobCondition+'</span></p>'+


                          '<div class="flx-btn">'+
                          '<button type="button" class="apply">Apply For A Job</button>'+
                          '</div>'+
                          '</div>'+
                        '</div>');
  }


  else if (difficulty === "advanced"){
    $(".adv-level").append('<div class="adv-level">'+
                          '<div class="alert alert-info">'+
                          '<h5 class="alert-heading">Job Title: <strong><span id="adv-title">'+jobTitle+'</span></strong></h5>'+
                          '<p>Company name: <span id="adv-comp-name">'+comName+'</span></p>'+
                          '<p>Location: <span id="adv-location">'+jobLocation+'</span></p>'+
                          '<p> Skills Required'+
                          '<ul>'+
                          '<span id="adv-skills">'+jbSkillListElement+'</span>'+
                          '</ul>'+
                          '</p>'+
                          '<p>Additional skills: <span id="adv-add-skills">'+moreJbSkills+'</span></p>'+
                          '<p>Description: <span id="adv-post-desc">'+jobDescription+'</span></p>'+
                          '<p>Work condition: <span id="adv-condition">'+jobCondition+'</span></p>'+


                          '<div class="flx-btn">'+
                          '<button type="button" class="apply">Apply For A Job</button>'+
                          '</div>'+
                          '</div>'+
                        '</div>');
  }
}

$(document).ready(function()  {
var newpost;

 ///developer click function to take form inputs
 $("#app-btn").click(function(event){
   event.preventDefault();
   var devsArray = new Developers();
   var developer1 = new Developer();

   var fname,lname,email,title,hourlyRate,experience;
   var appSkills =[];
   fName = $("input#app-first-name").val();
   lName = $("input#app-last-name").val();
   title = $("input#app-title").val();
   hourlyRate = parseInt($("input#app-rate").val());
   experience = $("input#app-exp").val();
   developer1.appSkills=[];

   $("input:checkbox[name=app-skills]:checked").each(function(){
       appSkillListElement += "<li>" + $(this).val() + "</li>";
       $("#app-skills").text(appSkillListElement);
       developer1.appSkills.push($(this).val());
    });

  developer1.fName = fName;
  developer1.lName = lName;
  developer1.title = title;
  developer1.hourlyRate = hourlyRate;
  developer1.experience = experience;
  developer1.appSkills = appSkills;


  devsArray.addDeveloper(developer1);
  console.log(devsArray);
  textInfo(developer1);

  $(".app-form").hide();
  $(".interface").show();
  $(".jumbotron").show();
  $(".developer-info").show();


});    // to close the  app-btn click.


 ///Company -click function to post the jop posting form
  $("#post-btn").click(function(event){
    event.preventDefault();



    // var newJobPost = new JobPosting();

    var comName = $("#com-name").val();
    // alert(comName);
    var jobTitle = $("#job-title").val();
    var difficulty = $("#difficulty").val();
    var jobLocation = $("#location").val();
    var jobCondition = $("#condition").val();
    var jobDescription = $("#description").val();
    var moreJbSkills =  $("#more-jb-skills").val();
    var jbSkills;
     newPost = new JobPosting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,jbSkills,moreJbSkills);
   // cName = newPost.comName;
    // console.log(newPost);
    newPost.jbSkills = [];
     jbSkillListElement = "";
    $("input:checkbox[name=job-skills]:checked").each(function(){
        jbSkillListElement += "<li>" + $(this).val() + "</li>";
        newPost.jbSkills.push($(this).val());
   });


   posting(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,moreJbSkills);
   jobTextInfo(comName,jobTitle,difficulty,jobLocation,jobCondition,jobDescription,moreJbSkills);
   $(".apply").click(function(){
     $(".app-form").show();
     $(".jumbotron").hide();
     $(".interface").hide();
     $(".post-form").hide();
     $(".developer-info").hide();
     reset();
   });

   $(".interface").show();
   $(".jumbotron").show();
   $(".post-form").hide();
   $(".developer-info").hide();
   reset();


  }); //for the post click

  $("#posting-btn").click(function(){
    $(".post-form").show();
    $(".jumbotron").hide();
    $(".interface").hide();
    $(".app-form").hide();
    $(".developer-info").hide();

  });





});
