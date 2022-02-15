const SHA256 = require("crypto-js/sha256");
const { MerkleTree } = require("merkletreejs");

let leaves;
let root;
let tree;
let layers;
let proof;
let verified;

const sha256 = (data) => {
  return crypto.createHash("256").update(data).digest();
};

const createLeaves = () => {
  leaves = ["a", "b", "c"].map((item) => SHA256(item));
  console.log("leaves", leaves);
};

const createTree = () => {
  tree = new MerkleTree(leaves, SHA256);
  console.log("tree");
  console.log(tree);
};

const getLeaves = () => {
  leaves = tree.getLeaves();
  console.log("Leaves");
  console.log(leaves);
};

const getRoot = () => {
  root = tree.getRoot();
  console.log("root");
  console.log(root);
};

const getProof = () => {
  proof = tree.getProof(leaves[2]);
  console.log("proof");
  console.log(proof);
};

const verifyNode = () => {
  verified = tree.verify(proof, leaves[2], root);
  console.log("verified");
  console.log(verified);
};
