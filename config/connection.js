
// Requiring mysql package
var mysql = require("mysql");

// Setting up our connection information
var source = {
  localhost: {
    host     : '127.0.0.1',
    port     :  3306,
    user     : 'root',
    password : 'Cabbage385', // Add your password
    database : 'burgers_db' // Add your database
  }
};


// Creating our connection
var connection = mysql.createConnection(source.localhost);


// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
