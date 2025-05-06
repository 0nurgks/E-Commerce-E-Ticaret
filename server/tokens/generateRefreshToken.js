const jwt = require("jsonwebtoken");

module.exports.generateRefreshToken = (userID) => {
    if (!process.env.SECRET) {
      throw new Error("SECRET_KEY is not defined in environment variables.");
    }
  
    const expiresIn = 30 * 24 * 60 * 60; // Refresh token 30 gün geçerli olacak
  
    // Refresh token'ı oluşturuyoruz
    const refreshToken = jwt.sign(
      { userID },
      process.env.SECRET,
      { expiresIn }  // Refresh token süresi (30 gün)
    );
  
    // expiresAt'ı hesaplıyoruz (token süresi bitişi)
    const expiresAt = Date.now() + expiresIn * 1000;
  
    return { refreshToken, expiresAt };  // RefreshToken ve expiresAt değerini döndürüyoruz
  };