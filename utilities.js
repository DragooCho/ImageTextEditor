const textInput = document.getElementById("textInput");
const making = document.getElementById("making");
const fontChange = document.getElementById("fontChange");
const fontSize = document.getElementById("fontSize");

let inputTextEvent, fontSizeEvent;

textInput.addEventListener("change", function (e) {
  inputTextEvent = e.target.value;
  console.log(inputTextEvent);
});
fontSize.addEventListener("change", function (e) {
  fontSizeEvent = e.target.value;
  console.log(fontSizeEvent);
});

// fontChange.addEventListener("select", function (e) {
//   fontChangEvent = e.target.value;
//   console.log("fontChangEvent");
// });
