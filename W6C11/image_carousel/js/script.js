$(document).ready(function(){
	
	var pictures = ["images/download1.jpg", "images/download2.jpg", "images/download3.jpg", "images/download4.jpg", "images/download5.jpg", "images/download6.jpg", "images/download7.jpg", "images/download8.jpg"];
	
	var current_image = 0;
	
	$("#prev").click(function(){
		current_image--
		if(current_image < 0){
			current_image = pictures.length-1;
		}
		$("#main_image").attr("src", pictures[current_image]);	
	});
	
	
	
	$("#next").click(function(){
		current_image++
		
		if(current_image > pictures.length-1){
			current_image = 0;
		}
		$("#main_image").attr("src", pictures[current_image]);	
		
	});
	
	
});
