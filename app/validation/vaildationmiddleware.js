import  expressValidator  from 'express-validator';
const { validationResult } = expressValidator;

const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

export default validationMiddleware;