const net = require("net");
const { IP, PORT } = require("./constants"); // import config details
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });
  conn.on("connect", () => { // On connection to the server, console a success message
    console.log("Successfully connected to game server");
    conn.write("Name: SMV"); // Sending name info to the server
  });
  // handling data received from the server
  conn.on("data", (data) => {
    console.log("Server says: " + data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = { connect };
