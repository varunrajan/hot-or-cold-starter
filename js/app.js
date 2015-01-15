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

      if (isNaN(guess)){
        alert("Come on, bruh, that's not a number!");
      };
//      else if(Math.abs(rightNum - guess) === 0) {
//        $("h2#feedback").replace()
//      }

    });
});


