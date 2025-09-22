const Order = require("../models/orderModel");

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    if (orders.length === 0) {
      const error = new Error("There is not product to show yet");
      error.status = 404;
      return next(error);
    }
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const createOrder = async (req, res, next) => {
  try {
    const { user, items, total } = req.body;

    if (!user || items.length === 0)  {
      const error = new Error("User and, items,  are required");
      error.status = 400; 
      return next(error);
    }

    if (total < 0 ) {
      const error = new Error("Total must be a positive number");
      error.status = 400;
      return next(error);
    }

    const savedOrder = await Product.create({
      user,
      items,
      total
    });


    res.status(200).json({
      success: true,
      data: savedOrder,
      message: 'Order saved successfully'
    })
    
  } catch (error) {
    console.log(error)
    next(error)
  }
}
const updateOrder = async (req, res, next) => {
  try {
    
    
  } catch (error) {
    next(error)
  }
};

const deleteOrder = async (req, res, next) => {
  try {
   const orderId = req.params.id;
   const deletedOrder = await Order.findByIdAndDelete(orderId);
   res.status(200).json(deletedOrder);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};