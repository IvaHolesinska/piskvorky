'use strict';

let whoPlays = 'circle';

const btnElm = document.querySelector('.hra__pole');
const symbolElm = document.getElementById('symbol');

const player = (event) => {
  if (whoPlays === 'circle') {
    symbolElm.src = 'obrazky/cross.svg';
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    whoPlays = 'cross';
  } else {
    symbolElm.src = 'obrazky/circle.svg';
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    whoPlays = 'circle';
  }
};
btnElm.addEventListener('click', player);
