/*
  Return true if any cards in the game do not have 5 rows each with 5 numbers
*/

const invalidCards = (cards) => cards.some((card) => card.rows.length !== 5
  || card.rows.some((row) => row.length !== 5));

export default invalidCards;
