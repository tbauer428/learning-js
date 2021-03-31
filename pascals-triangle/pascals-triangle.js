//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  let parentArray = [];

  for (let i = 0; i < numberOfRows; i++) {
    let childArray = Math.pow(11, i).toString().split('');

    parentArray.push(childArray.map((child) => parseInt(child)));
  }

  return numberOfRows === 0 ? [] : parentArray;
};
