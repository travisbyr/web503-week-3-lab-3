function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    rotate(0.35); // Rotates shape
    quad(38, 31, 86, 20, 69, 63, 30, 76); // Creates quad
    noStroke(); // Removes stroke/shape outline
    translate(50,0); // Offsets shape
    fill("blue"); // Fill it blue
  }
  