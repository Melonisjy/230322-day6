let blockchainScore = 120;
let frontendScore = 20;

let totalScore = blockchainScore + frontendScore;

if (totalScore > 78) {
  console.log("Great🫡");
} else if (totalScore > 50) {
  console.log("Good");
} else if (totalScore > 30) {
  console.log("Try harder");
} else {
  console.log("뭐함");
}
