$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	$(".new").click(function(){
  	   location.reload();
  	});
  // Generate random number between 1 and 100 oupon loading
    var rightNum = Math.floor((Math.random() * 101) + 1);
    console.log(rightNum);


    $("#guessButton").click(function(event){
      event.preventDefault();
      var guess = +$("input#userGuess").val();
      console.log(guess);
      var difference = Math.abs(rightNum - guess);
      console.log(difference);


      if (isNaN(guess)){
        alert("Come on, bruh, that's not a number!");
      }
      else if(difference === 0) {
        console.log("Good job, bruh");
      }
      else if(difference > 50){
        console.log("I can't see you when you're all the way in Antarctica.");
      }
      else if(difference <= 50 && difference > 30){
        console.log("You look like you need a beanie.");
      }
      else if(difference <= 30 && difference > 10){
        console.log("Ooh, heating up. You can probably change into shorts!");
      }
      else if(difference <= 10 && difference > 0){
        console.log("YO DON'T FLY TOO CLOSE TO THE SUN YOUR WINGS WILL BURN OFF");
      };

    });
});


