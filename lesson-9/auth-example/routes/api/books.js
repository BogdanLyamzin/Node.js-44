const express = require("express");

const ctrl = require('../../controllers/books')

const {validateBody, authenticate} = require("../../middlewares");

const {schemas} = require("../../models/book")

const {ctrlWrapper} = require("../../helpers")

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll))

router.get("/:id", authenticate, ctrlWrapper(ctrl.getById))

router.post("/", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.add))

router.put("/:id", authenticate, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id/favorite", authenticate, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete("/:id", authenticate, ctrlWrapper(ctrl.removeById))

module.exports = router;