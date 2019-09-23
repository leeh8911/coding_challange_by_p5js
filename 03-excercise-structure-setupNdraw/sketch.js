let y = 100;

function setup(){
	
	createCanvas(720, 400);
	background(0);
	frameRate(60);
}

function draw(){
	
	stroke(255);
	line(0,y, width,y)

	if( y > 0){
		y -= 2;
	} else{
		y = height;
	}
}