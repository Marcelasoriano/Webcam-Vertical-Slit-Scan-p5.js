let video;
let y = 0;

function setup() {
  createCanvas(800, 800);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(800, 800);
  background(0);
}

function draw() {
  video.loadPixels();

  let w = video.width;
  let h = video.height;

  // vertical video
  let slitscanY = copy(video, 0, w / 2, w, 100, 0, y, h, 100);

  y = y + 1;

  if (y > height) {
    y = 0;
  }

  y = y + 1;

  if (y > width) {
    y   = 0;
  }
}