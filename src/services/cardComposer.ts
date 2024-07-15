// Check if the "crypto" module is available
let crypto: any;

try {
  crypto = require("node:crypto");
} catch (err) {
  console.error(
    "WARNING: crypto support is disabled and Math.random() will be used instead!"
  );
}

/*
 * API endpoint to fetch a scratchcard.
 *
 * Generates an array of values for the scratchcard.
 * Each value represents the reward amount for a specific scratch area.
 */
export function getValues(): (0 | 1 | 10 | 100 | 1000)[] {
  // Array to store the generated values
  const values: (0 | 1 | 10 | 100 | 1000)[] = [];

  // Generate values for each position on the scratchcard
  for (let i = 0; i < 4; i++) {
    let randomNumber: number;

    // Use crypto library for random number generation if available
    if (crypto && crypto.randomBytes) {
      const randomBytes = crypto.randomBytes(4);
      randomNumber = randomBytes.readUInt32BE(0) / Math.pow(2, 32);
    } else {
      // Fallback to Math.random() if crypto support is disabled
      randomNumber = Math.random();
    }

    // Value  Probability
    // 0      50%   0.5
    // 1      30%   0.3
    // 10     15%   0.15
    // 100     4%   0.04
    // 1000    1%   0.01

    // Assign a reward value based on the generated random number
    if (randomNumber < 0.5) {
      values.push(0);
    } else if (randomNumber < 0.8) {
      values.push(1);
    } else if (randomNumber < 0.95) {
      values.push(10);
    } else if (randomNumber < 0.99) {
      values.push(100);
    } else {
      values.push(1000);
    }
  }

  return values;
}
