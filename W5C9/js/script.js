// JavaScript Document

$(document).ready(function() {
	
/******************	
// STRING PRACTICE //
*******************/	
	
	// Return 5th character of a string
	
	function return5th() {
		var user_input = $("#return5th_input").val();
		var fifthcharacter = user_input.charAt(4);
		$("#return5th_display").text(fifthcharacter);
	}
	
	$("#return5th_submit").click(return5th);
	
	
	// Return n-1 character of a string
	
	function returnLast() {
		var user_input = $("#ps2 #returnLast_input").val();
		var nminusonecharacter = user_input.charAt(user_input.length-2);
		$("#ps2 #returnLast_display").text(nminusonecharacter);
	}
	
	$("#ps2 #returnLast_submit").click(returnLast);
	
	
	// Search for a string
	
	function checkWork() {
		var user_input = $("#checkWork_input").val();
		var texttosearch = $("#ps3 p").text();
		var searchResults = texttosearch.includes(user_input);
		//$("#checkWork_display").text(searchResults);
		
		if (searchResults == true) {
			$("#checkWork_display").text("The word you input is in the sentence above!");
		} else {
			$("#checkWork_display").text("Sorry, that word was not found.");
		};
		
	}
	
	$("#checkWork_submit").click(checkWork);
	
	// Reverse string
	
	function reverseString(){
		var user_input = $("#reverseString_input").val();
		var reverse_input = user_input.split("").reverse().join("");
		$("#reverseString_display").text(reverse_input);		
		
	}
	
	$("#reverseString_submit").click(reverseString);
	
	
/******************	
// VARIABLES //
*******************/

	// Output Hello World
	
	function helloWorld() {
		var stringtoOutput = "Hello World";
		$("#vc1 #returnLast_display").text(stringtoOutput);
		
	}
	
	$("#vc1 #returnLast_submit").click(helloWorld);
	
	// Greet user by name
	
	function greet1() {
		var user_input = $("#greet1_input").val();
		$("#greet1_display").text("Hello " + user_input + ", welcome to the website!");
		
	}
	
	$("#greet1_submit").click(greet1);
	
	
	
	
	
/******************	
// CONDITIONALS //
*******************/

	// Only greet Alice, Bob and Rebecca
	
	function greet2() {
		var user_input = $("#greet2_input").val();
		if(user_input == "Alice" || user_input == "Bob" || user_input == "Rebecca"){
			$("#greet2_display").text("Hello " + user_input + ", welcome to the website!");
		} else {
			$("#greet2_display").text("You have a stupid name. Go away.");
		}
		
	}
	
	$("#greet2_submit").click(greet2);
	
	
	// Input 2 integers, output the larger
	
	function integerMax() {
		var user_input1 = $("#integerMax_input1").val();
		var user_input2 = $("#integerMax_input2").val();
		var larger_num = Math.max(user_input1, user_input2);
		$("#integerMax_display").text(larger_num);
	}
	
	$("#integerMax_submit").click(integerMax);
	
	// Input 3 integers, output the sign of the product
	
	function integerSign() {
		var user_input1 = $("#integerSign_input1").val();
		var user_input2 = $("#integerSign_input2").val();
		var user_input3 = $("#integerSign_input3").val();
		var product = user_input1*user_input2*user_input3;
		var sign = Math.sign(product);
		
		if(sign == "1" || sign == "0"){
			$("#integerSign_display").text("+");
			
		} else if(sign == "-1" || sign == "-0"){
			$("#integerSign_display").text("-");
		} else {
			$("#integerSign_display").text("One of your numbers is not a number. Please try again.");
			
		}
				
		
	}

	$("#integerSign_submit").click(integerSign);
	
	// Sort three numbers
	
	function integerSort() {
		var user_input1 = $("#integerSort_input1").val();
		var user_input2 = $("#integerSort_input2").val();
		var user_input3 = $("#integerSort_input3").val();
		var input_array = [user_input1, user_input2, user_input3];
		var sorted_array = input_array.sort(function(a, b){return b-a})
		$("#integerSort_display").text(sorted_array.join(", "));
		//$("#integerSort_display").text(input_array.sort(function(a, b){return b-a}));
		
	}
	
	$("#integerSort_submit").click(integerSort);
	
	// Rock, paper, scissors
	
	function play() {
		var player1 = $("#rps_player1").val();
		var player2 = $("#rps_player2").val();
		
		if(player1 == "rock"){
			if(player2 == "rock"){
				$("#rps_winner_display").text("Tie! No one wins");
			}
			else if(player2 == "paper") {
				$("#rps_winner_display").text("Player 2 wins");
			}
			
			else if(player2 == "scissors") {
				$("#rps_winner_display").text("Player 1 wins");
			}
			else {
			$("#rps_winner_display").text("Something went wrong; please try again.");
		}
		}
		
		else if(player1 == "paper"){
			if(player2 == "paper"){
				$("#rps_winner_display").text("Tie! No one wins");
			}
			else if(player2 == "scissors") {
				$("#rps_winner_display").text("Player 2 wins");
			}
			
			else if(player2 == "rock") {
				$("#rps_winner_display").text("Player 1 wins");
			}
			else {
			$("#rps_winner_display").text("Something went wrong; please try again.");
		}
		}
		
		else if(player1 == "scissors"){
			if(player2 == "scissors"){
				$("#rps_winner_display").text("Tie! No one wins");
			}
			else if(player2 == "rock") {
				$("#rps_winner_display").text("Player 2 wins");
			}
			
			else if(player2 == "paper") {
				$("#rps_winner_display").text("Player 1 wins");
			}
			
			else {
			$("#rps_winner_display").text("Something went wrong; please try again.");
		}
		}
		
		else {
			$("#rps_winner_display").text("Something went wrong; please try again.");
		}	
	
		
	}
	
	$("#rps_submit").click(play);
	
	
	
	

/******************	
// LOOPS //
*******************/	


	// Factoral
	
	
	function factoral() {
		var user_input = $("#factoral_input").val();
		var result = user_input;
		for(i=1;i<user_input;i++){
			result = result*(user_input-i);					
		}
	$("#factoral_display").text(result);
	
	}
	
	// 5! = 5 x 4 x 3 x 2 x 1 = 120
	
	$("#factoral_submit").click(factoral);
	
	// Create star pattern

		
	for(i=1;i<7;i++){
			var stars = Array(i).join("*");
			$("#star_display").append(stars + "<br>");
		};
		
	// Exponent
	
	function base_exp(){
		var base_input = $("#base_input").val();
		var exponent_input = $("#exp_input").val();
		var current = base_input;
		
		for(i=1;i<exponent_input;i++){
			var current=current*base_input;			
		}
		
		$("#base_exp_display").text(current);
		
	}
	
	$("#base_exp_submit").click(base_exp);


	// FooBar - use Modulo
	
	function foobar(){
		for(i=1;i<101;i++){
			if(i%3==0&&i%5==0){
				$("#foobar_display").append("FooBar"+"<br>");	
			}
			
			else if(i%3==0) {
				$("#foobar_display").append("Foo"+"<br>");
			}
			else if(i%5==0) {
				$("#foobar_display").append("Bar"+"<br>");
			}
			else{
				$("#foobar_display").append(i+"<br>");
			}
			
			
		
		}
	}

	$("#foobar_submit").click(foobar);	

	
});