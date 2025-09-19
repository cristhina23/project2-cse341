
const User = require("../models/userModel");

// GET all users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error); 
  }
};

// GET user by id
const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      const err = new Error("User not found");
      err.status = 404;
      return next(err);
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getUserById };
