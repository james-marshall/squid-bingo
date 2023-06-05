import hasMatchedAllNumbers from '../public/components/has-matched-all-numbers.js';

describe('hasMatchedAllNumbers', () => {
  it('should return the column/row index if all numbers are matched', () => {
    const rows = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11], // rows[2]
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];

    const numberDrawn = 11;
    const rowMatch = hasMatchedAllNumbers(rows, numberDrawn);

    expect(rowMatch).toEqual(2);
  });

  it('should return false if not all numbers in column/row are matched', () => {
    const columns = [
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [5, 10, 15, 20, 25],
    ];

    const numberDrawn = 11;
    const colMatch = hasMatchedAllNumbers(columns, numberDrawn);
    expect(colMatch).toBe(false);
  });
});
