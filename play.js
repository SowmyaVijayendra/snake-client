const {connect} = require("./client"); //Get connection object
const {setupInput} = require("./input"); // Import inputs module
console.log("Connecting ...");
let conn = connect(); // Connect to the server

setupInput(conn); // setup stdin
