
function setup(){
	createCanvas(500, 500);
	frameRate(60);

	bubble1 = new Bubble(100, 100, 10, color(random(255), random(255),random(255)));
	bubble2 = new Bubble(200, 200, 20, color(random(255), random(255),random(255)));

}

function draw(){
	background(0);


	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}

