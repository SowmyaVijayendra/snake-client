// Stores the active TCP connection object.
let connection;
// function to handle user inputs through keyboard
const handleUserInput = function (key) {
 
  if (key === "\u0003") {
    process.exit(); // terminate the program if ctrl+C is pressed
  }
  if (key === "w" || key === "W") {
    connection.write("Move: up"); // Move up command
  }
  if (key === "a" || key === "A") {
    connection.write("Move: left");// Move left command
  }
  if (key === "s" || key === "S") {
    connection.write("Move: down");// Move down command
  }
  if (key === "d" || key === "D") {
    connection.write("Move: right");// Move right command
  }
  if (key === "z" || key === "Z") {
    connection.write("Say: I'm coming");// Say a custom message on pressing z 
  }
  if (key === "x" || key === "X") {
    connection.write("Say: sssssss");// Say a custom message on pressing x 
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
module.exports = { setupInput };
