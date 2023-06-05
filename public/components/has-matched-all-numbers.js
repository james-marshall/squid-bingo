/*
  Return the index of a column/row if all numbers in that column/row
  have been matched
*/

const hasMatchedAllNumbers = (orientation, number) => {
  for (let i = 0; i < orientation.length; i += 1) {
    orientation[i] = orientation[i].filter((item) => item !== number);
    if (!orientation[i].length) {
      return i;
    }
  }
  return false;
};

export default hasMatchedAllNumbers;
