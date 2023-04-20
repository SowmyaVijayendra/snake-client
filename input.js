// function to handle user inputs through keyboard
const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit(); // terminate the program if ctrl+C is pressed
  }
};
// setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports= {setupInput};