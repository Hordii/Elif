const express = require('express');
const router = express.Router();
const controller = require('./controller')

router
  .route('/')
  .get(controller.get)
  .post(controller.add)
  .put(controller.put)
  .delete(controller.delete);


module.exports = router;
