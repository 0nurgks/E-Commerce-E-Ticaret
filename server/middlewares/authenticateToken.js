const jwt = require("jsonwebtoken");

module.exports.authenticateToken = (req, res, next) => {
  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Yetkisiz erişim: Token yok" });

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Yetkisiz erişim: Token geçersiz" });

    req.userID = decoded.userID || decoded.sub;
    next();
  });
};
