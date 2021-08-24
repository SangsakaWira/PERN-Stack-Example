const jwt = require("jsonwebtoken");
const tokenSecretKey = process.env.SECRET_KEY || "s0m3s3cr37";

// Verify token
const verifyAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).json({ error: 'No token provided.' });

//   jwt.verify(token, tokenSecretKey, (error, decoded) => {
//     if (error) return res.json({ error: 'Failed to authenticate token.' });
//     req.userId = decoded.id;
//     req.role = decoded.role;
//     next();
//   });

};

module.exports = {
    verifyAuth
  };