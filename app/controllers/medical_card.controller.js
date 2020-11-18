import MedicalCard from "../models/medical_card.model.js";

const create = (req, res) => {
  //create medicalCard
  const medicalCard = new MedicalCard({
    recId : req.body.recId,
    issuer : req.body.issuer,
    state : req.body.state,
    expirationDate : req.body.expirationDate,
    imagePath : req.body.imagePath,
    user : req.body.user,
  });

  // Save Medical Card with mysql
  MedicalCard.create(medicalCard, (err, data) => {
    if(err){
      if(err.code === 'ER_NO_REFERENCED_ROW_2'){
        res.status(404).send({
          message: "No User Exists With Selected ID"
        })
      }
      res.status(500).send({
        message:
          err.message || "some error occured while creating the Medical Card"
      });
    }
    else{
      res.send(data);
    }
  });
};

const findOne = (req, res) => {
  MedicalCard.findById(req.params.medicalCardId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Medical Card found with ID: " + req.params.medicalCardId
        })
      }
      else if(err.kind === "expired"){
        res.status(403).send({
          message: "expired"
        });
      }
      else{
        res.status(500).send({
          message: "Error retrieving Medical Card with id " + req.params.medicalCardId
        })
      }
    }
    else{
      res.send(data);
    }
  });
};

const findOneByUserId = (req, res) => {
  MedicalCard.findByUserId(req.params.userId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Medical Card found with User ID: " + req.params.userId
        })
      }
      else if(err.kind === "expired"){
        res.status(403).send({
          message: "expired"
        });
      }
      else{
        res.status(500).send({
          message: "Error retrieving Medical Card with User id " + req.params.userId
        })
      }
    }
    else{
      res.send(data);
    }
  });
};

const update = (req, res) => {
  if(!req.body){
    res.status(400).send({
      message: "Medical Card is empty"
    });
  }
  const medicalCard = new MedicalCard(req.body);
  MedicalCard.update(medicalCard, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Medical Card found with ID: " + medicalCard.id
        })
      }
      else{
        res.status(500).send({
          message: "Error updating Medical Card with id " + medicalCard.id
        })
      }
    }
    else{
      res.send(data);
    }
  });
};

const deleteById = (req, res) => {
  MedicalCard.remove(req.params.medicalCardId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Medical Card found with ID: " + req.params.medicalCardId
        });
      }
      else{
        res.status(500).send({
          message: "Could not delete Medical Card with id " + req.params.medicalCardId
        });
      }
    }
    else{
      res.send({message: "Medical Card successfully deleted!"});
    }
  });
};

const medicalCards = {
  create,
  findOne,
  findOneByUserId,
  update,
  deleteById,
};
export default medicalCards;