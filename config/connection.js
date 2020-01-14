var mysql = require("mysql");
var dotenv = require("dotenv");

dotenv.config();


var connection = mysql.createConnection({
    port: process.env.DATABASE_PORT,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});



// Export connection for our ORM to use.
module.exports = connection;