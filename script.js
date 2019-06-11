// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
$(document).ready(function() {
  $("#page-top").css("background", "var(--primary)");
  var x = $("#page-top").css("backgroundColor");
  var z1 = x.split("(")[0] + "a(" + x.split("(")[1];
  var y = z1.split(")")[0] + ", .2)";
  $("#page-top").css("background", y);
  var _projects = [
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/shiftscheduler.PNG",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/sethscheduleThumbnail.png",
      "Currently moderated website",
      "Shift trade website",
      "http://sethschedule.tk/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/brclts.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/brcltThumbnail.png",
      "Currently moderated website",
      "Beautiful By Design",
      "http://beautifulbydesign.mipropia.com/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/3rh.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/3rhThumbnail.png",
      "Currently moderated website",
      "Camping company website",
      "http://threerivershideaway.com/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/sqadv.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/sqadvThumbnail.png",
      "Currently moderated website",
      "Rafting company website",
      "http://www.sequoiaadventures.com/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/tshrts.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/tshrtsThumbnail.png",
      "Currently moderated website",
      "T-shirt boutique",
      "http://beautifulbydesigntops.mipropia.com/"
    ]
  ];

  for (i = 0; i < _projects.length; i++) {
    document.getElementById("projectsContainer").innerHTML =
      document.getElementById("projectsContainer").innerHTML +
      '<div class="container zoomPic" id="noticeProjects' +
      i +
      '"><div class="row"><div class="col-lg-8 mx-auto text-center"><div id="imgContainer"><span id="closeX">+</span><span class="previous" id="projectsPrevious' +
      i +
      '">&lsaquo;</span><span class="next" id="projectsNext' +
      i +
      '">&rsaquo;</span><img class="galleryImg" src="' +
      _projects[i][0] +
      '"></div></div></div><div class="row"><div class="col-lg-8 mx-auto text-center"><a class="btn btn-light btn-xl sr-button" target="_blank" href="' +
      _projects[i][4] +
      '">View</a></div></div></div><div class="col-lg-4 col-sm-6"><a class="portfolio-box galleryClick" id="noticeProjectsAnchor' +
      i +
      '"><img class="img-fluid" src="' +
      _projects[i][1] +
      '"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' +
      _projects[i][2] +
      '</div><div class="project-name">' +
      _projects[i][3] +
      "</div></div></div></a></div>";
  }
  var _apps = [
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/sg.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/sgThumbnail.png",
      "Application",
      "Simon game",
      "http://codepen.io/Octopinky/full/LyyQmd/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/ttt.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/tttThumbnail.png",
      "Application",
      "Tic-tac-toe",
      "http://codepen.io/Octopinky/full/JNRvvZ/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/pmdr.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/pmdrThumbnail.png",
      "Application",
      "Timer",
      "http://codepen.io/Octopinky/full/EmVOqO/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/weatherAPI.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/weatherAPIThumbnail.png",
      "Application",
      "weather API",
      "http://codepen.io/Octopinky/full/grJRpr/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/gal.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/galThumbnail.png",
      "Application",
      "Website mock-up",
      "https://codepen.io/Octopinky/full/dpRjNO/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/wbshp.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/wbshpThumbnail.png",
      "Application",
      "Web Shop",
      "https://codepen.io/Octopinky/full/GjEoNZ/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/clc.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/clcThumbnail.png",
      "Application",
      "Calculator",
      "https://codepen.io/Octopinky/full/zBQYdQ/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/wiki.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/wikiThumbnail.png",
      "Application",
      "Wiki search",
      "https://codepen.io/Octopinky/full/ozgEPY/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/twtch.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/twtchThumbnail.png",
      "Application",
      "Streamers",
      "https://codepen.io/Octopinky/full/gwRadj/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/random_quote.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/random_quoteThumbnail.png",
      "Application",
      "Random Quote Machine",
      "https://codepen.io/Octopinky/full/BzEzNd/"
    ],
    [
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/tribute_page.png",
      "https://raw.githubusercontent.com/Octopinky/Cat-photos/master/tribute_pageThumbnail.png",
      "Application",
      "Tribute page",
      "https://codepen.io/Octopinky/full/dXRbom/"
    ]
  ];
  for (i = 0; i < _apps.length; i++) {
    document.getElementById("appsContainer").innerHTML =
      document.getElementById("appsContainer").innerHTML +
      '<div class="container zoomPic" id="noticeApps' +
      i +
      '"><div class="row"><div class="col-lg-8 mx-auto text-center"><div id="imgContainer"><span id="closeX">+</span><span class="previous" id="appsPrevious' +
      i +
      '">&lsaquo;</span><span class="next" id="appsNext' +
      i +
      '">&rsaquo;</span><img class="galleryImg" src="' +
      _apps[i][0] +
      '"></div></div></div><div class="row"><div class="col-lg-8 mx-auto text-center"><a class="btn btn-light btn-xl sr-button" target="_blank" href="' +
      _apps[i][4] +
      '">View</a></div></div></div><div class="col-lg-4 col-sm-6"><a class="portfolio-box galleryClick" id="noticeAppsAnchor' +
      i +
      '"><img class="img-fluid" src="' +
      _apps[i][1] +
      '"><div class="portfolio-box-caption"><div class="portfolio-box-caption-content"><div class="project-category text-faded">' +
      _apps[i][2] +
      '</div><div class="project-name">' +
      _apps[i][3] +
      "</div></div></div></a></div>";
  }
  //adds next/previous and closeX functionality
  $(".galleryClick").on("click", function() {
    $(".zoomPic").hide();
    if (this.id.match(/[A-Z]/g)[0] == "P") {
      $("#" + this.id.slice(0, 14) + this.id.match(/\d+/g) + "").show();
    } else {
      $("#" + this.id.slice(0, 10) + this.id.match(/\d+/g) + "").show();
    }
    $(".galleryImg, #closeX").on("click", function() {
      $(".zoomPic").hide();
    });
  });
  $(".previous, .next").on("click", function() {
    //determine if an item clicked is a project or an app then show respective image
    if (this.id[0] == "p") {
        $("#noticeProjects"+Number(this.id.match(/\d+/g)[0])+"").hide();
      if (this.id.match(/[A-Z]/g)[0] == "N") {
        $("#noticeProjects"+String(Number(this.id.match(/\d+/g)[0])+1)).show();
      }else{
        $("#noticeProjects"+String(Number(this.id.match(/\d+/g)[0])-1)).show();
      }
    }else{
      $("#noticeApps"+Number(this.id.match(/\d+/g)[0])+"").hide();
      if (this.id.match(/[A-Z]/g)[0] == "N") {
        $("#noticeApps"+String(Number(this.id.match(/\d+/g)[0])+1)).show();
      }else{
        $("#noticeApps"+String(Number(this.id.match(/\d+/g)[0])-1)).show();
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  var _typedOutText =
    "I received the Front End Development Certification as a part of getting Full Stack Web Development Certification. My current skills include HTML5, CSS3, PHP, Javascript, OOP, c-panel management, API keys implementation, Bootstrap as well as Wordpress CMS. I can create a custom template for a WordPress website, install, set-up and manage plug-ins as well as make other customizations. I can program, debug and deploy an application online or in another environment. Some of my hobbies include yoga, playing games online, playing piano and guitar and lots of other fun activities: I am a curious being. Coding is the most fun though. During the day, I code and in the evening I code.";
  function delay() {
    function doSetTimeout(i) {
      setTimeout(function() {
        document.getElementById("typedOutText").innerHTML =
          document.getElementById("typedOutText").innerHTML + _typedOutText[i];
      }, (i + 1) * 40);
    }
    for (i = 0; i < _typedOutText.length; i++) {
      doSetTimeout(i);
    }
  }
  setTimeout(delay, 1500);
});
