// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";
import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const yearDiscovery = asteroids.map((asteroid) => asteroid.discoveryYear);
  const yearMap = buildYearMap(yearDiscovery);
  return maxBy([...yearMap.entries()], ([year, count]) => count)?.[0];
}

const buildYearMap = (yearList: number[]) => {
  let yearMap = new Map<number, number>();
  for (let year of yearList) {
    yearMap.set(year, (yearMap.get(year) || 0) + 1);
  }

  return yearMap;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
