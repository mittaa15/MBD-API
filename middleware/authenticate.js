const jwt = require("jsonwebtoken");
const Auth = require("../models/auth");

module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) {
        return res.status(401).json({
            status: "Failed",
            message: "Token doesn't exist"
        })
    }

    const token = bearerToken.split("Bearer ")[1];

    if (!token) {
        return res.status(401).json({
            status: "Failed",
            message: "Invalid token format"
        })
    }

    const payload = jwt.verify(token, "mita123");
    const user = await Auth.geUsertById(payload.userId);

    if (!user) {
        return res.status(404).json({
            status: "Failed",
            message: "User not found"
        })
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({
        status: "Failed",
        message: err.message
    })
  }
};