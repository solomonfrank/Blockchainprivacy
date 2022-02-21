const sha256 = require("js-sha256");

const content = "I have 50Btc in address hhshhsh678788";
const hashValue = sha256(content);
console.log("hashValue", hashValue);
