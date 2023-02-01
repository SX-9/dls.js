# Digital Logic Simulator
A Collection Of Functions That Act Like Logic Gates.

## Usage
```js
const { logicGates, extra } = require('dls.js');

// Inputs And Outputs
let bin1 = 1;
let bin2 = 0;

// builtIn Gates
let out1 = logicGates.builtIn.and(bin1, bin2);
let out2 = logicGates.builtIn.not(bin1);

// helper Gates
let helper = logicGates.helper;

// extra Functions
let number = extra.binToNum('1010'); // 10
let binary = extra.numToBin('10'); // 1010

console.log(out1, out2); // 0 0
```
