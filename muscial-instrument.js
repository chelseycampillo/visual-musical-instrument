var freqC = 261;
var freqG = 392;
var freqA = 440;
var freqF = 349;
var freqE = 329;
var freqD = 294;

var playingC, playingG, playingA, playingF, playingE, playingD;
var oscC, oscG, oscA, oscF, oscE, oscD;

var playing = false;

function setup() {
  createCanvas (400,400);
  background(19,30,85);
  
  oscC = new p5.Oscillator();
  oscC.setType('triangle');
  oscC.freq(freqC);
  oscC.amp(0);
  oscC.start();
  
  oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
  oscE = new p5.Oscillator();
  oscE.setType('triangle');
  oscE.freq(freqE);
  oscE.amp(0);
  oscE.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  fill('pink');
  rect(320,0,80,80);
  fill('white');
  text('CLICK', 340,30);
  text('TO', 340, 45);
  text('START',340,60);
}

function draw() {
  noStroke();
  fill(220);
  if (playing) {
		if (playingC) {
    	fill(52, 123, 229);
    	ellipse(350, 350, 80, 80);
    	fill('white');
    	text('C',345, 355);
  } else if (playingG) {
    	fill(34,233,100);
    	ellipse(250, 150, 80, 80);
    	fill('white');
    	text('G', 245, 155);
  } else if (playingA) {
    	fill('red');
  		ellipse(50,50, 25,25); 
    	fill('white');
    	text('A',47,53);
  } else if (playingF) {
    fill('green');
    ellipse(200, 250, 80, 80);
    fill('white');
    text('F', 195, 255);
  } else if (playingE) {
    fill(52, 123, 229);
    ellipse(220, 270, 80, 80);
    fill('white');
    text('E', 215, 275);
  } else if (playingD) {
    fill(52, 123, 229);
    ellipse(250, 300, 80, 80);
    fill('white');
    text('D', 245, 305);
  }
  }
  else {
    fill (19,30,85);
    rect(0,25,300,400);
    rect(0,200,400,200);
	}
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = true;
  } else if (key == 'G') {
    osc = oscG;
    playingG = true;
  } else if (key == 'A') {
    osc = oscA;
    playingA = true;
  } else if (key == 'F') {
    osc = oscF;
    playingF = true;
  } else if (key == 'E') {
    osc = oscE;
    playingE = true;
  } else if (key == 'D') {
    osc = oscD;
    playingD = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'C') {
    osc = oscC;
    playingC = false;
  } else if (key == 'G') {
    osc = oscG;
    playingG = false;
  } else if (key == 'A') {
    osc = oscA;
    playingA = false;
  } else if (key == 'F') {
    osc = oscF;
    playingF = false;
  } else if (key == 'E') {
    osc = oscE;
    playingE = false;
  } else if (key == 'D') {
    osc = oscD;
    playingD = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}

function mouseClicked() {
	fill('white');
  text('ccggaag ffeeddc ggffeed ggffeed ccggaag ffeeddc', 10,20);
}

