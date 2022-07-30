const router = require('express').Router();
// Import all of the API routes from /api
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


  module.exports = router;