import medicalCards from "../controllers/medical_card.controller.js";
import validationMiddleware from '../validation/vaildationmiddleware.js'
import validate from '../validation/medical_card.validation.js';

const medicalCardRoutes = (app) => {
  //create a Medical Card
  app.post("/api/medicalcard", validate('create'), validationMiddleware, medicalCards.create);
  //Find a single Medical Card with the corresponding ID
  app.get("/api/medicalcard/:medicalCardId", validate('findOne'), validationMiddleware, medicalCards.findOne);
  //Find a single Medical Card with the corresponding User ID
  app.get("/api/medicalcard/user/:userId", validate('findOneByUserId'), validationMiddleware, medicalCards.findOneByUserId);
  //Update a single Medical Card with the corresponding ID
  app.put("/api/medicalcard/", validate('update'), validationMiddleware, medicalCards.update);
  //Delete a single Medical Card with the corresponding ID
  app.delete("/api/medicalcard/:medicalCardId", validate('deleteById'), validationMiddleware, medicalCards.deleteById);
};

export default medicalCardRoutes;