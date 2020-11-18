import governmentId from "../controllers/government_id.controller.js";
import validationMiddleware from '../validation/vaildationmiddleware.js'
import validate from '../validation/government_id.validation.js';

const governmentIdRoutes = (app) => {
  //create a user
  app.post("/api/governmentid/", validate('create'), validationMiddleware, governmentId.create);
  //Find a single User with the corresponding ID
  app.get("/api/governmentid/:governmentIdNumber/", validate('findOne'), validationMiddleware, governmentId.findOne)
  //Find a single User with the corresponding User ID
  app.get("/api/governmentid/user/:userId/", validate('findOneByUserId'), validationMiddleware, governmentId.findOneByUserId)
  //Update a single Government ID with the corresponding ID
  app.put("/api/governmentid/", validate('update'), validationMiddleware, governmentId.update);
  //Delete a single Government ID with the corresponding ID
  app.delete("/api/governmentid/:governmentIdNumber/", validate('deleteById'), validationMiddleware, governmentId.deleteById);
};

export default governmentIdRoutes;