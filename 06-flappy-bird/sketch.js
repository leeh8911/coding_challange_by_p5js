var bird;
var pipe;
var birds[];

function setup(){
	createCanvas(400, 600);
	bird = new Bird();
	pipe = new Pipe(-1, 100);

}

function draw(){
	background(0);
	bird.show();
	bird.update();

	pipe.show();
	pipe.update();
}


function keyPressed(){
	if (key == ' '){
		bird.up();
	}
}