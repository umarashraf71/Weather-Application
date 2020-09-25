const express = require('express');
const router = express.Router();


const {
        home,
        about,
        help,
        address,
      } = require('../controllers/home');


router.get('/', home);
router.get('/about', about);
router.get('/help', help);
router.get('/weather', address);

module.exports = router;