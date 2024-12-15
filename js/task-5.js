function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

var btnEl = document.querySelector('button.change-color');
var spanEl = document.querySelector('span.color');
btnEl.addEventListener('click', () => {
  var color = getRandomHexColor();
  spanEl.textContent = color;
  document.body.setAttribute('style', `background-color: ${color}`);
});
