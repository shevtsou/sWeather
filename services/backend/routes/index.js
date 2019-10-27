const express = require('express');
const request = require('request');
const router = express.Router();

router.all('*', (req, res, next) => {
  request(req.originalUrl.substr(1)).pipe(res)
})
module.exports = router;