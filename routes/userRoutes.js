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

router.put("/:id",
  /* #swagger.tags = ['Users']
     #swagger.description = 'Update a user by ID' */
  userController.updateUserById);

module.exports = router;