const express = require('express');
const router = express.Router();
const User = require('../mongodb/models/User');

// route for : Show the data of top 10 cities which have the highest number of users and their average income.
router.get('/', async (req, res) => {
  try {
    const users = await User.aggregate([
      {
        $group: {
          _id: '$city',
          count: { $sum: 1 },
          avg_income: { $avg: { $toDouble: { $substr: [ '$income', 1, -1 ] } } }
        }
      },
      {
        $sort: { count: -1 }
      },
      {
        $limit: 10
      }
    ]);
    
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
