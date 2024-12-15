var outputEl = document.querySelector('#name-output');
var onInput = function (ev) {
  var newValue = ev.target.value.trim(' ');
  outputEl.textContent = newValue || 'Anonymous';
};
var inputEl = document.querySelector('#name-input');
inputEl.addEventListener('input', onInput);
