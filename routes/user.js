const middleware = require("../config/middleware")
const express = require("express")
const router = express.Router()

const userController = require("../controller/user")

router.post("/",middleware.verifyAuth,userController.create)
router.post("/login",userController.login)
router.get("/",middleware.verifyAuth,userController.read)
router.get("/:id",middleware.verifyAuth,userController.readById)
router.put("/",middleware.verifyAuth,userController.updateById)
router.delete("/:id",middleware.verifyAuth,userController.delete)

module.exports = router