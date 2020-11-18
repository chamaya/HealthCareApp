import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from "./app/route/user.routes.js";
import medicalCardRoutes from "./app/route/medical_card.routes.js";
import governmentIdRoutes from "./app/route/government_id.routes.js";
import expressValidator from 'express-validator';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*")
  next();
}); 

app.get("/", (req, res) =>{
  res.json({message: "MEDICAL CANNABIS USERS INFORMATION"})
});

//define routes for data models
userRoutes(app);
medicalCardRoutes(app);
governmentIdRoutes(app);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));