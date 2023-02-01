const builtIn = {
  and: (c1, c2) => c1 && c2 ? 1 : 0,
  not: (c1) => c1 ? 0 : 1,
}

const helper = {
  nand: (c1, c2) => builtIn.not(builtIn.and(c1,c2)),
  or: (c1, c2) => nand(builtIn.not(c1),builtIn.not(c2)),
  xor: (c1, c2) => builtIn.and(builtIn.or(c1,c2),nand(c1,c2)),
}

const extra = {
  binToNum: (bin) => parseInt(bin,2),
  numToBin: (num) => num.toString(2),
}

module.exports = {
  logicGates: { builtIn, helper, },
  extra,
}
