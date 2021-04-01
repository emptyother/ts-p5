import c from './canvas';
import { Square } from './square';

var f = new Square();
c.draw = function () {
	f.draw();
}