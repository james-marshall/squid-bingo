import getFastestWinner from '../public/components/get-fastest-winner.js';

describe('getFastestWinner', () => {
  it('returns the card with the lowest drawIndex', () => {
    const winningCards = [
      { drawIndex: 3 },
      { drawIndex: 2 },
      { drawIndex: 1 },
    ];

    const fastestWinner = getFastestWinner(winningCards);

    expect(fastestWinner).toEqual({ drawIndex: 1 });
  });
});
