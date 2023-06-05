/*
  Return an array of winning cards based on the numbers called
*/

import getColumns from './get-columns.js';
import hasMatchedAllNumbers from './has-matched-all-numbers.js';
import invalidCards from './invalid-cards.js';

const getWinningCards = (cards, numbersCalled) => {
  if (invalidCards(cards)) {
    throw new Error(
      'There is an invalid card. The rows must contain 5 arrays of 5 numbers.',
    );
  }
  const winningCards = [];

  numbersCalled.forEach((currentNumber) => {
    cards.forEach((card, cardIndex) => {
      if (card.win) return;
      if (!card.cols) card.cols = getColumns(card);

      const rowMatch = hasMatchedAllNumbers(card.rows, currentNumber);
      const colMatch = hasMatchedAllNumbers(card.cols, currentNumber);
      const drawIndex = numbersCalled.indexOf(currentNumber);

      if (typeof colMatch === 'number' || typeof rowMatch === 'number') {
        const isColMatch = typeof colMatch === 'number';
        winningCards.push({
          cardIndex,
          drawIndex,
          orientation: isColMatch ? 'column' : 'row',
          orientationIndex: isColMatch ? colMatch : rowMatch,
        });
        card.win = true;
      }
    });
  });

  return winningCards;
};

export default getWinningCards;
