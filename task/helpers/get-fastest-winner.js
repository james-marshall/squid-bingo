const getFastestWinner = (cards) => cards.reduce(
  (lowestDraw, currentCard) => (
    currentCard.drawIndex < lowestDraw.drawIndex ? currentCard : lowestDraw
  ),
);

export default getFastestWinner;
