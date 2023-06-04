import getColumns from './get-columns.js';
import hasMatchedAllNumbers from './has-matched-all-numbers.js';
import invalidCards from './invalid-cards.js';

const getWinningCards = (cards, calledNumbers) => {
  if (invalidCards(cards)) {
    throw new Error(
      'There is an invalid card. The rows must contain 5 arrays of 5 numbers.',
    );
  }
  const winningCards = [];

  calledNumbers.forEach((currentNumber) => {
    cards.forEach((card, cardIndex) => {
      if (card.win) return;
      if (!card.cols) card.cols = getColumns(card);

      const rowMatch = hasMatchedAllNumbers(card.rows, currentNumber);
      const colMatch = hasMatchedAllNumbers(card.cols, currentNumber);
      const drawIndex = calledNumbers.indexOf(currentNumber);

      if (typeof colMatch === 'number' || typeof rowMatch === 'number') {
        winningCards.push({
          cardIndex,
          drawIndex,
          orientation: colMatch ? 'column' : 'row',
          orientationIndex: colMatch || rowMatch,
        });
        card.win = true;
      }
    });
  });

  return winningCards;
};

export default getWinningCards;
