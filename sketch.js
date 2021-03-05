let img, input, button, textSizeSlider, dropdown, koFont;

function preload() {
  koFont = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/SangSangFlowerRoad.woff"
  );
}

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
  input = createFileInput(gotFile);

  input = createInput();
  button = createButton("다운로드");
  button.mousePressed(imgDownload);

  textSizeSlider = createSlider(10, 55, 30);

  dropdown = createSelect();
  // Set options
  dropdown.option("white");
  dropdown.option("orange");
  dropdown.option("green");
  dropdown.option("skyblue");
  dropdown.option("pink");
  dropdown.option("black");
}

function draw() {
  const sliderValue = textSizeSlider.value();

  if (img) {
    image(img, 0, 0, width, height);
  }

  fill(dropdown.value());
  textSize(sliderValue);
  textAlign(CENTER, CENTER);
  textFont(koFont);
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
