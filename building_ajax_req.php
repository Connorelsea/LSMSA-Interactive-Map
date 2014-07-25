<?php

include("buildings.php");

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