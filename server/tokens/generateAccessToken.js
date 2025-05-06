const jwt = require("jsonwebtoken");

module.exports.generateAccessToken = (userID) => {
    if (!process.env.SECRET) {
      throw new Error("SECRET_KEY is not defined in environment variables.");
    }
  
    const expiresIn = 15 * 60; // Token 15 dakika geçerli olacak
  
    // Token'ı oluşturuyoruz
    const accessToken = jwt.sign(
      { userID },
      process.env.SECRET,
      { expiresIn }  // Token süresi (15 dakika)
    );
  
    // expiresAt'ı hesaplıyoruz (token süresi bitişi)
    const expiresAt = Date.now() + expiresIn * 1000;
  
    return { accessToken, expiresAt };  // AccessToken ve expiresAt değerini döndürüyoruz
  };