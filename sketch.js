let img,
  input,
  button,
  savebutton,
  textSizeSlider,
  dropdown,
  greeting,
  bigTitleGreeting,
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
  background(300);

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

  // Set Big Title
  bigTitleGreeting = createDiv(
    "<h1 id=rightSide>-웹툴- 이미지 텍스트 편집기</h1>"
  );
  bigTitleGreeting.class("bigTitle");

  // Set drop handle Zone
  canvas.drop(gotFile);

  // Set flieupload button
  middleTitleGreeting = createDiv("<h3 id=rightSide>사용할 이미지 선택</h3>");
  middleTitleGreeting.class("middleTitle");
  input = createFileInput(gotFile);
  input.class("imageUploadButton");

  // Set Text Input Window
  middleTitleGreeting = createDiv("<h3 id=rightSide>문구</h3>");
  middleTitleGreeting.class("middleTitlePhrases");
  input = createInput();

  // Set TextSize Value Slider
  sizeGreeting = createDiv("<h3 id=rightSide>폰트 사이즈 30</h3>");
  sizeGreeting.class("fontSizeHandle");
  textSizeSlider = createSlider(10, 70, 30);
  textSizeSlider.class("textSizeSlider");
  textSizeSlider.mouseMoved(textSizeChange);

  // Set textColor Value options
  greeting = createDiv("<h3 id=rightSide>글씨색</h3>");
  greeting.class("midTitleColor");
  colorDropdown = createSelect();
  colorDropdown.option("black");
  colorDropdown.option("white");
  colorDropdown.option("orange");
  colorDropdown.option("green");
  colorDropdown.option("skyblue");
  colorDropdown.option("pink");
  colorDropdown.class("colorDropdown");

  // Set textType options
  greeting = createDiv("<h3 id=rightSide>폰트 타입 선택</h3>");
  greeting.class("midTitleFontType");
  fontTypeDropdown = createSelect();
  fontTypeDropdown.option("SDSamliphopangche_Outline");
  fontTypeDropdown.option("MaplestoryOTFBold");
  fontTypeDropdown.option("Cafe24Ohsquare");
  fontTypeDropdown.option("TmoneyRoundWindExtraBold");
  fontTypeDropdown.option("BMEULJIRO");

  // Set Image Download button
  greeting = createDiv(
    "<h2 id=rightSide>이 버튼을 눌러 다른 이름으로 저장</h2>"
  );
  greeting.class("middleTitleSaveAs");
  savebutton = createButton("만들기");
  savebutton.mousePressed(imgDownload);
  // savebutton = textFont(SDSamliphopangche_Outline);
  savebutton.class("savebutton");
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
  loop();
}

function mousePressed() {
  if (mouseX < 500 && mouseX > 0 && mouseY < 500 && mouseY > 500) {
    console.log("click");
    loop();
  }
}
function mouseReleased() {
  noLoop();
}

function imgDownload(name) {
  saveCanvas(name, "png");
}
