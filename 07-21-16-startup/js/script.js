$(document).ready(function() {	
	
	// media query event handler
	if (matchMedia) {
	  var mq = window.matchMedia("(min-width: 950px)");
	  mq.addListener(WidthChange);
	  WidthChange(mq);
	}
	
	// media query change
	function WidthChange(mq) {
	  if (mq.matches) {
		$("nav").css("display", "block");
	  } else {
		  $("nav").css("display", "none");
	  }
	
	}
	
	$("#hamburger").click(function(){
			$("nav").slideToggle();
		});
	
});