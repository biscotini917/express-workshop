'use strict';
const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const fs = require('fs');
module.exports = router;

router.use(formidable());

router.post('/create-post', (req, res, next) => {
  const blogPosts = req.fields;
  console.log(blogPosts);

fs.writeFile('./data/posts.json', blogPosts, (err) => {
  if (err) throw err;
  console.log('the file has been saved');
});

})

fs.readFile('.data/posts.json', function (error, file) {
  // do something
});

router.use(express.static('public'));
