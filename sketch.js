let canvas;
let img;

function setup() {
  canvas = createCanvas(300, 300);
  canvas.drop(gotFile);
  canvas.mousePressed(inputTextPaint);
  background(180, 0, 180);
}

function gotFile(file) {
  img = loadImage(file.data, imageView);
}

function imageView() {
  canvas.resize(img.width, img.height);
  image(img, 0, 0, width, height);
}

function inputTextPaint() {
  textSize(fontSizeEvent); // 사이즈 조절
  textAlign(CENTER, CENTER);
  textStyle(BOLDITALIC); // 스타일 지정, NORMAL, ITALIC, BOLD, BOLDITALIC 를 설정 가능
  text(inputTextEvent, mouseX, mouseY); // 폰트의 내용, 해당 마우스 위치에 그려준다.
}
