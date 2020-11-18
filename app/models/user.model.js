import MySqlConnection from "./db.js";

const User = function(user){
  this.id = user.id
  this.name = user.name;
  this.email = user.email;
  this.dob = user.dob
}

User.create = (newUser, callback) => {
  new MySqlConnection("INSERT INTO USERS SET ?", newUser, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        console.log("Created User: ", { ...newUser, id: row.insertId, });
        callback(null, { ...newUser, id: row.insertId, })
    });
};

User.findById = (userId, callback) => {
  new MySqlConnection(`SELECT * FROM USERS WHERE id = ${userId} LIMIT 1;`, null, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        if(row.length){
          console.log("found user: ", row);
          callback(null, row);
          return;
        }
        //User Not Found
        callback({kind: "not_found"}, null);
    });
};

export default User;