//Globals
var clockRunning = false;


var CurTime = 40;
var TimerId;
var WinCtr = 0;
var LoseCtr = 0;
var arrSongs = [];
var arrSinger = [];
var arrRandomVal = [];
var CurrentQuestion = 0;
// Setup our event handlers
window.onload = function() {

  //  Click events are done for us:
  $("#Start").click(StartGame);
  $("#Finish").click(FinishGame);
  $("#NextQ").click(GenNextQuestion);
  $("#option1").click(Option1Click);
  $("#option2").click(Option2Click);
  $("#option3").click(Option3Click);
  $("#option4").click(Option4Click);

 //// $("#stop").click(stopwatch.stop);
 // $("#reset").click(stopwatch.reset);
 // $("#start").click(stopwatch.start);
};
//  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.

  function timeConverter(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
  //  console.log(minutes);
  //  console.log(seconds);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
   // console.log(minutes + seconds);
    return minutes + ":" + seconds;
  }


function StartGame()
{
	//alert("Received Start");
	StartGameTimer();
}

function FinishGame()
{
	alert("Received Finish click");
	//countdown has finished.
   	  clearInterval(TimerId);
   	  //reset CurTime
   	  CurTime = 40;
   	  //reset game clock;
   	  clockRunning = false;
   	  //get new time
   	  var x = timeConverter(0);
      //update display with new time
   	  $("#display").html(x);
   	  alert("GAME OVER!!! Press Start to re-play");
   	  return;
}

function GenNextQuestion()
{
	alert("Received Next Question click");
}

function Option1Click()
{
	//alert("Received option 1 click");
	//check of selected option html is the correct answer
	//if game clock is not running then do nothing
	if(!clockRunning)
	{	
		return;
	}	
	var sValStr = $("#lblOpt1").text();
	console.log(sValStr);
	if(SearchAnswerInArr(sValStr) == true)
	{
		//user has selected the correct answer
		//we have to increment the winctr
		//we have to gen the next question
		console.log("Found a win")
		ProcessWin();
		
	}
	else
	{
		console.log("Found a loss")
		ProcessLoss();
	}	

}
function Option2Click()
{
	//alert("Received option 2 click");
	if(!clockRunning)
	{	
		return;
	}	
	var sValStr = $("#lblOpt2").text();
	console.log(sValStr);
	if(SearchAnswerInArr(sValStr) == true)
	{
		//user has selected the correct answer
		//we have to increment the winctr
		//we have to gen the next question
		console.log("Found a win")
		ProcessWin();
		
	}
	else
	{
		console.log("Found a loss")
		ProcessLoss();
	}	
}
function Option3Click()
{
	//alert("Received option 3 click");
	if(!clockRunning)
	{	
		return;
	}	
	var sValStr = $("#lblOpt3").text();
	console.log(sValStr);
	if(SearchAnswerInArr(sValStr) == true)
	{
		//user has selected the correct answer
		//we have to increment the winctr
		//we have to gen the next question
		console.log("Found a win")
		ProcessWin();
		
	}
	else
	{
		console.log("Found a loss")
		ProcessLoss();
	}	
}
function Option4Click()
{
	//alert("Received option 4 click");
	if(!clockRunning)
	{	
		return;
	}	
	var sValStr = $("#lblOpt4").text();
	console.log(sValStr);
	if(SearchAnswerInArr(sValStr) == true)
	{
		//user has selected the correct answer
		//we have to increment the winctr
		//we have to gen the next question
		console.log("Found a win")
		ProcessWin();
		
	}
	else
	{
		console.log("Found a loss")
		ProcessLoss();
	}	
}

function StartGameTimer() {

      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
      	ResetGame();
        var x = timeConverter(CurTime);
        clockRunning = true;
        console.log(x);
        $("#display").html(x);
       // $("#display").html(timeConverter(2)); 
       //Set timer every 5 sec
       TimerId= setInterval(fiveSeconds, 5000);
       //Show a question
       DisplayTriviaQuestion(CurrentQuestion);
      }
}
//setTimeout(fiveSeconds, 1000 * 5);
function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
 // $("#time-left").append1("<h2>About 10 Seconds Left!</h2>");
 // decrement timer by 5
   CurTime = CurTime - 5;
  // console.log(CurTime);
   if(CurTime <= 0)
   {
   	  //countdown has finished.
   	  clearInterval(TimerId);
   	  //reset CurTime
   	  CurTime = 40;
   	  //reset game clock;
   	  clockRunning = false;
   	  //get new time
   	  var x = timeConverter(0);
      //update display with new time
   	  $("#display").html(x);
   	  alert("GAME OVER!!! Press Start to re-play");
   	  return;
   }	
   //get new time
   var x = timeConverter(CurTime);
   //update display with new time
   $("#display").html(x);
   
}



function ResetGame()
{
	WinCtr = 0;
	LoseCtr = 0;
	//initialize html elements
	$("#WinCtr").html(WinCtr.toString());
	$("#LoseCtr").html(LoseCtr.toString());
	InitializeArr();
}

function InitializeArr()
{
	//truncate arrays
	arrSongs.length = 0;
	arrSinger.length = 0;
	arrRandomVal.length = 0;
	//fill songs array with songs and Singers array with names of Singers
	arrSongs[0] = "Closer";
	arrSinger[0] ="ChainSmoker";
	arrSongs[1] = "Despacito";
	arrSinger[1] = "Justin Bieber";
	arrSongs[2] = "Attention";
	arrSinger[2] = "Charlie Puth";
	arrSongs[3] = "Buffalo Soldier";
	arrSinger[3] = "Bob Marley";
	arrSongs[4] = "Havana";
	arrSinger[4] = "Camilla Cabello";
	arrSongs[5] = "Shape of You";
	arrSinger[5] = "Ed Sheehan";
	arrSongs[6] = "I am the One";
	arrSinger[6] = "Justin Bieber";
	arrSongs[7] = "Thriller";
	arrSinger[7] = "Michael Jackson";
	arrSongs[8] = "Can't Stop The Feeling";
	arrSinger[8] = "Justin Timberlake";
	arrSongs[9] = "Hello";
	arrSinger[9] = "Adele";
	//Generate a randon no bet 0-9
	CurrentQuestion = getRandomIntInclusive(0,9);
	
}

//generate random num in range
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//show in html the trivia question
function DisplayTriviaQuestion(QNo)
{
   var nRandom = 0;
   var nAnsRandom = 0;
   var nRandom2 = 0;
   var fCorrect = true;
   //we have to show the question, and 4 possible answers  
   $("#Q1").empty();
   $("#Q1").html("Name the Singer for the song: " + arrSongs[QNo]);
   nAnsRandom = getRandomIntInclusive(0,3);
   //console.log("Answer Random No is" + nAnsRandom);
   //show the correct answer to some random option between 0 and 3
   DisplayTriviaResults(nAnsRandom, QNo);
   //generate remaining 3 random numbers excpect the answer one
   for(i=0; i< 3; i++)
   {	
   		while(fCorrect)
   		{	
   			nRandom = getRandomIntInclusive(0,3);
   			if (nRandom != nAnsRandom)
   			{	
   				//console.log("Valid Random Gen" + nRandom);
   				fCorrect = false;
   			}	
   		}
   		nRandom2 = getRandomIntInclusive(0,9);
   		//show incorrect answers to some random option except the one we populated for correct ans above
   		DisplayTriviaResults(nRandom,nRandom2);
   		fCorrect = true;
   }

}

//show the option passed in html
function DisplayTriviaResults(OptNo, AnsNo)
{
	if(OptNo == 0)
	{	
		$("#lblOpt1").empty();
		$("#lblOpt1").html(arrSinger[AnsNo]);
	}	
	else if(OptNo == 1)
	{	
		$("#lblOpt2").empty();
		$("#lblOpt2").html(arrSinger[AnsNo]);
	}		
	else if(OptNo == 2)
	{	
		$("#lblOpt3").empty();
		$("#lblOpt3").html(arrSinger[AnsNo]);
	}	
	else if(OptNo == 3)
	{	
		$("#lblOpt4").empty();
		$("#lblOpt4").html(arrSinger[AnsNo]);
	}				
}

function SearchAnswerInArr(sValuetoSearch)
{
	var sTemp = "";
	sTemp = arrSinger[CurrentQuestion];
	if(sTemp === sValuetoSearch)
	{
		console.log("Match Found " + sTemp);
		return true;
	}	
	
	return false; 
}

//user has selected the correct answer
//we have to increment the winctr
//we have to gen the next question
function ProcessWin()
{
	WinCtr +=1;
	$("#WinCtr").html(WinCtr);
	CurrentQuestion = getRandomIntInclusive(0,9);
	DisplayTriviaQuestion(CurrentQuestion);
}

function ProcessLoss()
{
	LoseCtr +=1;
	$("#LoseCtr").html(LoseCtr);
	CurrentQuestion = getRandomIntInclusive(0,9);
	DisplayTriviaQuestion(CurrentQuestion);
}