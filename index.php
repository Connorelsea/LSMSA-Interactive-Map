<head>

	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" href="Bootstrap\css\bootstrap.min.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

	<?php include("buildings.php"); ?>

</head>

<body>

	<div id="container">

		<div id="body">

			<div id="info_float">
				<span id="info_float_text">
					<h1>Default Title</h1>
					<p id="info_float_p">Default paragraph.</p>
					<p id="info_float_subtext">Click the building for images and directions</p>
				</span>
			</div>

			<map name="image_map" id="image_map">
				<area id="map_HSB" shape="rect" coords="346,148,475,260" target="_self"/>
				<area id="map_TEXACO" shape="rect" coords="594,104,647,157" target="_self"/>
				<area id="map_NCPTT" shape="rect" coords="576,220,636,276" target="_self"/>
				<area id="map_GYM" shape="rect" coords="374,266,445,359" starget="_self"/>
				<area id="map_HONORS" shape="rect" coords="217,327,318,393" target="_self"/>
				<area id="map_CPT" shape="rect" coords="194,216,350,312" target="_self"/>
				<area id="map_MAB" shape="rect" coords="272,130,323,215" target="_self"/>
				<area id="map_LIBRARY" shape="rect" coords="0,0,135,121" target="_self"/>
			</map>

			<img id="map" src="Design/MAP_DRAWN.png" usemap="#image_map"/>

		</div>

	</div>

	<div id="branding">
		Map Developed by Connor Elsea
	</div>

</body>

<!-- Custom Bootstrap Code -->

<div
	id="modal"
	class="modal fade bs-example-modal-lg"
	tabindex="-1"
	role="dialog"
	aria-labelledby="myLargeModalLabel"
	aria-hidden="true"
>

	<div class="modal-dialog modal-lg">

		<!-- Modal Content Container-->
		<div class="modal-content">
			
			<!-- Modal Header-->
			<div class="modal-header">

				<button type="button" class="close" data-dismiss="modal">
				 	<span aria-hidden="true">&times;</span>
				 	<span class="sr-only">Close</span>
				 </button>

				<h4 class="modal-title-custom">Default Title</h4>
				<h5 class="modal-subtitle-custom">Press Escape to Exit</h5>

				<button type="button" class="btn btn-primary">Get Directions</button>
				<button type="button" class="btn btn-primary">View on Google Maps</button>

			</div>

			<!-- Modal Body-->
			<div class="modal-body-custom">
				
				<!-- Carousel HTML -->

					<div
						id="carousel"
						class="carousel slide"
						data-ride="carousel"
					>

						<!-- Carousel Indicators -->

						<ol class="carousel-indicators">
	 						<li data-target="#carousel" data-slide-to="0" class="active"></li>
							<li data-target="#carousel" data-slide-to="1"></li>
							<li data-target="#carousel" data-slide-to="2"></li>
						</ol>

						<!-- Carousel Item Container -->

						<div class="carousel-inner">

						<P> TEST <P>
							
							<div class="item active">
								<img class="image1" src="http://i1.ytimg.com/vi/P6jrMpJRKIs/maxresdefault.jpg" alt="">
							</div>

							<div class="item">
								<img class="image2" src="http://i1.ytimg.com/vi/3lRYq5zH6yQ/maxresdefault.jpg" alt="">
							</div>

						</div>

						 <!-- Controls -->
						<a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
							<span class="glyphicon glyphicon-chevron-left"></span>
						</a>
						 
						<a class="right carousel-control" href="#carousel" role="button" data-slide="next">
							<span class="glyphicon glyphicon-chevron-right"></span>
						</a>
						
					</div>

				<!-- Carousel HTML End -->

			</div>

		</div>

	</div>

</div>

<!-- End of Custom Boostrap Code -->

<script src="Bootstrap\js\bootstrap.min.js"></script>
<script type="text/javascript" src="main.js"></script>