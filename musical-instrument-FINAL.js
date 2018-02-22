var mySnare;
var myClap;
var myCrash;
var myHiHatO;
var myHiHat;
var myKick;
var song1;
var song2;
var amp;
var start = 0;
var w;
var playing = 0;
var mode = 1;
var r = 0;
var circles = [];
var x1;
var x = [];
var y1;
var y = [];
var xSpeed = [];
var ySpeed = [];
var colors = [];


function preload() {
  song1 = loadSound('09 Flashing Lights shortened 1.mp3');
  song2 = loadSound('02 All The Stars 1.mp3');
  mySnare = loadSound('assets/Snare.mp3');
  myClap = loadSound('assets/Clap.mp3');
  myHiHatO = loadSound('assets/HiHatO.mp3');
  myHiHat = loadSound('assets/HiHatC.mp3');
  myKick = loadSound('assets/Kick.mp3'); 
}

function setup() { 
  var cnv = createCanvas(512, 512);
	colorMode(HSB);
  angleMode(DEGREES);
  cnv.mouseClicked(togglePlay);
	fft = new p5.FFT(0.9, 64);
  w = width / 64;
  
  for (var index = 0; index < 100; index = index + 1) {
    x[index] = width / 2;
    y[index] = height / 2;
    xSpeed[index] = random(-5, 5);
    ySpeed[index] = random(-5, 5);
    colors[index] = color(random(255), random(255), random(255))
  }
} 

function draw() { 
	background(0);
  
  if (start == 1 & playing == 0) {
    song2.play();
    playing = 1;
  } //else if (start == 0 & playing == 1) {
    //song2.pause();
    //song1.play();
    //playing = 0;
  //}
  
  var spectrum = fft.analyze();
  
  noStroke();
  
  for (var i = 0; i < spectrum.length; i = i + 1) {
    var amp = spectrum[i];
    var h = map(amp, 0, 512, height, 0);
    fill(amp, 255, 2*amp);
	
    if (mode == 1) {
      rect(i * w, h-200, w, h-200);
    } else if (mode == 2) {
      ellipseMode(RADIUS);
      ellipse(width/2, height/2, amp);
    } else if (mode == 3) {
      ellipse(width/2, height/2, amp);
     	push();
  		// rotate r around (x,y)
  		translate(width/2, height/2);
  		rotate(r);
  		// draw rectangle
  		rect(90, 90, 90, 90);
  		// reset rotation and translation
  		pop();
      r += 1.5;
    } else if (mode == 4) {
      ellipseMode(CENTER);
      ellipse(x[i], y[i], amp/2);
   	 	x[i] = x[i] + xSpeed[i];
    	y[i] = y[i] + ySpeed[i];
    	if (x[i] > width - 5) {
      	xSpeed[i] = -xSpeed[i];
    	}    

    	if (y[i] > height - 5) {
      	ySpeed[i] = -ySpeed[i];
    	}

    	if (x[i] < 5) {
      	xSpeed[i] = -xSpeed[i];
    	}

    	if (y[i] < 5) {
      	ySpeed[i] = -ySpeed[i];
    	}
    } 
  }
}

function mouseClicked() {
  if (start == 0 & playing == 0) {
  	start = 1;
  } else {
    start = 0;
  }
}

function keyPressed() {
  print("got key press for ", key);
  if (key == 'A') {
    mode = 1;
  } else if (key == 'S') {
    mode = 2;
  } else if (key == 'D') {
    mode = 3;
  } else if (key == 'F') {
    mode = 4;
  } else if (key == '1') {
    mySnare.play();
  } else if (key == '2') {
    myClap.play();
  } else if (key == '3') {
    myHiHatO.play(); 
  } else if (key == '4') {
    myHiHat.play(); 
  } else if (key == '5') {
    myKick.play(); 
  }
}

function togglePlay() {
  if (song2.isPlaying()) {
    song2.pause();
    song1.play();
  }else if (song1.isPlaying()) {
    song1.pause();
    song2.play();
  }
}
