const express = require("express");
const {test, getUserByEmail, registerActivateScience, submitActivateScience} = require("../controllers/eloqua");

const router = express.Router();

router.post('/testEloqua', test);
router.post('/getUserByEmail', getUserByEmail);
router.post('/submitActivateScience', submitActivateScience);
router.post('/registerActivateScience', registerActivateScience);

module.exports = router;