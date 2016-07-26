$(document).ready(function(){
	

// FULLSCREEN
	
	
	$("#fullscreen button").on('click', function(){
		
		/* if already in full screen */
		if( window.outerHeight == screen.height || window.innerHeight == screen.height) {
			console.log("in full screen");
			setTimeout(function(){ 
				$("#fullscreen button").html("<i class='fa fa-expand left'></i>FULLSCREEN");
				}, 500);
			if(document.cancelFullScreen) {
			document.cancelFullScreen();
		  	} else if(document .webkitCancelFullScreen ) {
			document.webkitCancelFullScreen();
		  	} else if(document .mozCancelFullScreen) {
			document.mozCancelFullScreen();
		  	}			
		}
		
		else {		
			console.log("not in fullscreen");
			var html = document.documentElement;
			setTimeout(function(){ 
				$("#fullscreen button").html("<i class='fa fa-compress left'></i>EXIT FULLSCREEN");
				}, 500);
			
			if (html.requestFullscreen) {
			  html.requestFullscreen();
			} else if (html.msRequestFullscreen) {
			  html.msRequestFullscreen();
			} else if (html.mozRequestFullScreen) {
			  html.mozRequestFullScreen();
			} else if (html.webkitRequestFullscreen) {
			  html.webkitRequestFullscreen();
			}
		}
	
	});
	
// MENU
	$("#menu-icon button").click(function(){
		$("#menu").toggleClass("open");
		$("#menu-icon button i").toggleClass('fa-bars').toggleClass('fa-times');
		$("body").toggleClass("menu-open");
	});
	
// VOLUME
	$("#mute").click(function() {
		$("audio").prop('muted', !$("audio").prop('muted'));
		console.log("before"+$("#mute").text());		
		//$("#mute i").toggleClass('fa-volume-off').toggleClass('fa-volume-up');
		$("#mute").html($("#mute").text() == "MUTE" ? "<i class='fa fa-volume-up left'></i>UNMUTE" : "<i class='fa fa-volume-off left'></i>MUTE");
		console.log($("#mute").text());		
	});
	
// SHARE 

	$("#share-button").click(function(){
		$(".addthis_toolbox").slideToggle();
	});
	
	//add click out of area to toggle it again


// UNSPLASH

//GET /photos/search/

	$("XXX").click(function(){
   	 $.get("https://api.unsplash.com/photos/search?page=1&query=office&client_id=03ab816bbcfd2ef5cba9215394d7c6d0927afdffa11a6fbbcc0edcfc0f5185ef", function(likes, color){
        	console.log("Data: " + likes + "\nStatus: " + color);
    	});
	});	

});