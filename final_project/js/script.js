$(document).ready(function(){
	
	
// HOME PAGE NAVIGATION 

	// get URL variable
	/*function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
		}*/

	// if on the #app page, pass URL variable into starting mood
	
	/*if($("#app").length > 0) {
    (function selectMood() {
		var firstMood = getQueryVariable("mood");
		$("#sound").attr("src", "audio/"+firstMood+".mp3");
		$("#"+firstMood+"").addClass("active");
		$("#"+firstMood+"").removeClass("inactive");
	})();
	};*/
	
	
// HEADER MENU
	
	function headerShow() {
	$('#app header').addClass('show');
	  try {
		clearTimeout(timer);
	  } catch (e) {}
	  timer = setTimeout(function () {
		$('#app header').removeClass('show');
	  }, 5000);
	};
	
	
	$(window).on('mousemove', headerShow);
	$(window).on("tap",headerShow);
	
	
	$("#app header").hover(function () {
    	$(this).toggleClass("show-stay");
	});
	
	
	
	
// NAVIGATION (mood selection)

	//why won't this work if it's inside the function?
	var photos = $.get("https://api.unsplash.com/photos/search?page=2&query=beach&client_id=03ab816bbcfd2ef5cba9215394d7c6d0927afdffa11a6fbbcc0edcfc0f5185ef");
	
	var changeMood = function(mood){
		
		// audio
		
		$("#sound").attr("src", "audio/"+mood+".mp3");
		
		// navigation
		
		$(".active").addClass("inactive")
		$(".active").removeClass("active");
		
		$("#"+mood+"").addClass("active");
		$("#"+mood+"").removeClass("inactive");
		
		// photos
        	
		console.log("original call ="+photos.responseJSON);
		console.log("original call object ="+photos.responseJSON[0]);
		
		
		$("body").attr("index", [0]);
		$("body").css("background-image", "url("+photos.responseJSON[0].urls.regular+")");
		$("#photographer").text(photos.responseJSON[0].user.name);
		$(".photographer a").attr("href", photos.responseJSON[0].user.links.html);
		$(".photographer img").attr("src", photos.responseJSON[0].user.profile_image.small);
		$(".view-unsplash a").attr("href", photos.responseJSON[0].links.html);
				
	};
	
	var goToApp = function(){
		$("#home").addClass("home-hide");
		timer = setTimeout(function () {
		$('#home').css('display', "none");
	  }, 5000);
		
		
	};

	
	// rain
	
	$(document).on("click","#rain.inactive", function(){
		changeMood("rain");			
	});
	
	$(document).on("click","#home-rain", function(){
		changeMood("rain");	
		goToApp();		
	});
	
	// beach
	
	$(document).on("click","#beach.inactive", function(){
		changeMood("beach");			
	});
	
	$(document).on("click","#home-beach", function(){
		changeMood("beach");	
		goToApp();		
	});
	
	// snow
	
	$(document).on("click","#snow.inactive", function(){
		changeMood("snow");	
	});
	$(document).on("click","#home-snow", function(){
		changeMood("snow");	
		goToApp();		
	});
	
	// river
	
	$(document).on("click","#river.inactive", function(){
		changeMood("river");			
	});	
	
	$(document).on("click","#home-river", function(){
		changeMood("river");	
		goToApp();		
	});
	
	
// PHOTO NAVIGATION

	// next

	function next_image(){
		var current_image_index = $("body").attr('index');
		current_image_index++
		
		if(current_image_index > photos.length-1){
			current_image_index = 0;
		}
		console.log("current index"+current_image_index);
		console.log(photos.responseJSON[current_image_index]);
		console.log(photos.responseJSON[1]);
		
		$("body").attr("index", [current_image_index]);
		$("body").css("background-image", "url("+photos.responseJSON[current_image_index].urls.regular+")");
		$("#photographer").text(photos.responseJSON[current_image_index].user.name);
		$(".photographer a").attr("href", photos.responseJSON[current_image_index].user.links.html);
		$(".photographer img").attr("src", photos.responseJSON[current_image_index].user.profile_image.small);
		$(".view-unsplash a").attr("href", photos.responseJSON[current_image_index].links.html);
	
	};
	
	$("#next").click(next_image);
	
	// previous
	
	
	function previous_image(){
		var current_image_index = $("body").attr('index');
		current_image_index--
		
		if(current_image_index < 0){
			current_image_index = photos.length-1;
		}
		
		$("body").attr("index", [current_image_index]);
		$("body").css("background-image", "url("+photos.responseJSON[current_image_index].urls.regular+")");
		$("#photographer").text(photos.responseJSON[current_image_index].user.name);
		$(".photographer a").attr("href", photos.responseJSON[current_image_index].user.links.html);
		$(".photographer img").attr("src", photos.responseJSON[current_image_index].user.profile_image.small);
		$(".view-unsplash a").attr("href", photos.responseJSON[current_image_index].links.html);
	};
	
	$("#prev").click(previous_image);

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
		$("header").toggleClass("show-stay");
			console.log($("#menu").hasClass("open"));
	});
	
		
// VOLUME

	// set volume to .5 	
	var audio = document.getElementById("sound");
	audio.volume = 0.5;
	
	$("#mute").click(function() {
		
		if(audio.volume==0){
			$("#mute").html("<i class='fa fa-volume-off left mute'></i>MUTE");
			audio.volume = 0.1;
			$("#volume-slider-input").val(10);	
		}
		else {
		
			$("audio").prop('muted', !$("audio").prop('muted'));
			console.log("before"+$("#mute").text());		
			//$("#mute i").toggleClass('fa-volume-off').toggleClass('fa-volume-up');
			$("#mute").html($("#mute").text() == "MUTE" ? "<i class='fa fa-volume-up left'></i>UNMUTE" : "<i class='fa fa-volume-off left mute'></i>MUTE");
			console.log($("#mute").text());	
		}
				
	});
	
	
	
	window.SetVolume = function(val) {
        //var player = document.getElementById('sound');
        console.log('Before: ' + audio.volume);
        audio.volume = val / 100;
        console.log('After: ' + audio.volume);
		if(audio.volume==0){
			$("#mute").html("<i class='fa fa-volume-up left'></i>UNMUTE");
		}
		
		else {
			$("#mute").html("<i class='fa fa-volume-off left mute'></i>MUTE");
		}
		
    };
	
	$("#volume-down").click(function(){
		if(audio.volume > 0.15){
			audio.volume = audio.volume-0.1;	
			$("#volume-slider-input").val(audio.volume*100);
		}
		
		else {
			audio.volume = 0;
			$("#volume-slider-input").val(0);
			$("#mute").html("<i class='fa fa-volume-up left'></i>UNMUTE");
		}	
	});
	
	$("#volume-up").click(function(){
		
		$("#mute").html("<i class='fa fa-volume-off left mute'></i>MUTE");
		$("audio").prop('muted',false);
			
		if(audio.volume < 0.85){
			audio.volume = audio.volume+0.1;
			$("#volume-slider-input").val(audio.volume*100);	
		}
		
		else {
			audio.volume = 1;
			$("#volume-slider-input").val(100);
		}	
	});
	
// SHARE 

	$(".share-button").click(function(){
		$(".addthis_toolbox").slideToggle();
	});
		

});

// QUESTIONS

// swipe changes picture
// when click MUTE, slider goes to zero
// add click out of share area to toggle it off again
// delay the #app load until #home is displaying?
// unsplash image not displaying in fullscreen?
// click of area outside of open menu closes it (and removes .show-stay from header)

	/*if($("#menu").hasClass("open")==true) {
		console.log("menu is open");
		$("#app").click(function() {
			$("#menu").toggleClass("open");
			});
			
	};*/
	
	
// change URL parameters when change mood (or hide parameters)

		//var stateObj = { foo: "bar" };
		//history.pushState(stateObj, "shorttitle", '#?mood=beachy');
		
		// window.location = 'index.html' + replaceQueryParam('mood', 'rain', window.location.search)
		
		 //var str = window.location.search
		 //str = replaceQueryParam('mood', 'rain', str)
		 //window.location = window.location.pathname + str

	/*function replaceQueryParam(param, newval, search) {
    var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    var query = search.replace(regex, "$1").replace(/&$/, '');

    return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
	}*/
	