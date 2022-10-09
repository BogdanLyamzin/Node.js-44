const express = require("express");

const ctrl = require('../../controllers/books')

const {validateBody} = require("../../middlewares");

const {schemas} = require("../../models/book")

const {ctrlWrapper} = require("../../helpers")

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll))

router.get("/:id", ctrlWrapper(ctrl.getById))

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add))

router.put("/:id", validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById))

router.patch("/:id/favorite", validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite))

router.delete("/:id", ctrlWrapper(ctrl.removeById))

module.exports = router;