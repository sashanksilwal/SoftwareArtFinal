let sourceText;
let poem;

let startIndex = 0;

function preload() {
  sourceText = loadStrings('feelings.txt');
}

function setup() {
  video = createCapture(VIDEO);
  video.size(64, 48);

  let cnv = createCanvas(500, 500);
  cnv.parent('canvas2');
  poem = sourceText.join(' ');
  textFont('Courier-Bold');
}

function draw() {
  background(0);
  frameRate(4);

  let charIndex = startIndex;
  let w = width / video.width;
  let h = height / video.height;
  video.loadPixels();
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width - 1; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const neighbourIndex = (i + 1 + j * video.width) * 4;

      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      let avg = (r + g + b) / 3;

      const neighbourR = video.pixels[neighbourIndex + 0];
      const neighbourG = video.pixels[neighbourIndex + 1];
      const neighbourB = video.pixels[neighbourIndex + 2];
      let neighbourAvg = (neighbourR + neighbourG + neighbourB) / 3;

      let diff = abs(avg - neighbourAvg);

      if (diff > 20) {
        diff = color(100, 100, 100);
      } else {
        diff = color(0);
      }
      noStroke();
      fill(diff);
      textSize(w * 1.2);
      textAlign(CENTER, CENTER);

      text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);

      charIndex++;
    }
  }

  // startIndex++;
}
