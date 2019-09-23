
let x, y, X, Y;

function setup(){
	createCanvas(720, 400);
	stroke(255);

	x = 0;
	y = 0;
	X.push(x);
	Y.push(y);


}

function draw(){
	background(0,255,0);

	fill(200);
	for (var i = 0; i < X.length(); i++)
	{
		ellipse(Y[i], X[i], 10, 10);
	}
}

function pushXY(){

	x = noise(random(255));
	y += 1;
	X.push(x);
	Y.push(y);
}

function plotXY(){


}