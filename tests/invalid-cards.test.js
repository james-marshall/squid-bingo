import invalidCards from '../public/components/invalid-cards.js';

describe('invalidCards', () => {
  it('should return true if any card does not have 5 rows', () => {
    const cards = [
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      },
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
        ],
      },
    ];

    expect(invalidCards(cards)).toBe(true);
  });

  it('should return true if any card row does not have 5 numbers', () => {
    const cards = [
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      },
      {
        rows: [
          [1],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      },
    ];

    expect(invalidCards(cards)).toBe(true);
  });

  it('should return false if all cards have 5 rows containing 5 numbers', () => {
    const cards = [
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      },
      {
        rows: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15],
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25],
        ],
      },
    ];

    expect(invalidCards(cards)).toBe(false);
  });
});
