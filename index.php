	<!Doctype html>
	<html>

	<?php include 'includes/head.php';?>
	<body>
		<div id='container'>
			<?php 
			   $page =$_GET['page'];
			   if($page == "home" OR $page == ""){
			     include_once('includes/home.php'); 
			   } elseif(file_exists($page.'.php')){
			     include($page.'.php');
			  } elseif (!file_exists($page.'.php')){
			     include('404.html'); 
			  } else{
			     include('includes/home.php');
			  }
	   ?>
	   </div> 

	   <!--- end container -->
     
       <?php include_once 'includes/footer.php';?>


       
		
		<!-- google webfonts-->
		<link href='http://fonts.googleapis.com/css?family=Source+Code+Pro' rel='stylesheet' type='text/css'> <!--forlinksinworkpage -->
        <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'> <!--for header & footer-->
        <link href='http://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'><!--for workpage text-->
		


		<!-- Js code-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	   

	    <!--JS code-->
	    <script type= "text/javascript" src="js/main.js"></script>   
	   

	    <!--- google analytics-->
	    <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-55279323-1', 'auto');
		  ga('send', 'pageview');
		</script>
      
      </body>
</html>

