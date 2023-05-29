/**
 * API endpoint to fetch a scratchcard.
 */
let crypto: any;

try {
  crypto = require("node:crypto");
} catch (err) {
  console.error(
    "WARNING: crypto support is disabled and Math.random() will be used instead!"
  );
}

export function getValues(): (0 | 1 | 10 | 100 | 1000)[] {
  const values: (0 | 1 | 10 | 100 | 1000)[] = [];

  for (let i = 0; i < 4; i++) {
    let randomNumber: number;

    if (crypto && crypto.randomBytes) {
      const randomBytes = crypto.randomBytes(4);
      randomNumber = randomBytes.readUInt32BE(0) / Math.pow(2, 32);
    } else {
      randomNumber = Math.random();
    }

    // Value  Probability
    // 0      50%
    // 1      30%
    // 10     15%
    // 100     4%
    // 1000    1%

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
