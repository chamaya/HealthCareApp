import users from "../controllers/user.controller.js";
import validationMiddleware from '../validation/vaildationmiddleware.js'
import validate from '../validation/user.validation.js';

const userRoutes = (app) => {
  //create a user
  app.post("/api/users", validate('create'), validationMiddleware,  users.create);
  //Find a single User with the corresponding ID
  app.get("/api/users/:userId", validate('findOne'), validationMiddleware, users.findOne)
};

export default userRoutes;