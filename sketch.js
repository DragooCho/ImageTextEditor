let img,
  input,
  button,
  savebutton,
  textSizeSlider,
  dropdown,
  greeting,
  sizeGreeting;

function preload() {
  MaplestoryOTFBold = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff"
  );
  Cafe24Ohsquare = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff"
  );
  SDSamliphopangche_Outline = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff"
  );
  TmoneyRoundWindExtraBold = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/TmoneyRoundWindExtraBold.woff"
  );
  BMEULJIRO = loadFont(
    "https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BMEULJIRO.woff"
  );
}

function setup() {
  // Original Canvas Wallpaper
  let canvas = createCanvas(500, 500);
  canvas.id("leftSide");
  background(200);

  // Canvas Wallpaper Information
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text("먼저 이미지 파일을 드롭 또는 파일선택을 눌러", width / 2, height / 2);
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text("이미지 파일을 선택하세요.", width / 2, height / 2 + 40);
  textAlign(CENTER);
  textFont(SDSamliphopangche_Outline, 20);
  text(
    "그런 다음 아래의 옵션으로 텍스트를 조절하세요.",
    width / 2,
    height / 2 + 80
  );

  createDiv("<h1 id=rightSide>-웹툴- 이미지 텍스트 편집기</h1>");

  // Set drop handle Zone
  canvas.drop(gotFile);

  // Set flieupload button
  createDiv("<h3 id=rightSide>사용할 이미지 선택</h3>");
  input = createFileInput(gotFile);
  input.id("rightSide");

  // Set Text Input Window
  greeting = createDiv("<h3 id=rightSide>문구</h3>");
  input = createInput();
  input.id("rightSide");

  // Set TextSize Value Slider
  sizeGreeting = createDiv("<h3 id=rightSide>폰트 사이즈 30</h3>");
  textSizeSlider = createSlider(10, 70, 30);
  textSizeSlider.mouseMoved(textSizeChange);
  textSizeSlider.id("rightSide");

  // Set textColor Value options
  greeting = createDiv("<h3 id=rightSide>글씨색</h3>");
  colorDropdown = createSelect();
  colorDropdown.option("white");
  colorDropdown.option("orange");
  colorDropdown.option("green");
  colorDropdown.option("skyblue");
  colorDropdown.option("pink");
  colorDropdown.option("black");
  colorDropdown.class("colorDropdown");
  colorDropdown.id("rightSide");

  // Set textType options
  greeting = createDiv("<h3 id=rightSide>폰트 타입 선택</h3>");
  fontTypeDropdown = createSelect();
  fontTypeDropdown.option("SDSamliphopangche_Outline");
  fontTypeDropdown.option("MaplestoryOTFBold");
  fontTypeDropdown.option("Cafe24Ohsquare");
  fontTypeDropdown.option("TmoneyRoundWindExtraBold");
  fontTypeDropdown.option("BMEULJIRO");
  fontTypeDropdown.id("rightSide");

  // Set Image Download button
  greeting = createDiv(
    "<h2 id=rightSide>이 버튼을 눌러 다른 이름으로 저장</h2>"
  );
  savebutton = createButton("만들기");
  savebutton.mousePressed(imgDownload);
  savebutton.class("savebutton");
  savebutton.id("rightSide");
}

function draw() {
  const fontColorValue = colorDropdown.value();
  const fontSizeValue = textSizeSlider.value();
  const fontTypeValue = fontTypeDropdown.value();
  const inputWindowText = input.value();

  // Attach image
  if (img) {
    image(img, 0, 0, width, height);
  }

  // textpaint handler
  fill(fontColorValue);
  textAlign(CENTER, CENTER);
  textFont(fontTypeValue, fontSizeValue);
  text(inputWindowText, mouseX, mouseY);
}

function textSizeChange() {
  const sizeChange = textSizeSlider.value();
  sizeGreeting.html("폰트 사이즈 " + sizeChange);
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

function imgDownload(name) {
  saveCanvas(name, "jpg");
  console.log(fontTypeDropdown.value());
}
