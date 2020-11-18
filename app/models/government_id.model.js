import MySqlConnection from "./db.js";

const GovernmentId = function(governmentId){
  this.id = governmentId.id
  this.govId = governmentId.govId;
  this.state = governmentId.state;
  this.expirationDate = governmentId.expirationDate;
  this.imagePath = governmentId.imagePath;
  this.user = governmentId.user;
}

GovernmentId.create = (newGovernmentId, callback) => {
  new MySqlConnection("REPLACE INTO GOVERNMENT_IDS SET ?", newGovernmentId, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        console.log("Created GovernmentId: ", {id: row.insertId, ...newGovernmentId});
        callback(null, {...newGovernmentId, id: row.insertId,})
    });
};

GovernmentId.findById = (governmentIdNumber, callback) => {
  new MySqlConnection(`SELECT * FROM GOVERNMENT_IDS WHERE id = ${governmentIdNumber} LIMIT 1;`, null, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        if(row.length){
          if(new Date(row[0].expirationDate) < new Date()){
            console.log("ID has expired");
            callback({kind: "expired"});
            return;
          }
          console.log("found government id: ", row);
          callback(null, row);
          return;
        }
        //GovernmentId Not Found
        callback({kind: "not_found"}, null);
    });
};

GovernmentId.findByUserId = (userId, callback) => {
  new MySqlConnection(`SELECT * FROM GOVERNMENT_IDS WHERE id = ${userId} LIMIT 1;`, null, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        if(row.length){
          if(new Date(row[0].expirationDate) < new Date()){
            console.log("ID has expired");
            callback({kind: "expired"});
            return;
          }
          console.log("found government id: ", row);
          callback(null, row);
          return;
        }
        //GovernmentId Not Found
        callback({kind: "not_found"}, null);
    });
};

GovernmentId.findByUserId = (userId, callback) => {
  new MySqlConnection(`SELECT * FROM GOVERNMENT_IDS WHERE user = ${userId} LIMIT 1;`, null, (err, row) => {
        if (err){ 
          console.log(err);
          callback(err, null);
          return;
        }
        if(row.length){
          console.log("found government id: ", row);
          callback(null, row);
          return;
        }
        //GovernmentId Not Found
        callback({kind: "not_found"}, null);
    });
};

GovernmentId.update = ( governmentId, callback ) => {
  new MySqlConnection(
    `UPDATE GOVERNMENT_IDS SET govId = ?, state = ?, expirationDate = ?, imagePath = ?, user = ? WHERE id = ${governmentId.id}`, 
    [ governmentId.govId, governmentId.state, governmentId.expirationDate, governmentId.imagePath, governmentId.user ], 
    (err, row) => {
      if (err){ 
        console.log(err);
        callback(err, null);
        return;
      }
      if(row.affectedRows == 0){
        callback({kind: "not_found"}, null);
        return;
      }
      console.log("Updated Government Id: ", governmentId);
      callback(null, governmentId);
  });
}

GovernmentId.remove = ( governmentIdNumber, callback ) => {
  new MySqlConnection(`DELETE FROM GOVERNMENT_IDS WHERE id = ${governmentIdNumber};`, (err, row) => {
    if (err){ 
      console.log(err);
      callback(err, null);
      return;
    }
    if(row.affectedRows == 0){
      callback({kind: "not_found"}, null);
      return;
    }
    console.log("Deleted government ID with ID ", governmentIdNumber);
    callback(null, row);
  });
};

export default GovernmentId;