import c from './canvas';

export class Square {
	constructor() {

	}
	draw() {
		c.fill(255, 0, 0, 128);
		c.rect(100, 100, 50, 50);
	}
}