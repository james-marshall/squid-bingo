import getFastestWinner from './helpers/get-fastest-winner.js';
import getWinningCards from './helpers/get-winning-cards.js';

const numbersCalled = [
  7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1,
];

const partOneCards = [
  {
    rows: [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ],
    win: false,
  },
];

const partTwoCards = [
  {
    rows: [
      [22, 13, 17, 11, 0],
      [8, 2, 23, 4, 24],
      [21, 9, 14, 16, 7],
      [6, 10, 3, 18, 5],
      [1, 12, 20, 15, 19],
    ],
    win: false,
  },
  {
    rows: [
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ],
    win: false,
  },
  {
    rows: [
      [14, 21, 17, 24, 4],
      [10, 16, 15, 9, 19],
      [18, 8, 23, 26, 20],
      [22, 11, 13, 6, 5],
      [2, 0, 12, 3, 7],
    ],
    win: false,
  },
];

const partOneShowAnswer = (cards, numbers) => {
  const ele = document.getElementById('partOneAnswer');
  const winningCards = getWinningCards(cards, numbers);
  const msg = `Yes, the card will win. It completed ${winningCards[0].orientation} ${winningCards[0].orientationIndex + 1} on draw number ${winningCards[0].drawIndex + 1}.`;
  ele.innerText = msg;
};

const partTwoShowAnswer = (cards, numbers) => {
  const ele = document.getElementById('partTwoAnswer');
  const winningCards = getWinningCards(cards, numbers);
  const fastestWinner = getFastestWinner(winningCards);
  const msg = `Card ${fastestWinner.cardIndex + 1} will win first. It completed ${fastestWinner.orientation} ${fastestWinner.orientationIndex + 1} on draw number ${fastestWinner.drawIndex + 1}.`;
  ele.innerText = msg;
};

partOneShowAnswer(partOneCards, numbersCalled);
partTwoShowAnswer(partTwoCards, numbersCalled);
