import GovernmentId from "../models/government_id.model.js";

const create = (req, res) => {
  //create governmentid
  const governmentId = new GovernmentId({
    govId : req.body.govId,
    issuer : req.body.issuer,
    state : req.body.state,
    expirationDate : req.body.expirationDate,
    imagePath : req.body.imagePath,
    user : req.body.user,
  });

  // Save Government ID with mysql
  GovernmentId.create(governmentId, (err, data) => {
    if(err){
      res.status(500).send({
        message:
          err.message || "some error occured while creating the Government ID"
      });
    }
    else{
      res.send(data);
    }
  });
};

const findOne = (req, res) => {
  GovernmentId.findById(req.params.governmentIdNumber, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Government Id found with ID: " + req.params.governmentIdNumber
        });
      }
      else if(err.kind === "expired"){
        res.status(403).send({
          message: "expired"
        });
      }
      else{
        res.status(500).send({
          message: "Error retrieving Government ID with id " + req.params.governmentIdNumber
        });
      }
    }
    else{
      res.send(data);
    }
  });
}

const findOneByUserId = (req, res) => {
  GovernmentId.findByUserId(req.params.userId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Government Id found with User ID: " + req.params.userId
        });
      }
      else if(err.kind === "expired"){
        res.status(403).send({
          message: "expired"
        });
      }
      else{
        res.status(500).send({
          message: "Error retrieving Government ID with User ID " + req.params.userId
        });
      }
    }
    else{
      res.send(data);
    }
  });
}

const update = (req, res) => {
  const governmentId = new GovernmentId(req.body);
  GovernmentId.update(governmentId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Government ID found with ID: " + governmentId.id
        })
      }
      else{
        res.status(500).send({
          message: "Error updating Government ID with id " + governmentId.id
        })
      }
    }
    else{
      res.send(data);
    }
  });
};

const deleteById = (req, res) => {
  GovernmentId.remove(req.params.governmentIdNumber, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No Government ID found with ID: " + req.params.governmentIdNumber
        });
      }
      else{
        res.status(500).send({
          message: "Could not delete Government ID with id " + req.params.governmentIdNumber
        });
      }
    }
    else{
      res.send({message: "Government ID successfully deleted!"});
    }
  });
};


const governmentIds = {
  create,
  findOne,
  findOneByUserId,
  update,
  deleteById,
}
export default governmentIds;