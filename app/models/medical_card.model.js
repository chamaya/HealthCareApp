import MySqlConnection from "./db.js";

const MedicalCard = function(medicalCard){
  this.id = medicalCard.id,
  this.recId = medicalCard.recId;
  this.issuer = medicalCard.issuer;
  this.state = medicalCard.state;
  this.expirationDate = medicalCard.expirationDate;
  this.imagePath = medicalCard.imagePath;
  this.user = medicalCard.user;
}

MedicalCard.create = (newMedicalCard, callback) => {
  new MySqlConnection("REPLACE INTO MEDICAL_CARDS SET ?", newMedicalCard, (err, row) => {
    if (err){ 
      console.log(err);
      callback(err, null);
      return;
    }
    console.log("Created Medical Card: ",{ ...newMedicalCard, id: row.insertId, });
    callback(null, { ...newMedicalCard, id: row.insertId, });
  });
};

MedicalCard.findById = ( medicalCardId, callback) => {
  new MySqlConnection(`SELECT * FROM MEDICAL_CARDS WHERE id = ${medicalCardId} LIMIT 1;`, null, (err, row) => {
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
      console.log("found medical card: ", row);
      callback(null, row);
      return;
    }
    //Medical Card Not Found
    callback({kind: "not_found"}, null);
  });
};

MedicalCard.findByUserId = ( userId, callback) => {
  new MySqlConnection(`SELECT * FROM MEDICAL_CARDS WHERE user = ${ userId } LIMIT 1;`, null, (err, row) => {
    if (err){ 
      console.log(err);
      callback(err, null);
      return;
    }
    if(row.length){
      console.log("found medical card: ", row);
      callback(null, row);
      return;
    }
    //User Not Found
    callback({kind: "not_found"}, null);
  });
};

MedicalCard.update = ( medicalCard, callback ) => {
  new MySqlConnection(
  `UPDATE MEDICAL_CARDS SET recId = ?, issuer = ?, state = ?, expirationDate = ?, imagePath = ?, user = ? WHERE id = ${medicalCard.id}`, 
  [ medicalCard.recId, medicalCard.issuer, medicalCard.state, medicalCard.expirationDate, medicalCard.imagePath, medicalCard.user ], 
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
    console.log("Updated Medical Card: ", medicalCard);
    callback(null, medicalCard);
  });
};

MedicalCard.remove = ( medicalCardId, callback ) => {
  new MySqlConnection(`DELETE FROM MEDICAL_CARDS WHERE id = ${medicalCardId};`, (err, row) => {
    if (err){ 
      console.log(err);
      callback(err, null);
      return;
    }
    if(row.affectedRows == 0){
      callback({kind: "not_found"}, null);
      return;
    }
    console.log("Deleted Medical Card with ID ", medicalCardId);
    callback(null, row);
  });
};

export default MedicalCard;