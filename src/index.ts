import c from './canvas';
import { Square } from './square';

var square = new Square();
c.draw = function () {
	square.draw();
	if (c.keyIsDown(c.DOWN_ARROW)) {
		square.move(0, 1);
	}
	if (c.keyIsDown(c.UP_ARROW)) {
		square.move(0, -1);
	}
	if (c.keyIsDown(c.LEFT_ARROW)) {
		square.move(-1, 0);
	}
	if (c.keyIsDown(c.RIGHT_ARROW)) {
		square.move(1, 0);
	}
}