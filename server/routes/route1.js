const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/User');

// route for : Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get('/', async (req, res) => {
  try {
    const users = await User.find({
        $and: [
          { income: { $lt: '$5' } },
          { car: { $in: ['BMW', 'Mercedes'] } }
        ]
      });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
