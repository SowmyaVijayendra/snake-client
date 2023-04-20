const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SMV");
    /* 
  let delay = 0;    
  for (let i=0;i<5;i++) {
    interval= setTimeout(() => {
      conn.write("Move: up");     
    }, delay += 1000); // <= 1s delay to make it noticeable. Can dial it down later.
  } 
 */
    /*let i = 0;
    const interval = setInterval(() => {
      conn.write("Move: up");
      i++;
      if (i == 5) clearInterval(interval);
    }, 1000);
    */
  });
  // handling data received from the server
  conn.on("data", (data) => {
    console.log("Server says: " + data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
module.exports = connect;
