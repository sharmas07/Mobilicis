const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/User');

// route for : Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get('/', async (req, res) => {
  try {
    const users = await User.find({
      last_name: { $regex: /^M/i },
      quote: { $gt: 15 },
      email: { $regex: /\w+M\w+@/i }
    })
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
