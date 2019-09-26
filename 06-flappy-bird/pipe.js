class Pipe{
	constructor(velocity, hole){
		this.position = width;
		this.velocity = velocity;
		this.height = random(hole, height - hole);
		this.hole = hole;
		this.width = 40;

	}

	show(){
		stroke(255);
		fill(255,0,0,100);
		rect(this.position, 0, this.width, this.height);
		fill(0,255,0,100);
		rect(this.position, height, this.width, -(height - (this.height + this.hole)));


	}

	update(){
		this.position += this.velocity;

	}

	conflict(bird){
		if ((this.position <= (bird.x + bird.r)) && ((bird.x - bird.r) <= this.position + this.width))
		{
			if (bird.y - bird.r <= this.height)
			{
				bird.conflictFlag = true;
			}else if((this.height  <= bird.y - bird.r) &&(bird.y - bird.r <= this.height + this.hole))
			{
				bird.conflictFlag = false;
			}else if((this.height + this.hole  <= bird.y - bird.r) &&(bird.y + bird.r <= height))
			{
				bird.conflictFlag = true;
			}
		}
		else{
				bird.conflictFlag = false;
		}
	}




}