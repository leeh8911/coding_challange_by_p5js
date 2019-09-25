class Bubble{
	constructor(x, y, r, c){
		this.r = r;
		this.c = c;

		this.pos = createVector(x, y);

		this.acc = createVector(0, 0);
		this.vel = createVector(0, 0);
	}

	show(){

		stroke(this.c);
		strokeWeight(4);
		noFill();
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
	}

	move(){
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;

		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;

		this.acc.x += 0.0001;

		if (this.pos.x > width)
		{
			this.pos.x -= width;
		}
		if (this.pos.x < 0)
		{
			this.pos.x += width;
		}
		if (this.pos.y > height)
		{
			this.pos.y -= height;
		}
		if (this.pos.y < 0)
		{
			this.pos.y += height;
		}

	}




}