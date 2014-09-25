
//---*---nav_backgroundInteractive---*---//

//---*---footer_backgroundInteractive---*---//
var r = 0;
var g = 0;
var b = 0;
var counter = 100;

var MF= document.getElementById('main_footer');
var Nav= document.getElementById('main_nav')
setInterval( changeColor, 1000/20 );
function changeColor() {   
  r = Math.floor( Math.sin( counter ) * 100 + 100 );
  g = Math.floor( Math.cos( counter + 0.5 ) * 80 + 120);
  b = Math.floor(Math.sin(counter + 0.08)*60+80);

  
  main_footer.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
  main_nav.style.backgroundColor = "rgb(" + r + "," + b + "," + g + ")"; 
  
  counter += 0.0125;
};


//---*----nav//home//about//changing introductions---*---//
//---*----nav//home//about//changing interests---*---//
document.getElementById('in').style.color="BLACK";
document.getElementById('in').style.fontFamily="source code pro";
document.getElementById('in').style.fontWeight="bold";
document.getElementById('in').style.fontSize="larger";

var In= document.getElementById('in');
var in_list = [ "metaphorical interfaces", "hyper-media communications", "interactive data visualization", " "];

var newAm = window.setInterval( function() {
   var num = Math.floor(Math.random() * in_list.length);
   In.innerHTML = in_list[num];
}, 1680);

//---*----nav//home//about//changing doing---*---//
document.getElementById('doing').style.color="black";
document.getElementById('doing').style.fontFamily="source code pro";
document.getElementById('doing').style.fontWeight="bold";
document.getElementById('doing').style.fontSize="normal";

var Do= document.getElementById('doing');
var do_list = [ "circuits designing", "coding", "soldering", "tinkering"];

var newDo = window.setInterval( function(){
   var num = Math.floor(Math.random() * do_list.length);
   Do.innerHTML = do_list[num];
}, 1400);






