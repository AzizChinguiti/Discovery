
const express = require("express");
const {
  registerExplorer,
  registerBO,
  login,
} = require("../controllers/authController");
const router = express.Router();

router.post("/register/explorer", registerExplorer);
router.post("/register/business", registerBO);
router.post("/login", login);

module.exports = router;