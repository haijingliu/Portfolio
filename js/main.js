
//---*---nav_backgroundInteractive---*---//

//---*---footer_backgroundInteractive---*---//
var r = 0;
var g = 0;
var b = 0;
var counter = 100;

var MF= document.getElementById('main_footer');
var Nav= document.getElementById('main_nav');
var Links= document.getElementById('links');
var About= document.getElementById('h1');


setInterval( changeColor, 1000/20 );
function changeColor() {   
  r = Math.floor( Math.sin( counter ) * 10 + 230 );
  g = Math.floor( Math.cos( counter + 0.05 ) * 80 + 200);
  b = Math.floor(Math.sin(counter + 0.008)*60+180);

  
  main_footer.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
  main_nav.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")"; 
  h1.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")"; 

  counter += 0.01;
};


//---*----nav//home//about//changing introductions---*---//
//---*----nav//home//about//changing interests---*---//
document.getElementById('in').style.color="BLACK";
document.getElementById('in').style.fontFamily="Karla";
document.getElementById('in').style.fontWeight="bold";
document.getElementById('in').style.fontSize="larger";

var In= document.getElementById('in');

var in_list = ["User Exprience Research", "Interaction Design", "Communication Design","Information Design"]
//**--[ "intuitive interfaces Design", "network communications", "interactive data visualization"];--**//

var newAm = window.setInterval( function() {
   var num = Math.floor(Math.random() * in_list.length);
   In.innerHTML = in_list[num];
}, 1400);

//---*----nav//home//about//changing doing---*---//
document.getElementById('doing').style.color="black";
document.getElementById('doing').style.fontFamily="source code pro";
document.getElementById('doing').style.fontWeight="bold";
document.getElementById('doing').style.fontSize="normal";

var Do= document.getElementById('doing');
var do_list = [ ];

var newDo = window.setInterval( function(){
   var num = Math.floor(Math.random() * do_list.length);
   Do.innerHTML = do_list[num];
}, 1400);


//*---scrolling js----*//


$( document ).ready(function() {
  if(location.hash == "#main"){
    $('#about').slideDown("slow");
  };
});


//smooth scrolling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname)
    {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        if(target.selector == "#main"){
          if($(window).scrollTop() > 300){
            $('#about').slideDown();
            // $('article#logo_wrapper img').addClass('hide');
          } else {
            $('#about').slideToggle();
            // $('article#logo_wrapper img').toggleClass('hide');
          }
        }
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });
});


//Slideshow Demo js//

 $.backstretch([
      "pot-holder.jpg",
      "coffee.jpg",
      "dome.jpg"
      ], {
        fade: 750,
        duration: 4000
    });



