const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/User');

// route for : Male Users which have phone price greater than 10,000.
router.get('/', async (req, res) => {
  try {
    const users = await User.find({
      gender: 'Male',
      $expr: { $gt: [{ $toInt: "$phone_price" }, 10000] }
    });
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
