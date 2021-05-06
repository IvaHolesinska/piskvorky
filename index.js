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

// vypsat kolečko/křížek

const getSymbol = (field) => {
  if (field.target.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.target.classList.contains('board__field--circle')) {
    return 'circle';
  }
  return undefined;
};

//  vrátit prvek pro číslo řádku a sloupce

const boardSize = 10;
const fields = document.querySelectorAll('.policko');
const getField = (row, column) => {
  fields[row * boardSize + column];
};

// vrátit objekt s číslem řádku a sloupce

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

// vítěz?

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  //      ------ řádek  -------
  let inRow = 1;
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }
  //      ------ sloupec  -------
  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
