# Scratch Bonanza Server

The server of [Scratch Bonanza](https://github.com/michaelkolesidis/scratch-bonanza).

## Instructions

**1.** Install the project dependencies:

```
yarn
```

**2.** Start the server:

```
yarn start
```

**3.** Start the frontend, following the instructions in the [Scratch Bonanza](https://github.com/michaelkolesidis/scratch-bonanza) repository.

## Features

The server offers a single API endpoint that returns an array of four values chosen randomly.

Given the significance of security in the online gaming industry, where safeguarding fairness and integrity is paramount, to achieve secure random number generation, the server relies on the [Crypto](https://nodejs.org/api/crypto.html#crypto) module of Node.js. It is specifically designed to utilize cryptographic algorithms and system-level entropy sources, ensuring the production of random output that is suitable for cryptographic operations and resistant to various attacks.

Since it is possible for Node.js to be built without including support for the `node:crypto` module, it is checked whether the module is available. If that is not the case, the service will fall back to using [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) for generating random numbers.

The values and the probability of occurrence are the following:

| Value | Probability |
| ----- | :---------: |
| 0     |     50%     |
| 1     |     30%     |
| 10    |     15%     |
| 100   |     4%      |
| 1000  |     1%      |

These are the probabilities of some scenarios to occur:

| Scenario            | Probability |
| ------------------- | :---------: |
| Get at least 1 coin |  39.8332%   |
| Get four 0s         |    6.25%    |
| Get four 1s         |    0.81%    |
| Get four 10s        |  0.050625%  |
| Get four 100s       |  0.000256%  |
| Get four 1000s      |  0.000001%  |

## Technologies

The core technologies of _Scratch Bonanza Server_ are Node and [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). The following libraries and tools are used:

| Name       | License | Description                                                     |
| ---------- | :-----: | --------------------------------------------------------------- |
| TypeScript |   MIT   | A strongly typed programming language that builds on JavaScript |
| Node.js    |   MIT   | Cross-platform JavaScript runtime environment.                  |
| Express    |   MIT   | Backend framework for building RESTful APIs with Node.js        |
| CORS       |   MIT   | Node.js CORS middleware                                         |

## See Also

- [Scratch Bonanza](https://github.com/michaelkolesidis/scratch-bonanza)

## License

Copyright (c) 2023 Michael Kolesidis - All Rights Reserved.

THE CONTENTS OF THIS PROJECT ARE PROPRIETARY AND CONFIDENTIAL.
UNAUTHORIZED COPYING, TRANSFERRING OR REPRODUCTION OF THE CONTENTS OF THIS PROJECT, VIA ANY MEDIUM IS STRICTLY PROHIBITED.
