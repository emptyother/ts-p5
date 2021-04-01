import { Vector } from 'p5';
import c from './canvas';

export class Square {
	pos = new Vector();
	constructor() {

	}
	move(x: number, y: number) {
		this.pos.x = this.pos.x + x;
		this.pos.y = this.pos.y + y;
	}
	draw() {
		c.fill(255, 0, 0, 128);
		c.rect(this.pos.x - 10, this.pos.y - 10, 20, 20);
	}
}