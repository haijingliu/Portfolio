<head>  
    <style>
    html, body, img{ height: 100%}
    #container { height: 900%}
    
    img { 
        position: fixed; 
        top: 0; 
        width: 100%;
    }
    </style>
    <script src="http://code.jquery.com/jquery-1.7.1.js" type="text/javascript"></script>
</head>

<body>
    <div id="container">
        <img src= "img/imgs/currents/Currents_Final_01.jpg" style= z-index:10>
        <img src= "img/imgs/currents/Currents_Final_03.jpg" style= z-index:9>
        <img src= "img/imgs/currents/Currents_Final_05.jpg" style= z-index:8>    
        <img src= "img/imgs/currents/Currents_Final_07.jpg" style= z-index:7>
        <img src= "img/imgs/currents/Currents_Final_09.jpg" style= z-index:6>
        <img src= "img/imgs/currents/Currents_Final_10-2.jpg" style= z-index:5>
        <img src= "img/imgs/currents/Currents_Final_05.jpg" style= z-index:4>
    </div>
    <script> 
var target = $('img');
var targetHeight = target.height();
var containerHeight = $('#container').outerHeight();

var maxScroll = containerHeight - targetHeight;
var scrollRange = maxScroll/(target.length-3);

$(document).scroll(function(e){
    var scrollY = $(window).scrollTop();
    var scrollPercent = (scrollRange - scrollY%scrollRange)/scrollRange;
    var divIndex = Math.floor(scrollY/scrollRange);

    target.has(':lt(' + divIndex + ')').css('opacity', 0);
    target.eq(divIndex).css('opacity', scrollPercent);
    target.has(':gt(' + divIndex + ')').css('opacity', 1);
});
</script>

</body>


