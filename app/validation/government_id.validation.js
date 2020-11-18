import  expressValidator  from 'express-validator';
const { body, param, } = expressValidator;
const validate = (method) =>{
  switch(method){
    case 'create':
      return [
        body('govId').exists().bail().isInt(),
        body('state').exists().bail().isLength({min:2, max:2}),
        body('expirationDate', `Is not a valid Date`).exists().bail().isDate().custom(val=> new Date(val) >= new Date()).withMessage("expirationDate has expired"),
        body('imagePath').exists().isString(), 
        body('user', "user is not an Integer Value").exists().bail().isInt(),
      ];
    case 'findOne':
      return [param("governmentIdNumber").isInt()];
    case 'findOneByUserId':
      return [param("userId").isInt()];
    case 'update':
      return [
        body('id').exists().bail().isInt(),
        body('govId').exists().bail().isInt(),
        body('state').exists().bail().isLength({min:2, max:2}),
        body('expirationDate', `Is not a valid Date`).exists().bail().isDate().bail().custom(val=> new Date(val) >= new Date()).withMessage("expirationDate has expired"),
        body('imagePath').exists().isString(),
        body('user', "user is not an Integer Value").exists().bail().isInt(),
      ];
    case 'deleteById':
      return [param("governmentIdNumber").isInt()];
  }
}

export default validate;