// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/NCCHQwNAN6Y

var song;
var button;
var amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  song = loadSound('rainbow.mp3', loaded);
  amp = new p5.Amplitude();
  background('#F4EDED');
}

function loaded() {
  button = createButton('play');
  button.mousePressed(togglePlaying);
}

function draw() {
  background(51);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  fill(0, 0, 255);
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
