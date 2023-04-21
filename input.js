// Stores the active TCP connection object.
let connection;
// function to handle user inputs through keyboard
const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit(); // terminate the program if ctrl+C is pressed
  }
  if(key === "w" || key === "W"){
    connection.write("Move: up");
  }
  if(key === "a" ||key === "A"){
    connection.write("Move: left");
  }
  if(key === "s" ||key === "S"){
    connection.write("Move: down");
  }
  if(key === "d" ||key === "D"){
    connection.write("Move: right");
  }
  
};
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports= {setupInput};