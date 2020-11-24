// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NCCHQwNAN6Y

var song;
var button;
var amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('assets/yume.mp3', loaded);
  amp = new p5.Amplitude();
  background('#F4EDED');
}

function loaded() {
  button = createButton('play');
  button.mousePressed(togglePlaying);
}

function draw() {
  background('#F4EDED');

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 300, 500);

  fill('#FFFFFF');
  noStroke();
  ellipse(width / 2, height / 2, diam, diam);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html('pause');
  } else {
    song.stop();
    button.html('play');
  }
}

let myFont;
function preload() {
  myFont = loadFont('assets/Basis Grotesque Pro Regula.otf');
}

function setup() {
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('p5*js', 10, 50);
}
