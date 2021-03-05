let img, input, button;

function setup() {
  let c = createCanvas(500, 500);
  background(200);
  textAlign(CENTER);
  text(
    "이미지 파일을 먼저 가지고 오십시오.그런 다음 원하는 위치에 마우스를 클릭하세요.",
    width / 2,
    height / 2
  );

  c.drop(gotFile);

  input = createInput();
  button = createButton("다운로드");
  button.mousePressed(imgDownload);
}

function draw() {
  if (img) {
    image(img, 0, 0, width, height);
  }

  textSize(32);
  textAlign(CENTER, CENTER);
  textStyle(ITALIC);
  text(input.value(), mouseX, mouseY);
}

function gotFile(file) {
  img = createImg(file.data, "").hide();
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function imgDownload(can) {
  saveCanvas(can, "jpg");
}
