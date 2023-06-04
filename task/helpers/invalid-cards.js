const invalidCards = (cards) => cards.some((card) => card.rows.length !== 5
  || card.rows.some((row) => row.length !== 5));

export default invalidCards;
