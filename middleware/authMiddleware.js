const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  console.log("Cookies:", req.cookies);
  console.log("Token:", req.cookies?.token);
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
    console.log("Verify Error:", error);
    console.log("Decoded:", decoded);
    
    if (error) {
      return res.status(401).send({ message: "Unauthorized Access" });
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;
