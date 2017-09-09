var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "raven-messages"
});


_get_users = "SELECT * FROM users"

con.connect(function(err) {
  if (err) throw err;
  con.query(_get_users, function(err, result, fields) {
    if(err) throw err;
    console.log("return: ", result);
  })
});

