const middleware = require("../config/middleware")
const express = require("express")
const router = express.Router()

const userController = require("../controller/user")

router.post("/",userController.create)
router.post("/login",userController.login)
router.get("/",userController.read)
router.get("/:id",userController.readById)
router.put("/",userController.updateById)
router.delete("/:id",userController.delete)

module.exports = router