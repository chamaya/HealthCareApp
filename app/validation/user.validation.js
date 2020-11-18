import  expressValidator  from 'express-validator';
const { body, param, } = expressValidator;
const validate = (method) =>{
  switch(method){
    case 'create':
      return [
        body('name', "Name doesn't exist").exists(),
        body('email', "Email is in wrong format").exists().isEmail(),
        body('dob').exists().bail().isDate(),
      ];
    case 'findOne':
      return[
        param('userId').isInt(),
      ]
  }
}

export default validate;