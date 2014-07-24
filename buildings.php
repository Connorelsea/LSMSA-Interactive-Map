<?php

class Building
{

	private $name;
	private $description;
	private $directionsURL;
	private $imageArray;
	
	function __construct($name, $description, $directionsURL, $imageArray)
	{
		$this->$name = $name;
		$this->$description = $description
		$this->directionsURL = $directionsURL;
		$this->imageArray = $image;
	}

	function getName() {
		return $name;
	}

	function getDescription() {
		return $description;
	}

	function getDirectionURL() {
		return $directionsURL;
	}

	function getImageArray() {
		return $imageArray;
	}

}

?>