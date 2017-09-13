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
    this.ex_query(_qry);
  }

  add_user(userName, password, email) {
    let _qry = "INSERT INTO users (username, password, email, created_at," +
               `updated_at) values ('${userName}', '${password}', '${email}'` +
               ", now(), now())";
    this.ex_query(_qry);
  }

  save_message(userID, msgText, to_lat=-999, to_lng=-999, from_lat=-999, 
               from_lng=-999) {

    let qry1 = "INSERT INTO messages (text, user_id, created_at, updated_at)" +
               `values ('${msgText}', '${userID}', now(), now())`;
    
    let qry2 = "INSERT INTO messages (text, user_id, to_lat, to_lng," +
               " from_lat, from_lng, created_at, updated_at)" +
               `values ('${msgText}', '${userID}', '${to_lat}', '${to_lng}',` +
               ` '${from_lat}', '${from_lng}', now(), now())`;
    
    let t = this;
    if(t.valid_coords(to_lat, to_lng) && t.valid_coords(from_lat, from_lng)){
      t.ex_query(qry2);
    }
    else {
      t.ex_query(qry1);
    }
  }

  valid_coords(lat, lng) {
    if(lat > -91 && lat < 91 && lng > -181 && lng < 181) {
      return true;
    }
    else {
      return false;
    }
  }

}

connx = new SQL_Connection()
//connx.select_all("users")
//connx.save_message(1, "second message");
connx.save_message(1, "with gps", 47.768533, -122.389399, 29.997077, -95.616340)

//connx.add_user("steven", "password", "steven@mail.com")

