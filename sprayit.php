<?php include_once 'includes/nav.php' ?>

<div id="project_wrapper">
  <script src="../libs/jquery/jquery.js"></script>
    <script src="../src/jquery.backstretch.js"></script>
  <script>
        $.backstretch([
          "5.jpg",
          "4.jpg",
          "3.jpg",
          "2.jpg",
          "1.jpg"
        ], {
            fade: 750,
            duration: 4000
        });
    </script>
      <section id="work_content">
            <article id="work_details">

                  <h2>SprayIt</h2>
                  <h3>Web Application as a Multi-user drawing tool</h3>
              
                  <p1><p>Graffiti in New York City has been recognized as an act of urban vandalism culture towards the city's authorities.
                  This urban art form has widely influenced the graffiti culture worldwidely.</p>
                  <p>SprayIt is an web application with multi-user features runs on the heroku platform. 
                  This app tries to deliver an online exprience of the New York City Graffiti Culture to the internet 
                  users. </p>
                  <p>In using of the websocket technology, users can spray the brush on the canvas at the same time!</p>
                  <P>Thanks for Open every source, the brush code is in using source via</p><p><a style=text-decoration:none; target="_blank" href="http://codepen.io/hygine/pen/yIvKm"></P>CodePen</p1>
                
            </article>
            

        <article id ="toolinks">
                  <div class="toolinks"> 
                        <h1><i class="fa fa-cog"></i>&nbsp;&nbsp;TECH COMPONENTS</h1>
                        <h4 class="tool">Heroku</h4>
                        <h4 class="tool">Html5</h4>
                        <h4 class="tool">Javascript</h4>
                        <h4 class="tool">Node.js</h4>
                        <h4 class="tool">WebsocketApi</h4>
                  </div>
                   <div id ="links">
                        <h1><p><a target="_blank" href="http://sprayit.herokuapp.com/">Start to Spray!</a></p>
                        <a target="_blank" href="https://github.com/haijingliu/sprayIt">Source Code is available on Github</a></h1>
             </div>
             </article>
            </section>

            <section id="work_img">
           <article id="work_imgs">
                   <div class="video_container">
                    <iframe src="//player.vimeo.com/video/108392808?color=6cf205" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/108392808">sprayIt</a> from <a href="http://vimeo.com/user18234160">charl</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                  </div>
      
                  <img src="img/imgs/sprayIt/cats.jpg">
                  <img src="img/imgs/sprayIt/gallery.jpg">
            </article>
      </section>
