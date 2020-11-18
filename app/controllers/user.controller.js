import User from "../models/user.model.js";
import  expressValidator  from 'express-validator';
const { body, param, validationResult } = expressValidator;

const create = (req, res) => {
  //create user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
  });

  // Save user with mysql
  User.create(user, (err, data) => {
    if(err){
      res.status(500).send({
        message:
          err.message || "some error occured while creating the user"
      });
    }
    else{
      res.send(data);
    }
  });
};

const findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if(err){
      if(err.kind === "not_found"){
        res.status(404).send({
          message: "No User found with ID: " + req.params.userId
        })
      }
      else{
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.userId
        })
      }
    }
    else{
      res.send(data);
    }
  });
}

const users = {
  create,
  findOne
}
export default users;