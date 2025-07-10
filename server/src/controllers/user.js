const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating user", error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
//private
const getPrivateUsers = async (req, res) => {
  try {
    const users = await User.find();
    res
      .status(200)
      .json({ message: "Private users fetched successfully", users });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching private users", error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getPrivateUsers,
};
