const jwt = require("jsonwebtoken");

// register function
const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION || "1h",
    });

    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
};
// login function
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    // In a real application, you would verify the username and password against a database
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION || "1h",
    });

    res.status(200).json({ message: "User logged in successfully", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in user", error: error.message });
  }
};

module.exports = { login, register };
