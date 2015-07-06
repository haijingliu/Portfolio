
//---*---nav_backgroundInteractive---*---//

//---*---footer_backgroundInteractive---*---//
var r = 0;
var g = 0;
var b = 0;
 
var counter = 100;

var LI= document.getElementById("links");

 setInterval( changeColor, 1000/100 );
 function changeColor() {   
 r = Math.floor( Math.cos( counter ) * 10 + 210);
 g = Math.floor( Math.cos( counter + 0.05 ) * 80 + 240);
 b = Math.floor(Math.sin(counter + 0.08)*60+230);
  
links.style.backgroundColor= "rgb(" + r + "," + g + "," + b + ") "; 

counter += 0.0023;

 };


//-- font --//
document.getElementById('in').style.fontFamily="Garamond Premier Pro";
document.getElementById('in').style.color="black";
document.getElementById('in').style.fontWeight="bold";


var In= document.getElementById('in');

var in_list = [ "Interaction Design", "Interface Investigate", "Information Manifestation", "User Experience Research"];//

var newAm = window.setInterval( function() {
   var num = Math.floor(Math.random() * in_list.length);
   In.innerHTML = in_list[num];
}, 1600);



//*---scrolling js----*//

$( document ).ready(function() {
  if(location.hash == "#main"){
    $('#about').slideDown("slow");
  };
});





