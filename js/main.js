window.onload= function() {

  var x = document.getElementById("process1"); 
  var y =document.getElementById("process2");
  var z =document.getElementById("process3");
  var a =document.getElementById("process4");

  x.style.display="none";
  y.style.display="none";
  z.style.display="none";
  a.style.display="none";


if (window.innerWidth < 768){
$("#process1").appendTo("#process1min");
$("#process2").appendTo("#process2min");
$("#process3").appendTo("#process3min");
$("#process4").appendTo("#process4min");
}};




var languageSelector = document.getElementById('language-selector');

languageSelector.addEventListener('change', function() {
  var selectedLanguage = languageSelector.value;
  console.log('Kiválasztott nyelv:', selectedLanguage);


  if(selectedLanguage==="en"){
    window.location.href = './ferrumferro_en.html';
  }else if(selectedLanguage==="de"){
    window.location.href = './ferrumferro_de.html';
  }else if(selectedLanguage==="hu"){
    window.location.href = './ferrumferro_hu.html';
  }

  

});

  
(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


 

    // Smooth scrolling on the navbar links
    $(".navbar-nav a, .btn-scroll").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
    });
    
})(jQuery);





function textappear1() { 

    var x = document.getElementById("process1"); 
    var y =document.getElementById("process2");
    var z =document.getElementById("process3");
    var a =document.getElementById("process4");

    

    if (x.style.display === "none") { 
      x.style.display = "block"; 
      y.style.display = "none"; 
      z.style.display = "none"; 
      a.style.display = "none"; 
    } 
    else{ 
      x.style.display = "none"; 
    } 
  };

  

  
function textappear2() { 
    var x = document.getElementById("process1"); 
    var y =document.getElementById("process2");
    var z =document.getElementById("process3");
    var a =document.getElementById("process4");



    if (y.style.display === "none") { 
      y.style.display = "block"; 
      x.style.display = "none"; 
      z.style.display = "none"; 
      a.style.display = "none"; 
    } else { 
      y.style.display = "none"; 
    } 
  };

function textappear3() { 
    var x = document.getElementById("process1"); 
    var y =document.getElementById("process2");
    var z =document.getElementById("process3");
    var a =document.getElementById("process4");

 

    if (z.style.display === "none") { 
      z.style.display = "block"; 
      x.style.display = "none"; 
      y.style.display = "none"; 
      a.style.display = "none"; 
    } else { 
      z.style.display = "none"; 
    } 
  };

function textappear4() { 
    var x = document.getElementById("process1"); 
    var y =document.getElementById("process2");
    var z =document.getElementById("process3");
    var a =document.getElementById("process4");



    if (a.style.display === "none") { 
      a.style.display = "block"; 
      y.style.display = "none"; 
      z.style.display = "none"; 
      x.style.display = "none"; 
    } else { 
      a.style.display = "none"; 
    } 
  };

