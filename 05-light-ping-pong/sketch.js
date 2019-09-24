
let x, y;

let l = light;

function setup(){
	createCanvas(500, 500);

	x = width/2;
	y = height/2;
	l = light(x, y);
}

function draw(){
	background(0);

	l.show();
}


function light(x_, y_){

	this.x = x_;
	this.y = y_;

	function show(){

		let c1, c2, c3;

		c1 = color(255, 255, 255, 255);
		c2 = color(255, 255, 255, int(255/(2*2)));
		c3 = color(255, 255, 255, 255/(4*4));
		noStroke();
		fill(c1);
		ellipse(x, y, 100, 100);
		fill(c2);
		ellipse(x, y, 200, 200);
		fill(c3);
		ellipse(x, y, 400, 400);
	}

}