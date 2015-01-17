$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".new").click(function(){newGame()})
    function newGame(){
  	   count = 0;
       $("span#count").replaceWith("<span id='count'>"+count+"</span>");
       $("ul").empty();
  	};


  // Generate random number between 1 and 100 oupon loading
    var rightNum = Math.floor((Math.random() * 101) + 1);
    console.log(rightNum);
    var count = parseInt($("span#count").text());

    $("#guessButton").click(function(event){
      event.preventDefault();
      var guess = +$("input#userGuess").val();
      var difference = Math.abs(rightNum - guess);


      //make sure they have to insert an appropriate number according to the rules
      if (guess < 1 || guess > 100){
        alert("The rules say guess '1 to 100.' Did you read the rules? Idiot.");
      }
      //everything else works here

      else {
          $("span#count").replaceWith("<span id='count'>"+(++count)+"</span>");
          $("ul#guessList").append("<li>"+guess+"</li>");
        var mostRecent = parseInt($("li").last().text());
        var lastGuess = parseInt($("li").last().prev().text());
        var differenceNow = Math.abs(rightNum - mostRecent);
        var differenceLast = Math.abs(rightNum - lastGuess);  

        function sinceLast(){
          if (count>0){
            if (differenceNow > differenceLast){
              $("h2#feedback").append("<h5>Real talk, you're colder than before</h5>");
            }
            else if (differenceNow < differenceLast) {
              $("h2#feedback").append("<h5>Hmm, closer than last time.</h5>");
            } 
            else if (differenceNow === differenceLast && mostRecent !== lastGuess){
              $("h2#feedback").append("<h5>Interesting...You're about the same.</h5>");
            } 
            else if (differenceNow === differenceLast && mostRecent === lastGuess){
              $("h2#feedback").append("<h5>What are you, stupid? You just guessed that.</h5>");
            };
          };
        };

          if (isNaN(guess)){
            alert("Come on, bruh, that's not a number!");
          }
          else if(difference === 0) {
            $("h2#feedback").replaceWith("<h2 id='feedback'>Good job, bruh</h2>");
            sinceLast();
          }
          else if(difference > 50){
            $("h2#feedback").replaceWith("<h2 id='feedback'>I can't see you when you're all the way in Antarctica.</h2>");
            sinceLast();
          }
          else if(difference <= 50 && difference > 30){
            $("h2#feedback").replaceWith("<h2 id='feedback'>You look like you need a beanie.</h2>");
            sinceLast();
          }
          else if(difference <= 30 && difference > 10){
            $("h2#feedback").replaceWith("<h2 id='feedback'>Ooh, it's warm. You can probably change into shorts!</h2>");
            sinceLast();
          }
          else if(difference <= 10 && difference > 0){
            $("h2#feedback").replaceWith("<h2 id='feedback'>YO DON'T FLY TOO CLOSE TO THE SUN YOUR WINGS WILL BURN OFF</h2>");
            sinceLast();
      };
    };
    });
});


