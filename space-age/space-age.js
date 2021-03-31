//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const EARTH_YEAR_IN_SECONDS = 31557600;

const PLANETS = [
  {
    name: 'mercury',
    orbitalPeriod: 0.2408467,
  },
  {
    name: 'venus',
    orbitalPeriod: 0.61519726,
  },
  {
    name: 'earth',
    orbitalPeriod: 1.0,
  },
  {
    name: 'mars',
    orbitalPeriod: 1.8808158,
  },
  {
    name: 'jupiter',
    orbitalPeriod: 11.862615,
  },
  {
    name: 'saturn',
    orbitalPeriod: 29.447498,
  },
  {
    name: 'uranus',
    orbitalPeriod: 84.016846,
  },
  {
    name: 'neptune',
    orbitalPeriod: 164.79132,
  },
];

export const age = (name, seconds) => {
  let planet = PLANETS.find((planet) => {
    return name === planet.name;
  });
  let earthYears = seconds / (planet.orbitalPeriod * EARTH_YEAR_IN_SECONDS);
  return parseFloat(earthYears.toFixed(2));
};
