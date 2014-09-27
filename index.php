	<!Doctype html>
	<html>

	<?php include 'includes/head.php' ?>
	
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
	   </div>  <!--- end container -->

	   <?php include_once 'includes/footer.php' ?> 



	    <!--css code-->
		<link rel ="stylesheet" href="css/main.css">
		<link rel ="stylesheet" href="css/normalize.css">
		<link rel ="stylesheet" hred="css/normalize.min.css">

		<!--font awesome-->
		<link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" media="screen, projection">

		<!-- google webfonts-->
		<link href='http://fonts.googleapis.com/css?family=Source+Code+Pro' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Karla' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

		<!-- Js code-->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

	   <!--JS code-->
	   <script type= "text/javascript" src="js/main.js"></script>


	   <!--- google analytics-->
      
      </body>
      </html>

