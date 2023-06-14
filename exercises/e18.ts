// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const yearDiscovery = asteroids.map(
    (asteroid: Asteroid) => asteroid.discoveryYear
  );
  return mostAmountOfDiscovery(yearDiscovery);
  //   return yearDiscovery;
}

const mostAmountOfDiscovery = (yearsList: number[]) => {
  let hash = new Map();
  let count: number;
  let result;
  for (let i = 0; i < yearsList.length; i++) {
    if (hash.has(yearsList[i])) {
      hash.set(yearsList[i], hash.get(yearsList[i]) + 1);
    } else {
      hash.set(yearsList[i], 1);
    }

    count = 0;
    result = -1;

    hash.forEach((value, key) => {
      if (value > count) {
        count = value;
        result = key;
      }
    });
  }
  return result;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
