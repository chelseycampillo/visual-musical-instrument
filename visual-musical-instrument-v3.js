var song;
var amp;
var start = 0;
var w;
var playing = 0;

function preload() {
  song = loadSound('songs/2.mp3');
}

function setup() { 
  createCanvas(256, 256);
	colorMode(HSB);
	fft = new p5.FFT(0.9, 64);
  w = width / 64;
} 

function draw() { 
	background(0);
  if (start == 1 & playing == 0) {
    song.play();
    playing = 1;
  } else if (start == 0 & playing == 1) {
    song.pause();
    playing = 0;
  }
  var spectrum = fft.analyze();
  stroke(255);
  for (var i = 0; i < spectrum.length; i = i + 1) {
    var amp = spectrum[i];
    var y = map(amp, 0, 256, height, 0);
    fill(i, 255, 255);
    rect(i * w, y, w, height - y);
  }
}

function mouseClicked() {
  if (start == 0 & playing == 0) {
  	start = 1;
  } else {
    start = 0;
  }
}
