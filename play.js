const {connect} = require("./client"); //Get connection object
const {setupInput} = require("./input");
console.log("Connecting ...");
connect(); // Connect to the server

setupInput(); // setup stdin
