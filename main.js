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
	HSB: 1,
	MAB: 2,
	CPT: 3,
	GYM: 4,
	HONORS: 5,
	LIBRARY: 6,
	NCPTT: 7,
	TEXACO: 8
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

	// Setup Bootstrap Elements

	$("#carousel").carousel({
		interval : 1000,
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

	}
);
/* CPT Map Events */
$('#map_CPT').hover(
	function(event) { showInfoFloatFor(Building.CPT); },
	function(event) { hideInfoFloat(); }
);

$('#map_CPT').click(
	function(event) {

	}
);

/* GYM Map Events */
$('#map_GYM').hover(
	function(event) { showInfoFloatFor(Building.GYM); },
	function(event) { hideInfoFloat(); }
);

$('#map_GYM').click(
	function(event) {

	}
);

/* HONORS Map Events */
$('#map_HONORS').hover(
	function(event) { showInfoFloatFor(Building.HONORS); },
	function(event) { hideInfoFloat(); }
);

$('#map_HONORS').click(
	function(event) {

	}
);

/* LIBRARY Map Events */
$('#map_LIBRARY').hover(
	function(event) { showInfoFloatFor(Building.LIBRARY); },
	function(event) { hideInfoFloat(); }
);

$('#map_LIBRARY').click(
	function(event) {

	}
);

/* NCPTT Map Events */
$('#map_NCPTT').hover(
	function(event) { showInfoFloatFor(Building.NCPTT); },
	function(event) { hideInfoFloat(); }
);

$('#map_NCPTT').click(
	function(event) {

	}
);

/* TEXACO Map Events */
$('#map_TEXACO').hover(
	function(event) { showInfoFloatFor(Building.TEXACO); },
	function(event) { hideInfoFloat(); }
);

$('#map_TEXACO').click(
	function(event) {

	}
);