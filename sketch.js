var myImage, myMoon, mySong, analyzer;

function preload() {
	mySong = loadSound('./assets/sound/Night_Music.mp3');
	myImage = loadImage('./assets/img/stelle.jpeg');
	myMoon = loadImage('./assets/img/moon_Q.png');
}


function setup() {

	createCanvas(windowWidth, windowHeight);
	mySong.loop();

	analyzer = new p5.Amplitude();
	analyzer.setInput(mySong);

}


function draw() {
	background(myImage);

	var vol = analyzer.getLevel();
	var dim = map(vol, 0, 0.2, 1, 2);
	image(myMoon, windowWidth / 2 - 100, windowHeight / 2 - 40, dim * windowWidth / 10, dim * windowWidth / 10);


	drawCircle();

}

function drawCircle() {
	var x = random() * width;
	var y = random() * height;
	var r = random() * 20;

	frameRate(5);
	noStroke();
	colorMode(HSB);
	fill(66, 1, 92, 0.5);
	ellipse(x, y, r);
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
