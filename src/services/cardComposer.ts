/**
 * API endpoint to fetch a scratchcard.
 */
export function getValues(): (0 | 10 | 100 | 1000)[] {
  const values: (0 | 10 | 100 | 1000)[] = [];

  for (let i = 0; i < 4; i++) {
    const randomNumber: number = Math.random();

    // Value  Probability
    // 0      65%
    // 10     20%
    // 100    10%
    // 1000    5%

    if (randomNumber < 0.65) {
      values.push(0);
    } else if (randomNumber < 0.85) {
      values.push(10);
    } else if (randomNumber < 0.95) {
      values.push(100);
    } else {
      values.push(1000);
    }
  }

  return values;
}
