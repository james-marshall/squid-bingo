const getColumns = (card) => card.rows.map(
  (num, index) => card.rows.map((row) => row[index]),
);

export default getColumns;
