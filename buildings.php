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
	"description",
	"directionsURL",
	[1 => "URL 1", 2 => "URL 2"]
);

$bMAB = new Building(
	"MAB",
	"description",
	"directionsURL",
	[1 => "URL 1", 2 => "URL 2"]
);

$bCPT = new Building(
	"CPT",
	"description",
	"directionsURL",
	[1 => "URL 1", 2 => "URL 2"]
);

$bGYM = new Building(
	"GYM",
	"description",
	"directionsURL",
	[1 => "URL 1", 2 => "URL 2"]
);

$buildings = array($bHSB, $bMAB, $bCPT, $bGYM);

// Handle AJAX

$buildingName = "";
$buildingName = isset($_GET['building']) ? $_GET['building'] : '';
$correctBuilding = $bHSB;

foreach ($buildings as $b) {

	if (strcmp($b->name, $buildingName) == false) {
		$correctBuilding = $b;
	}

}

print json_encode($correctBuilding);

?>