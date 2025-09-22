const router = require("express").Router();
const { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder } = require("../controllers/orderController");


router.get("/",
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Get all orders from database' */
  getAllOrders);

router.get("/:id",
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Get a single order by ID' */
  getOrderById);

router.post("/",
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Create a new order' */
  createOrder);

router.put("/:id",
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Update a order by ID' */
  updateOrder);

router.delete("/:id",
  /* #swagger.tags = ['Orders']
     #swagger.description = 'Delete a order' */
  deleteOrder);

module.exports = router;