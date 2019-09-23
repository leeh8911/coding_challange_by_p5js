function setup(){
	
	createCanvas(720, 400);

}

function draw(){

	background(0);
	noFill();

	stroke(255);
	//point(width/2, height/4);
	//point(width/2, height/2);
	ellipse(width/2 + random(-width/8, width/8), height/2, random(4, 16), random(4, 16));
	ellipse(width/2 + noise(random(255)), height/4, 8, 8);

	stroke(0, 153, 255);
	line(0, height * 0.33, width, height *0.33);

	stroke(255, 153, 0);
	rect(width*0.25, height * 0.1, width *0.5, height *0.8);


}