/*
  Return the object with the lowest drawIndex property from an array of objects
*/

const getFastestWinner = (cards) => cards.reduce(
  (lowestDraw, currentCard) => (
    currentCard.drawIndex < lowestDraw.drawIndex ? currentCard : lowestDraw
  ),
);

export default getFastestWinner;
