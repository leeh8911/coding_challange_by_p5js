class Neuron{
	constructor(){
		this.w = [noise(0), noise(0)];
		this.b = noise(0);
	}

	printStatus(){
		print(this.w, this.b)
	}
}