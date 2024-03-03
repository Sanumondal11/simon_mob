var  array=["red","blue","green","yellow"];
var gamePattern=[];
var userChosenPattern=[];
var check=false;
var level=0;

$(".btn").click(function(event) {
    var userChosenColour= $(this).attr("id");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userChosenPattern.push(userChosenColour);
    checkAnswer((userChosenPattern.length)-1);
});
//checking the user input
function checkAnswer(currentLevel){
    if(userChosenPattern[currentLevel]==gamePattern[currentLevel]){
if (userChosenPattern.length === gamePattern.length){

    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout(function () {
      nextSequence();
    }, 1000);

  }

}
else{
playSound('wrong');
$("body").addClass("game-over");
setTimeout(function(){
   $("body").removeClass("game-over");
},200);
$("h1").text("Game over, Press any key to restart!");
startover();
}
}

//
function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}
//
//animation to user clicks
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
    
}
//
function nextSequence(){
    userChosenPattern=[];
    level++;
    $("h1").text("Level " +level);
       

    var a=Math.floor(Math.random()*(3+1));
    var randomChosenColour=array[a];
    gamePattern.push(randomChosenColour);
    
    var b=$("#"+randomChosenColour);
    $(b).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    //audio
    var audio = new Audio("./sounds/"+randomChosenColour+".mp3");
    audio.play();
    //
}
//detect keyboard press

/*if(check!==true){
    $(document).keypress(function(event){
        $("h1").text("Level " +level);
        nextSequence();
        check=true;
        
    });
}*/
if(check!==true){
    $("#start").on("click",function(){
        $("h1").text("Level " +level);
        nextSequence();
        check=true;
        
    });
}
//
//restart
function startover(){
    level=0;
    gamePattern=[];
    userChosenPattern=[];
    check=false;

}




//