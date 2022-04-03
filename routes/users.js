const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


/* GET users listing. */
router.get('/:name', userController.infoUser)

module.exports = router;
