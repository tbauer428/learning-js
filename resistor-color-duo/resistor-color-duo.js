//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  let resistor_total = '';

  for (let i = 0; i < colors.length; i++) {
    if (i >= 2) {
      break;
    }
    resistor_total = resistor_total + '' + COLORS.indexOf(colors[i]);
  }

  return parseInt(resistor_total);
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
