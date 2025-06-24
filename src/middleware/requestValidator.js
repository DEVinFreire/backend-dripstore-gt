const { body, query, param } = require('express-validator');
const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = req.validationErrors();
    if (errors) {
      return res.status(400).json({
        errors: errors.map(err => ({
          field: err.param,
          message: err.msg
        }))
      });
    }
    next();
  };
};

module.exports = {
  validate,
  userCreate: [
    body('firstname').notEmpty().withMessage('First name is required'),
    body('surname').notEmpty().withMessage('Surname is required'),
    body('email')
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number')
  ],
  userLogin: [
    body('email')
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
  ],
  categoryCreate: [
    body('name').notEmpty().withMessage('Name is required'),
    body('slug')
      .notEmpty()
      .withMessage('Slug is required')
      .custom(slug => {
        return /^[a-z0-9-]+$/.test(slug);
      })
      .withMessage('Slug must contain only lowercase letters, numbers, and hyphens')
  ],
  productSearch: [
    query('limit').optional().isInt({ min: -1 }).withMessage('Limit must be an integer or -1'),
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('fields').optional().isString().withMessage('Fields must be a string'),
    query('match').optional().isString().withMessage('Match must be a string'),
    query('category_ids').optional().isString().withMessage('Category IDs must be a string'),
    query('price-range').optional().isString().withMessage('Price range must be a string')
  ]
};
