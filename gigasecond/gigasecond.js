//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const oneGigasecond = 1000000000;
  const gigasecondInMilliseconds = oneGigasecond * 1000;
  let datePlusGigasecond = new Date(date.getTime() + gigasecondInMilliseconds);
  return datePlusGigasecond;
};
