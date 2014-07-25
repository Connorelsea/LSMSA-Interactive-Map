<?php

class Building
{

	public $name;
	public $description;
	public $directionsURL;
	public $imageArray;
	
	function __construct($name, $description, $directionsURL, $imageArray)
	{
		$this->name = $name;
		$this->description = $description;
		$this->directionsURL = $directionsURL;
		$this->imageArray = $imageArray;
	}

}

$bHSB = new Building(
	"HSB",
	"LSMSA's main academic building. It contains three stories of classrooms, offices, computer labs, scientific laboratories, and an multi-leveled auditorium with a stage for school meetings and artistic performances.",
	"directionsURL",
	array(
	1 => "http://farm3.staticflickr.com/2252/2059274932_5fb49e7899_z.jpg?zz=1",
	2 => "http://farm3.staticflickr.com/2277/2539793296_e485280b6c_z.jpg?zz=1"
	)
);

$bMAB = new Building(
	"MAB",
	"LSMSA's building that houses classrooms and utilties relevant to the visual and auditory arts. It contains two stories of private music practice rooms, art studies, architecture studies, pottery wheels, offices, classrooms, and an Apple iMac computer lab.",
	"directionsURL",
	array(
		1 => "URL 1",
		2 => "URL 2"
	)
);

$bCPT = new Building(
	"CPT",
	"description",
	"directionsURL",
	array(
		1 => "URL 1",
		2 => "URL 2"
	)
);

$bGYM = new Building(
	"GYM",
	"description",
	"directionsURL",
	array(
		1 => "URL 1",
		2 => "URL 2"
	)
);

$buildings = array($bHSB, $bMAB, $bCPT, $bGYM);

?>