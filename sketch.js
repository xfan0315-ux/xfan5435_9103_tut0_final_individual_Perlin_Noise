// ========================
// 800x800 Canvas – CircleArt Version
// ========================
let cnv, t = 0;  

const NOISE = {
  animate: true,
  speed: 0.02,
  wiggle: 24,
  sMin: 0.85,
  sMax: 1.15,
  rotMax: 18
};

/**
 * Initialize the canvas and set up the drawing environment
 */
function setup() {
  cnv = createCanvas(800, 800);
  centerCanvas();
  angleMode(DEGREES);
}

/**
 * Center the canvas on the window
 */
function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  x = max(0, x);
  y = max(0, y);
  cnv.position(x, y);
}

/**
 * Re-center the canvas when the window is resized
 */
function windowResized() {
  centerCanvas();
}

/**
 * Main draw loop - clear the canvas and draw all elements
 */
function draw() {
  if (NOISE.animate) t += NOISE.speed;
  drawBackgroundGrid();  // Draw colored quadrants with random dots
  drawAllCircles(t);      // Draw all circles using t as the parameter
}

/**
 * CircleArt class - represents a scalable, translatable circle composition
 * Each instance stores position, scale, and a custom drawing function
 */
class CircleArt {
  constructor(x, y, scale, drawFn) {
    this.x = x;           // X position on canvas
    this.y = y;           // Y position on canvas
    this.scale = scale;   // Scale multiplier
    this.drawFn = drawFn; // Drawing function for this circle
  }

  /**
   * Display the circle at its position with its scale
   */
  display() {
    push();
    translate(this.x, this.y);
    scale(this.scale);
    this.drawFn();
    pop();
  }
}

/**
 * Draw the background grid with four colored quadrants
 * Each quadrant contains randomly distributed black circles
 */
function drawBackgroundGrid() {
  const cols = ['#d14a2a', '#4c95e0', '#558f48', '#de7b2e'];
  const cell = width / 2;

  // Draw the four background quadrants
  noStroke();
  fill(cols[0]); rect(0, 0, cell, cell);        // Red (top-left)
  fill(cols[1]); rect(cell, 0, cell, cell);     // Blue (top-right)
  fill(cols[2]); rect(0, cell, cell, cell);     // Green (bottom-left)
  fill(cols[3]); rect(cell, cell, cell, cell);  // Orange (bottom-right)

  // Use fixed random seed for consistent dot placement
  randomSeed(9103);

  // Configuration for dots in each quadrant
  const dotConfig = [
    { gx: 0, gy: 0, count: 25, rMin: 15, rMax: 45 }, // Red quadrant
    { gx: 1, gy: 0, count: 25, rMin: 15, rMax: 45 }, // Blue quadrant
    { gx: 0, gy: 1, count: 15, rMin: 10, rMax: 36 }, // Green quadrant
    { gx: 1, gy: 1, count: 15, rMin: 10, rMax: 36 }  // Orange quadrant
  ];

  // Draw random dots in each quadrant
  for (const q of dotConfig) {
    const baseX = q.gx * cell;
    const baseY = q.gy * cell;

    for (let i = 0; i < q.count; i++) {
      const r = random(q.rMin, q.rMax);

      // Scatter dots across the quadrant with a margin to keep them in bounds
      const margin = 10;
      const cx = baseX + random(margin + r, cell - margin - r);
      const cy = baseY + random(margin + r, cell - margin - r);

      fill(0);
      noStroke();
      circle(cx, cy, r);
    }
  }
}


/**
 * Create and display all circle compositions
 * Each circle is positioned at specific coordinates with a unique drawing function
 */
function drawAllCircles() {
  const circles = [
    new CircleArt(10, 10, 1.0, drawCircle6),
    new CircleArt(220, 180, 0.9, drawCircle4),
    new CircleArt(400, -30, 0.4, drawCircle7),
    new CircleArt(530, 180, 0.6, drawCircle8),
    new CircleArt(785, 80, 0.8, drawCircle4),

    new CircleArt(-45, 270, 0.9, drawCircle3),
    new CircleArt(154, 460, 1.4, drawCircle1),
    new CircleArt(434, 460, 1.4, drawCircle2),
    new CircleArt(760, 410, 1.2, drawCircle3),

    new CircleArt(20, 700, 1, drawCircle5),
    new CircleArt(295, 730, 1.1, drawCircle6),
    new CircleArt(610, 730, 0.7, drawCircle7),
  ];

  // Display all circles
  for (const c of circles) {
    c.display();
  }
}

/**
 * ==================== CIRCLE #1: Purple Xingyuan ====================
 */
function drawCircle1() {
  const R = 100;
  
  // Define color palette
  const colors = {
    black: "#000",
    purple: "rgb(179,106,210)",
    blue: "rgb(88,170,246)",
    white: "#fff",
    pink: "rgb(204,102,170)"
  };

  // Outer black circle
  noStroke();
  fill(colors.black);
  circle(0, 0, R * 2);

  // Purple dots arranged in a circle
  const dotCount = 20;
  const dotRadius = R * 0.10;
  const padding = R * 0.05;
  const dotCircleRadius = R - dotRadius - padding;
  
  fill(colors.purple);
  for (let i = 0; i < dotCount; i++) {
    const angle = i * (360 / dotCount);
    circle(cos(angle) * dotCircleRadius, sin(angle) * dotCircleRadius, dotRadius * 2);
  }

  // Blue center circle
  fill(colors.blue);
  circle(0, 0, R * 1.40);
  
  // Decorative rings
  noFill();
  stroke(colors.pink);
  strokeWeight(R * 0.035);
  circle(0, 0, R * 1.16);

  stroke(colors.white);
  strokeWeight(R * 0.18);
  circle(0, 0, R * 1.04);

  stroke(colors.pink);
  strokeWeight(R * 0.03);
  circle(0, 0, R * 0.60);
}

/**
 * ==================== CIRCLE #2: Orange-Green Xingyuan ====================
 */
function drawCircle2() {
  const R = 100;
  
  // Define color palette
  const colors = {
    black: "#000",
    orange: "rgb(223,121,45)",
    green: "rgb(116,158,94)",
    white: "#fff"
  };

  // Outer black circle
  noStroke();
  fill(colors.black);
  circle(0, 0, R * 2);

  // Concentric orange and green circles
  const radii = [
    { size: R * 0.82, color: colors.orange },
    { size: R * 0.56, color: colors.green },
    { size: R * 0.40, color: colors.orange },
    { size: R * 0.28, color: colors.green }
  ];

  for (const layer of radii) {
    fill(layer.color);
    circle(0, 0, layer.size * 2);
  }

  // White radial spokes
  const spokeCount = 24;
  const spokeWidth = R * 0.06;
  const innerRadius = R * 0.40;
  const outerRadius = R * 0.82;

  fill(colors.white);
  rectMode(CENTER);
  for (let i = 0; i < spokeCount; i++) {
    push();
    rotate(i * (360 / spokeCount));
    const spokeLength = outerRadius - innerRadius;
    const spokeCenter = (outerRadius + innerRadius) / 2;
    rect(spokeCenter, 0, spokeLength, spokeWidth);
    pop();
  }
}

/**
 * ==================== CIRCLE #3: Flower - Sansan ====================
 */
function drawCircle3() {
  noStroke();
  
  // Outer black circle
  fill(0);
  circle(0, 0, 300);

  // Inner white circle
  fill(255);
  circle(0, 0, 120);

  // Green decorative ring
  noFill();
  stroke(95, 120, 70);
  strokeWeight(20);
  circle(0, 0, 200);

  // Orange petals (8 petals arranged radially)
  noStroke();
  fill(230, 150, 40);
  const petalLength = 120;
  const petalWidth = 50;
  
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);
    ellipse(0, -90, petalWidth, petalLength);
    pop();
  }

  // Green center circle
  noStroke();
  fill(95, 120, 70);
  circle(0, 0, 100);
}

/**
 * ==================== CIRCLE #4: Blue-Red Layers - Sansan ====================
 */
function drawCircle4() {
  noStroke();

  // Define layer sizes
  const outerBlack = 320;
  const blueD = 260;
  const redOuter = 200;
  const blueInner = 130;
  const redCenter = 70;

  // Draw concentric circles
  fill(0);
  ellipse(0, 0, outerBlack, outerBlack);
  
  fill(66, 100, 210);
  ellipse(0, 0, blueD, blueD);
  
  fill(220, 60, 50);
  ellipse(0, 0, redOuter, redOuter);
  
  fill(66, 100, 210);
  ellipse(0, 0, blueInner, blueInner);
  
  fill(220, 60, 50);
  ellipse(0, 0, redCenter, redCenter);

  // Draw yellow dots arranged in a circle
  fill(230, 175, 55);
  const dotCount = 12;
  const dotSize = 26;
  const outerRadius = outerBlack / 2;
  const blueRadius = blueD / 2;
  const dotRadius = dotSize / 2;
  const centerRadius = (blueRadius + dotRadius + outerRadius - dotRadius) / 2;

  for (let i = 0; i < dotCount; i++) {
    const angle = i * (360 / dotCount);
    ellipse(
      cos(angle) * centerRadius,
      sin(angle) * centerRadius,
      dotSize,
      dotSize
    );
  }
}

/**
 * ==================== CIRCLE #5: Red Petals - Ruby ====================
 */
function drawCircle5() {
  const s = 240;

  // Outer white circle with black stroke
  fill(255);
  strokeWeight(Math.round(s * 0.125));
  stroke("#000");
  circle(0, 0, s);

  // Red center dot
  noStroke();
  fill("#e53019");
  circle(0, 0, Math.round(s * 0.125));

  // Draw 6 petals and decorative elements
  push();
  for (let i = 0; i < 6; i++) {
    rotate(60);
    
    // Orange petal shape
    // Petal defined using curveVertex for smooth shape
    // 
    fill("#f1801b");
    beginShape();
    curveVertex(0, -0.05 * s); 
    curveVertex(0, -0.05 * s);
    curveVertex(-0.001 * s, -0.08 * s);
    curveVertex(-0.025 * s, -0.135 * s);
    curveVertex(-0.045 * s, -0.245 * s);
    curveVertex(-0.055 * s, -0.32 * s);
    curveVertex(-0.035 * s, -0.39 * s);
    curveVertex(0.035 * s, -0.39 * s);
    curveVertex(0.055 * s, -0.32 * s);
    curveVertex(0.045 * s, -0.245 * s);
    curveVertex(0.025 * s, -0.135 * s);
    curveVertex(0.001 * s, -0.08 * s);
    endShape(CLOSE);

    // Blue decorative circle
    fill("#517ae1");
    ellipse(-0.17 * s, -0.28 * s, s / 9.0, s / 9.0);
  }
  pop();
}

/**
 * ==================== CIRCLE #6: Orange Layers - Ruby ====================
 */
function drawCircle6() {
  const s = 260;

  // Outer black circle
  noStroke();
  fill("#000");
  circle(0, 0, s);

  // White ring (2/3 + 1/15 = 11/15 of radius)
  fill("#fff");
  circle(0, 0, s * (11 / 15));

  // Blue ring (2/3 of radius)
  fill("#3280ee");
  circle(0, 0, s * (2 / 3));

  // Orange dots arranged in circle
  const dotCount = 20;
  const dotRadius = s * 0.43;
  const dotSize = s / 12;
  
  fill("#ed9b2c");
  for (let i = 0; i < dotCount; i++) {
    const angle = i * (360 / dotCount) - 90;
    const x = cos(angle) * dotRadius;
    const y = sin(angle) * dotRadius;
    ellipse(x, y, dotSize, dotSize);
  }

  // Orange-red center circle
  fill("#e7691f");
  circle(0, 0, s * 0.5);

  // Red dots with randomness
  fill("#e54b1c");
  for (let i = 0; i < 6; i++) {
    const angle = -90 + (0.8 * 360) / (6 - 1) * i + random(-36, 36);
    const radius = s * 0.1 + random(-0.05 * s, 0.05 * s);
    circle(cos(angle) * radius, sin(angle) * radius, random(0.05, 0.1) * s);
  }

  // Dark red center dots
  fill("#e53019");
  for (let i = 0; i < 6; i++) {
    const angle = -90 + (0.7 * 360) / (6 - 1) * i + random(-36, 36);
    const radius = (i % 2 === 0) ? s * 0.13 : s * 0.08;
    circle(cos(angle) * radius, sin(angle) * radius, random(0.1, 0.12) * s);
  }
}

/**
 * ==================== CIRCLE #7: Blue-Purple - Stannie ====================
 */
function drawCircle7() {
  // Outer black circle
  fill(0);
  ellipse(0, 0, 500, 500);

  // Large blue circle
  fill("#01A4F9");
  ellipse(0, 0, 400, 400);

  // White circle
  fill(255);
  ellipse(0, 0, 250, 250);

  // Inner blue circle
  fill("#01A4F9");
  ellipse(0, 0, 120, 120);

  // Purple radial petals
  fill("#AF55AE");
  const petalCount = 24;
  for (let i = 0; i < petalCount; i++) {
    push();
    rotate((360 / petalCount) * i);
    ellipse(0, -130, 18, 140);
    pop();
  }
}

/**
 * ==================== CIRCLE #8: Green Dots - Stannie ====================
 */
function drawCircle8() {
  // Outer black circle
  fill(0);
  ellipse(0, 0, 500, 500);

  // Green dots arranged around the circle
  fill("#6B8E23");
  const dotCount = 16;
  const dotRadius = 210;
  for (let i = 0; i < dotCount; i++) {
    push();
    rotate((360 / dotCount) * i);
    ellipse(0, -dotRadius, 50, 50);
    pop();
  }

  // Large white circle
  fill(255);
  ellipse(0, 0, 340, 340);

  // Inner black circle
  fill(0);
  ellipse(0, 0, 280, 280);

  // Red center circle
  fill("#D84315");
  ellipse(0, 0, 80, 80);
}
