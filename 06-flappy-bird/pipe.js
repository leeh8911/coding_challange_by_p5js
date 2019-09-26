class Pipe{
	constructor(){


		this.position = width;
		this.velocity = 0;
		this.height = 0;
		this.hole = 0;
		this.width = 0;

	}

	show(){
		stroke(255);
		rect(this.position, 0, this.width, this.height);


	}

	update(){
		this.position += this.velocity;

	}




}