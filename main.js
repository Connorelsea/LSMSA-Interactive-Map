$(document).ready(function(){
    $('.carousel').carousel();
});

/*
* Float Positioning and Setup Code
*
* This code contains an enumeration of the buildings shown on the
* campus map and various function that show or hide the informational
* popup that appears on the left side of the map when you hover over
* a building.
*/
var Building = {
	HSB: "HSB",
	MAB: "MAB",
	CPT: "CPT",
	GYM: "GYM",
	HONORS: "NSU Honors College",
	LIBRARY: "NSU Watson Library",
	NCPTT: "NCPTT",
	TEXACO: "Texaco"
};

function showInfoFloatFor(building) {

	if (building == Building.HSB) showInfoFloat(
		"HSB",
		"LSMSA's main academic building. It contains three stories of classrooms, offices, computer labs, scientific laboratories, and an multi-leveled auditorium with a stage for school meetings and artistic performances."
	);
	else if (building == Building.MAB) showInfoFloat(
		"MAB",
		"LSMSA's building that houses classrooms and utilties relevant to the visual and auditory arts. It contains two stories of private music practice rooms, art studies, architecture studies, pottery wheels, offices, classrooms, and an Apple iMac computer lab."
	);
	else if (building == Building.CPT) showInfoFloat(
		"CPT",
		"..."
	);
	else if (building == Building.GYM) showInfoFloat(
		"Gym and SAC",
		"..."
	);
	else if (building == Building.HONORS) showInfoFloat(
		"NSU Honors College",
		"..."
	);
	else if (building == Building.LIBRARY) showInfoFloat(
		"NSU Watson Library",
		"..."
	);
	else if (building == Building.NCPTT) showInfoFloat(
		"NCPTT",
		"..."
	);
	else if (building == Building.TEXACO) showInfoFloat(
		"Texaco",
		"..."
	);
	else showInfoFloat("Error", "Error");

}

function showInfoFloat(buildingName, buildingInformation) {
	$("#info_float").fadeIn(200);
	$('#info_float h1').html(buildingName);
	$('#info_float_p').html(buildingInformation);
}

function hideInfoFloat() {
	$("#info_float").fadeOut(200);
}

/*
* Picture Viewer Code
*
* This section of code contains helper functions used to create
* the image viewer portion of this web app. Images of each building
* can be viewed when they are clicked.
*/

function setupPictureView(building) {

	// AJAX

	$.ajax({
		url:'building_ajax_req.php',
		data: "building=" + building,
		complete: function (response) {

			// Convert the JSON formatted response into an object
			var buildingObject = JSON.parse(response.responseText);

			// Set the title and description
			$(".modal-title-custom").html(buildingObject.name);
			$(".modal-subtitle-custom").html(buildingObject.description);

			// Get the image array from the object
			var images = buildingObject.imageArray;
			var amountOfImages = Object.keys(images).length;

			// Clear Carousel inner HTML
			$(".carousel-inner").html("");

			// Loops through all of the images in the array
			for (i = 1; i < amountOfImages + 1; i++) {

				// Generate item active for first picture
				if (i == 1) {
					$(".carousel-inner").append("<div class=\"item active\"><img src=\"" + images[i] + "\"></div>");
				}

				// Generate general item for every other picture after first
				else {
					$(".carousel-inner").append("<div class=\"item\"><img src=\"" + images[i] + "\"></div>");
				}

			}

		},
		error: function () {
			alert("There has been an AJAX error. Please contact the school's IT department.");
		},
	});

	// Setup Bootstrap Elements

	$("#carousel").carousel({
		interval : 500,
		wrap: true
	});

	$("#modal").modal({
		keyboard: true
	});

}

/*
* Image Map Code
*
* Code to handle the events fired when areas of the image map
* are clicked or hovered over.
*/

/* HSB Map Events */
$('#map_HSB').hover(
	function(event) { showInfoFloatFor(Building.HSB); },
	function(event) { hideInfoFloat(); }
);

$('#map_HSB').click(
	function(event) {
		setupPictureView(Building.HSB);
	}
);

/* MAB Map Events */
$('#map_MAB').hover(
	function(event) { showInfoFloatFor(Building.MAB); },
	function(event) { hideInfoFloat(); }
);

$('#map_MAB').click(
	function(event) {
		setupPictureView(Building.MAB);
	}
);
/* CPT Map Events */
$('#map_CPT').hover(
	function(event) { showInfoFloatFor(Building.CPT); },
	function(event) { hideInfoFloat(); }
);

$('#map_CPT').click(
	function(event) {
		setupPictureView(Building.CPT);
	}
);

/* GYM Map Events */
$('#map_GYM').hover(
	function(event) { showInfoFloatFor(Building.GYM); },
	function(event) { hideInfoFloat(); }
);

$('#map_GYM').click(
	function(event) {
		setupPictureView(Building.GYM);
	}
);

/* HONORS Map Events */
$('#map_HONORS').hover(
	function(event) { showInfoFloatFor(Building.HONORS); },
	function(event) { hideInfoFloat(); }
);

$('#map_HONORS').click(
	function(event) {
		setupPictureView(Building.HONORS);
	}
);

/* LIBRARY Map Events */
$('#map_LIBRARY').hover(
	function(event) { showInfoFloatFor(Building.LIBRARY); },
	function(event) { hideInfoFloat(); }
);

$('#map_LIBRARY').click(
	function(event) {
		setupPictureView(Building.LIBRARY);
	}
);

/* NCPTT Map Events */
$('#map_NCPTT').hover(
	function(event) { showInfoFloatFor(Building.NCPTT); },
	function(event) { hideInfoFloat(); }
);

$('#map_NCPTT').click(
	function(event) {
		setupPictureView(Building.NCPTT);
	}
);

/* TEXACO Map Events */
$('#map_TEXACO').hover(
	function(event) { showInfoFloatFor(Building.TEXACO); },
	function(event) { hideInfoFloat(); }
);

$('#map_TEXACO').click(
	function(event) {
		setupPictureView(Building.TEXACO);
	}
);