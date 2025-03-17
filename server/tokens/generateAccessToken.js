const jwt = require("jsonwebtoken");
const generateAccessToken = (userID) => {
return jwt.sign({userID},process.env.SECRET_KEY,{expiresIn:"15m"}
)
}