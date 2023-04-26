const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/User');

// route for : Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get('/', async (req, res) => {
  try {
    const users = await User.find({
        car: { $in: ['BMW', 'Mercedes', 'Audi'] },
        email: { $not: /\d/ }
      });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
