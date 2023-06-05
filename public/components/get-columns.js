/*
  Return an array of column numbers from an array of row numbers
*/

const getColumns = (card) => card.rows.map(
  (num, index) => card.rows.map((row) => row[index]),
);

export default getColumns;
