import getWinningCards from '../public/components/get-winning-cards.js';

describe('Get winning cards', () => {
  it('should return an array of winning card objects', () => {
    const calledNumbers = [1, 2, 3, 4, 5];

    const cards = [
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
        win: false,
      },
      {
        rows: [
          [1, 6, 11, 16, 21],
          [2, 7, 12, 17, 22],
          [3, 8, 13, 18, 23],
          [4, 9, 14, 19, 24],
          [5, 10, 15, 20, 25],
        ],
        win: false,
      },
    ];

    const expectedWinningCards = [
      {
        cardIndex: 0,
        drawIndex: 4,
        orientation: 'row',
        orientationIndex: 0,
      },
      {
        cardIndex: 1,
        drawIndex: 4,
        orientation: 'column',
        orientationIndex: 0,
      },
    ];

    const winningCards = getWinningCards(cards, calledNumbers);
    expect(winningCards).toEqual(expectedWinningCards);
  });
});
