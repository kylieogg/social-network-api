const router = require('express').Router();
// Import all of the API routes from /api
const userRoutes = require('./users-routes');
const thoughtRoutes = require('./thoughts-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


  module.exports = router;