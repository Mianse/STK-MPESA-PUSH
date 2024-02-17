const express = require("express")

const router = express.Router()

const {createToken} = require("../controllers/tokenController.js")

router.get("/",createToken)

module.exports = router