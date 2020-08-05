function setup() {
    createCanvas(1000, 1000, WEBGL); // WebGL enables 3D render
  }
  
  function draw() {
    translate(50,0,0);     // Offsets shape
    cylinder(100, 250);    // Create cylinder
    translate(200,0,0);    // Offsets shape
    ellipsoid(30, 40, 40); // Create ellipsoid
  }