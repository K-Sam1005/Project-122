x = 0;
y = 0;
var screen_width = 0;
var screen_height = 0;
var apple = "";
var to_number = "";
var speak_data = "";

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    to_number = Number(content);
    console.log(to_number);

    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Drawing apple/apples";
        draw_apple = "set";
    }else{
        document.getElementById("status").innerHTML = "The AI has not recognized a number";
    }

}


function setup() {
    screen_height = window.innerHeight;
    screen_width = window.innerWidth;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + "apples drawn";
    speak();
    
    for(var i = 1; i <= to_number; i++){
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
    }
}
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    speak_data = "";

    synth.speak(utterThis);

}

function preload(){
  apple = loadImage("apple.png");
}
