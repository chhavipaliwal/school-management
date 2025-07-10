const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password });
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const user = {
    name: "chhavi",
    email,
    phone: "234567890",
    role: "student",
  };

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });

  res.json({ token });
};

module.exports = { login };
