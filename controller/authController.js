const Auth = require("../models/auth");
const jwt = require("jsonwebtoken");

const loginUser = async function (req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await Auth.authenticateUser(email, password);

    if (user) {
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "mita123"
      );

      res.status(200).json({
        status: "Success",
        message: "Login successful",
        jwt: token,
      });
    } else {
        res.status(401).json({
            status: "Failed",
            message: "Email or password does not match"
          });
    }
  } catch (err) {
    res.status(500).json({
        status: "Gagal!",
        message: err.message
    })
  }
};

module.exports = {
  loginUser,
};