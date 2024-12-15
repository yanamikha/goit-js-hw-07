function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return;
  }

  destroyBoxes();
  var width, height, step, result;
  width = height = 30;
  step = 10;
  result = [];
  for (var i = 0; i < amount; i++) {
    var div = document.createElement('div');
    var transformation = i * step;
    div.style.width = width + transformation + 'px';
    div.style.height = height + transformation + 'px';
    div.style.backgroundColor = getRandomHexColor();
    result.push(div);
  }
  box.prepend(...result);
}

function destroyBoxes() {
  box.innerHTML = '';
  inputEl.value = '';
}

function onCreateClick(event) {
  var amount = inputEl.value;
  createBoxes(amount);
}

var box = document.querySelector('#boxes');
var createBtn = document.querySelector('button[data-create]');
var destroyBtn = document.querySelector('button[data-destroy]');
var inputEl = document.querySelector('input');
createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', destroyBoxes);
