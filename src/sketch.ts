import p5 from "p5";

export function setup(p: p5) {
  const canvas = p.createCanvas(innerWidth, p.windowHeight);
  canvas.parent("app");
  p.background(220);
}

export function draw(p: p5) {
  p.circle(p.mouseX, p.mouseY, 20);
}
