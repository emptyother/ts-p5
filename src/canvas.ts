import p5 from 'p5';

const c = new p5(() => {});
c.setup = function () {
	c.createCanvas(500, 700);
	c.background(0);
}
export default c;