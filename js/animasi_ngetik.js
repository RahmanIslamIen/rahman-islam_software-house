const textToType =
  "peyedia jasa layanan koding terpercaya dan terbaik di kelas nya !";

const typingDelay = 50;
const typingElement = document.getElementById("animasi-ketikan");
let charIndex = 0;

function typeText() {
  if (charIndex < textToType.length) {
    typingElement.textContent += textToType.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingDelay);
  }
}

window.onload = function () {
  typeText();
};
