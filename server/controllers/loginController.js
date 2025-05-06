const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../tokens/generateAccessToken");
const {generateRefreshToken} = require("../tokens/generateRefreshToken");

module.exports.loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    const userExist = await UserModel.findOne({ username });
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    const gotPassword = userExist.password;

    const PasswordCorrect = await bcrypt.compare(password, gotPassword);

    if (PasswordCorrect) {
      const AccessToken = generateAccessToken(userExist._id);
      const RefreshToken = generateRefreshToken(userExist._id);
      return res.status(200).json({
        message: "Giriş Başarılı",
        AccessToken,
        RefreshToken
      });
    } else {
      return res.status(400).json({ message: "Password is wrong" });
    }
  } catch (error) {
    console.error(error); 
    return res.status(500).json({ message: "connection error on server" });
  }
};
