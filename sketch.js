let img, input, button, textSizeSlider, dropdown, greeting, sizeGreeting;

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

  createElement("h1", "-웹툴- 이미지 텍스트 편집기");

  // Set drop handle Zone
  canvas.drop(gotFile);

  // Set flieupload button
  greeting = createElement("h3", "사용할 이미지 선택");
  input = createFileInput(gotFile);

  // Set Text Input Window
  greeting = createElement("h3", "문구");
  input = createInput();

  // Set TextSize Value Slider
  sizeGreeting = createElement("h3", "폰트 사이즈 30");
  textSizeSlider = createSlider(10, 55, 30);
  textSizeSlider.mouseMoved(textSizeChange);

  // Set textColor Value options
  greeting = createElement("h3", "글씨색");
  colorDropdown = createSelect();
  colorDropdown.option("white");
  colorDropdown.option("orange");
  colorDropdown.option("green");
  colorDropdown.option("skyblue");
  colorDropdown.option("pink");
  colorDropdown.option("black");
  colorDropdown.class("colorDropdown");

  // Set textType options
  greeting = createElement("h3", "폰트 타입 선택");
  fontTypeDropdown = createSelect();
  fontTypeDropdown.option("SDSamliphopangche_Outline");
  fontTypeDropdown.option("MaplestoryOTFBold");
  fontTypeDropdown.option("Cafe24Ohsquare");
  fontTypeDropdown.option("TmoneyRoundWindExtraBold");
  fontTypeDropdown.option("BMEULJIRO");
  fontTypeDropdown.class("fontTypeDropdown");

  // Set Image Download button
  greeting = createElement("h3", "이 버튼을 눌러 다른 이름으로 저장");
  button = createButton("만들기");
  button.mousePressed(imgDownload);
}

function draw() {
  const fontColorValue = colorDropdown.value();
  const fontSizeValue = textSizeSlider.value();
  const fontTypeValue = fontTypeDropdown.value();
  const inputWindowText = input.value();

  if (img) {
    image(img, 0, 0, width, height);
  }

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

function imgDownload(neme) {
  saveCanvas(neme, "jpg");
  console.log(fontTypeDropdown.value());
}
