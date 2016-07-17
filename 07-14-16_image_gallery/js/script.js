$(document).ready(function(){
	
	// images array with objects
	
	var images = [{
		src:"images/download1.jpg",
		title:"Capitol Building"		
	},{
		src:"images/download2.jpg",
		title:"Disco Ball"		
	},{
		src:"images/download3.jpg",
		title:"Puppy"		
	},{
		src:"images/download4.jpg",
		title:"Flowers"		
	},{
		src:"images/download5.jpg",
		title:"Girl with Butterfly"		
	},{
		src:"images/download6.jpg",
		title:"Pattern"		
	},{
		src:"images/download7.jpg",
		title:"San Francisco"		
	},{
		src:"images/download8.jpg",
		title:"Tiger"		
	},{
		src:"images/download9.jpg",
		title:"Bartender"		
	},{
		src:"images/download10.jpg",
		title:"Camera"		
	}]; 
	
	// loop to display images in gallery
			
	for(i=0;i<images.length;i++){
		var image_html = "<div class='image_container' index='"+[i]+"'><img src='"+images[i].src+"' class='gallery_image'><div class='title'>"+images[i].title+"</div></div>";
		$("#gallery").append(image_html);
	}
	
	// click on image brings up image pop-up
	
	$(document).on('click', '.image_container', function(){
		var current_index = $(this).attr('index');
		var current_src = $(this).children(".gallery_image").attr('src');
		var current_title = $(this).children(".title").text();
		$("#gallery_main_container").attr('index',current_index);
		$("#gallery_main_wrap").show();
		$("#gallery_main_container img").attr('src', current_src);
		$("#gallery_main_title").text(current_title);		
		
	});
	
	// previous function
	
	
	function previous_image(){
		var current_image_index = $("#gallery_main_container").attr('index');
		current_image_index--
		if(current_image_index < 0){
			current_image_index = images.length-1;
		}
		$("#gallery_main_container img").attr("src", images[current_image_index].src);	
		$("#gallery_main_container").attr("index", [current_image_index]);
		$("#gallery_main_title").text(images[current_image_index].title);
	};
	
	$(document).keyup(function() {
		if (event.keyCode == 37) { 
		   previous_image();
		}
	});
	
	$("#gallery_main_container #prev").click(previous_image);
	
	
	
	// next function
	
	function next_image(){
		var current_image_index = $("#gallery_main_container").attr('index');
		current_image_index++
		
		if(current_image_index > images.length-1){
			current_image_index = 0;
		}
		$("#gallery_main_container img").attr("src", images[current_image_index].src);	
		$("#gallery_main_container").attr("index", [current_image_index]);
		$("#gallery_main_title").text(images[current_image_index].title);
		
	};
	
	$(document).keyup(function() {
		if (event.keyCode == 39) { 
		   next_image();
		}
	});
	
	$("#gallery_main_container #next").click(next_image);
	
	
	// function to close the pop-up
	
	function hide_gallery_main(){
		$("#gallery_main_wrap").hide();
	}
	
	
	// ways to close the pop-up
	
	$(document).keyup(function() {
		if (event.keyCode == 27) { 
		   hide_gallery_main();
		}
	});
	
	$("#gallery_main_container #ex").click(hide_gallery_main);
	
	$("#gallery_main_wrap").click(function(){
		if(event.target.id=="gallery_main_wrap"){
			hide_gallery_main();
		}
	});
	
	
	
	

});
