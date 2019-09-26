// https://www.youtube.com/watch?v=cXgA1d_E-jY
function Bird(){
	this.y = width/2;
	this.x = 25;

	this.gravity = 0.1;
	this.lift = -8;
	this.velocity = 0;

	this.r = 8;


	this.show = function(){
		fill(255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.y += this.velocity;

		if (this.y <= this.r){
			this.y = this.r;
			this.velocity = 0;
		}else if(this.y >= height - this.r){
			this.y = height - this.r;
			this.velocity = 0;
		}
		// if (this.velocity>=  5)
		// {
		// 	this.velocity = 5;
		// } else if (this.velocity<= -5){
		// 	this.velocity = -5;
		// }
	}

	this.up = function() {
		this.velocity += this.lift;
		console.log(this.velocity);
	}
}