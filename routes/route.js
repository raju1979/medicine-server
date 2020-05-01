var express = require('express')
var router = express.Router();

const searchController = require('../controllers/SearchController');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// // get records by initial Alphabet e.g. 'A'
router.get('/:alphabet', function (req, res) {
  searchController.getRecordsByAlphabet(req, res);
})

// // get records by matching any text within string
router.get('/match/:text', function (req, res) {
  searchController.getRecordsByMatchingText(req, res);
})

module.exports = router