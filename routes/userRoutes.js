const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/",
   /* #swagger.tags = ['Users']
     #swagger.description = 'Get all users from database' */
  userController.getUsers);

router.get("/:id",
  /* #swagger.tags = ['Users']
     #swagger.description = 'Get a single user by ID' */
  userController.getUserById);

module.exports = router;