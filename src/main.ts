import p5 from "p5";
import { draw, setup } from "./sketch";

const sketch = (p: p5) => {
  p.setup = () => setup(p);

  p.draw = () => draw(p);
};

new p5(sketch);
