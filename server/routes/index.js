// Import modules
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

//Use the '/api' route for all requests that begin eith '/api'
router.use('/api', apiRoutes);

// If a request is made to any other route, send the index.html file located in the 'client/build' directory
router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  });
  
  // Exporting the router object so it can be used in other modules
  module.exports = router;