const express = require('express');
const router = express.Router();
const { allBeers, singleBeer, randomBeer, searchBeer, createBeer } = require('../controller/beers');

router.get('/all', allBeers);
router.get('/single/:beerId', singleBeer);
router.get('/random', randomBeer);
router.post('/new', createBeer);
router.get('/search', searchBeer)

module.exports = router;
