let c = document.getElementById("canvas");
let r = c.getContext("2d");
c.width = window.innerWidth - 17;
c.height = window.innerHeight - 20;

r.fillStyle = "violet";

let iterations = 10;
let length = 100;
// in deg
let angle = 45;
let x = c.width / 2;
let y = (c.height / 2) + 50;
r.moveTo(x, y);
r.lineTo(x, y - length);
r.strokeStyle = "violet";
r.lineWidth = 4;
r.stroke();
r.moveTo(x, y - length);
// trying to get right side to work
for(let i = 0; i < iterations; i++) {
    length *= 0.5;

    angle += 40;
    let xdiff = length * Math.sin(angle);
    let ydiff = length * Math.cos(angle);

    x += xdiff;
    y += ydiff;
    r.lineTo(x, y);
    r.stroke();
    r.moveTo(x, y);
}