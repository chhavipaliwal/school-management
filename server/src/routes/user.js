const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const { verifyToken, checkRole } = require("../middlewares/auth");

// Public routes
router.post("/", user.createUser);
router.get("/", user.getAllUsers);

// Protected route
router.get(
  "/private-users",
  verifyToken,
  checkRole(["admin", "student"]),
  user.getPrivateUsers
);

module.exports = router;
