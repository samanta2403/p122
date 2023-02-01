x = 0;
y = 0;

screen_width ="0";
screen_hight ="0";
speak_data = ""
draw_apple = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){

 apple = loadImage('apple.png');

  }


function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) 
{
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
    to_number = number(content);
    if(Number.isInteger(to_number))
    {
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;  
    draw_apple= "set";
    }
}
 else
 {
  document.getElementById("status").innerHTML = "The speech has not recognized the number " + content;  

}

function setup() {
 screen_width= window.innerWidth;
 screen_hight= window.innerHeight;
 Canvas =createCanvas(screen_width,screen_hight-150);
 Canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data= to_number + 'apples deawn' ;
    speak()
    for(var i = 1;i<=to_number; i++);
    x = Math.floor(Math.random()*700);
    y = Math.floor(Math.random()*700);
    Image(apple , x , y, 50,50)

  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
