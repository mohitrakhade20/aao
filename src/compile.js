const path = require("path");
const fs = require("fs");
const solc = require("solc");

const aao_path = path.resolve(__dirname, "contracts", "AaoContract.sol");
const source = fs.readFileSync(aao_path, "utf8");
console.log("TEST", source);
console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[":AaoContract"];
