//MySQL connection.
var mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  var connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
// };

// our connection
connection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

//export connection
module.exports = connection;