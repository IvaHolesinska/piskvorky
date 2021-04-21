'use strict';

console.log('funguju');

let whoPlays = 'circle';

const player = (event) => {
  event.target.classList.add('board__field--circle');
};
document.querySelector('.hra__pole').addEventListener('click', player);

// const player = (event) => {
//   event.target.classList.add('board__field--cross');
// };
// document.querySelector('.hra__pole').addEventListener('click', player);
