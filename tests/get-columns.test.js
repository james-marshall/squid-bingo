import getColumns from '../public/components/get-columns.js';

describe('getColumns', () => {
  it('should return an array of columns for a given card', () => {
    const card = {
      rows: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ],
    };

    const expectedColumns = [
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [5, 10, 15, 20, 25],
    ];

    expect(getColumns(card)).toEqual(expectedColumns);
  });
});
