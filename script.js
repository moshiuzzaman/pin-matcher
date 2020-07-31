const generatePinResult = document.getElementById("generatePinResult");
const generatePinBtn = document.getElementById("generatePinBtn");

generatePinBtn.addEventListener("click", function () {
  let randomNum = Math.round(Math.random() * 10000);
  if (randomNum < 1000) {
    randomNum = randomNum + 1234;
  }
  generatePinResult.value = randomNum;
});

const submitPin = document.getElementById("submitPin");
function pinKey(key) {
  submitPin.value += key;
}

function backSpeech() {
  const pin = submitPin.value;
  submitPin.value = pin.slice(0, pin.length - 1);
}
function clearAll() {
  submitPin.value = "";
}
const tryCount = document.getElementById("tryCount");
const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function () {
  var tryCountInt = parseInt(tryCount.innerText);

  if (generatePinResult.value == submitPin.value) {
    document.getElementById("pin-match").style.display = "block";
    document.getElementById("pin-not-match").style.display = "none";
    submitPin.style.backgroundColor = "green";
  } else {
    document.getElementById("pin-not-match").style.display = "block";
    document.getElementById("pin-match").style.display = "none";
    submitPin.style.backgroundColor = "red";
    tryCount.innerText = tryCountInt - 1;
    tryCount.innerText = tryCount.innerText;

    if (tryCount.innerText == 0) {
      submitBtn.setAttribute("disabled", true);
      submitBtn.classList.add('disableBtn')
    }
  }
});
