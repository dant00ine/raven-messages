const mysql = require('mysql');

class SQL_Connection {
  constructor(){
    this.con = this.get_connection()
  }

  get_connection() { 
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "raven-messages"
    })
    connection.connect(function(err) 
      {if (err) throw err;})
    return connection;
  }

  ex_query(_qry){
    this.con.query(_qry, function(err, result, fields) {
      if(err) throw err;
      console.log("return: ", result);
    })
  }

  select_all(table) {
    let _qry = "SELECT * FROM " + table;
    ex_query(_qry);
  }

  add_user(userName, password, email) {
    let _qry = "INSERT INTO users (username, password, email, created_at," +
               `updated_at) values ('${userName}', '${password}', '${email}'` +
               ", now(), now())";
    ex_query(_qry);
  }

  save_message(userID, msgText) {
    let _qry = "INSERT INTO messages (text, user_id, created_at, updated_at)" +
               `values ('${msgText}', '${userID}', now(), now())`;
    ex_query(_qry);
  }

}

connx = new SQL_Connection()
connx.select_all("users")
//connx.add_user("steven", "password", "steven@mail.com")

