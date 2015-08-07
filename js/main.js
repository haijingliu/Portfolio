

//---*---footer_backgroundInteractive---*---//
var r = 0;
var g = 0;
var b = 0;

var counter = 100;

var LI= document.getElementById("links");
var Ak= document.getElementById('acknow');
var MA= document.getElementById('main');



setInterval( changeColor, 1000/100 );

function changeColor(){   
                 r = Math.floor( Math.cos( counter ) * 10 + 210);
                 g = Math.floor( Math.cos( counter + 0.05 ) * 80 + 240);
                 b = Math.floor(Math.sin( counter + 0.08) * 60 + 230);

            links.style.backgroundColor= "rgb(" + r + "," + g + "," + b + ") ";
            acknow.style.backgroundColor = "rgb(" + g + "," + r + "," + b + ") ";
            main.style.backgroundColor = "rgb(" + g + "," + r + "," + b + ") ";

    counter += 0.0023;

    };








var In= document.getElementById('in');
//in string//array//
var in_list = [ "Interaction Design", "Interface Investigate",
"Information Manifestation", "User Experience Research"];

setInterval( changetextColor, 10000/100 );

       function changetextColor() {   
                 r = Math.floor( Math.cos( counter )*10 + 205);
                 g = Math.floor( Math.cos( counter + 0.05 )*80  + 125);
                 b = Math.floor( Math.sin(counter)*60 + 205);
            

            document.getElementById('in').style.color="rgb(" + g + "," + r + "," + b + ")";
            counter += 0.09;

            };


document.getElementById('in').style.fontFamily="helvetica Neue";
document.getElementById('in').style.fontSize="1.3em";


var newAm = window.setInterval( function() {
   var num = Math.floor(Math.random() * in_list.length);
   In.innerHTML = in_list[num];
}, 1680);



//---*---menu---*---//

var timeout	= 400;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	// cancel close timer
	mcancelclosetime();
    // close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';
}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}
// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
// close layer when click-out
document.onclick = mclose; 


//---*---scroll---*---//

$(document).ready(function(){
    $("work_details p1").scroll(function(){
        $("span").text( x+= 1);
    });
});

//*----scroll----*//

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1064);
    }

});














