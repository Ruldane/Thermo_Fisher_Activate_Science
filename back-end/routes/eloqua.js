const express = require("express");
const {test, getUserByEmail, registerActivateScience} = require("../controllers/eloqua");

const router = express.Router();

router.post('/testEloqua', test);
router.post('/getUserByEmail', getUserByEmail);
router.post('/registerActivateScience', registerActivateScience);

module.exports = router;