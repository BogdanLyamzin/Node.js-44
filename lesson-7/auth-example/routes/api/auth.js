const express = require("express");

const {validateBody} = require("../../middlewares");

const {ctrlWrapper} = require("../../helpers")

const {schemas} = require("../../models/user")

const ctrl = require("../../controllers/auth")

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register))

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrlWrapper(ctrl.login))

module.exports = router;