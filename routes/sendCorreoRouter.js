const express = require ("express")
const router = express.Router()
const {index} = require ("../controllers/sendCorreoControllers")

router.post("/", index) 

module.exports = router