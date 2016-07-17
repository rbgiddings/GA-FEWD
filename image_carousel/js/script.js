$(document).ready(function(){
	
	var pictures = [{
		src:"images/download1.jpg",
		caption:"Motorcycle"
	},{
		src:"images/download2.jpg",
		caption:"Baseball"
	},{
		src:"images/download3.jpg",
		caption:"Abstract"
	},{
		src:"images/download4.jpg",
		caption:"I don't know what this is"
	},{
		src:"images/download5.jpg",
		caption:"3D TV"
	},{
		src:"images/download6.jpg",
		caption:"City at Night"
	},{
		src:"images/download7.jpg",
		caption:"Sydney"
	},{
		src:"images/download8.jpg",
		caption:"iPad"
	}];
	
	var current_image = 0;
	
	$("#prev").click(function(){
		current_image--
		if(current_image < 0){
			current_image = pictures.length-1;
		}
		$("#main_image").attr("src", pictures[current_image].src);
		$("#caption").text(pictures[current_image].caption);	
	});
	
	
	
	$("#next").click(function(){
		current_image++
		
		if(current_image > pictures.length-1){
			current_image = 0;
		}
		$("#main_image").attr("src", pictures[current_image].src);	
		$("#caption").text(pictures[current_image].caption);
		
	});
	
	
});
