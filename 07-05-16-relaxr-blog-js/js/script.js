// JavaScript Document

$(document).ready(function() {
	
	
	function readmore(){
		$("#show-this-on-click").slideDown();
		$(".readless").show();
		$(".readmore").hide();			
	}
	
	$(".readmore").click(readmore);
	
	
	
	function readless(){
		$("#show-this-on-click").slideUp();
		$('.readless').delay(500).hide(0);
		$(".readmore").delay(500).show(0);
	}
	
	$(".readless").click(readless)
	
});



