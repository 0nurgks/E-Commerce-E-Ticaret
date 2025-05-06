const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const UserModel = require("../models/UserModel");

module.exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const emailExist = await UserModel.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ message: "This email is already exist!" }); // ✅ return eklendi
    }

    const hashedPassword = await bcrypt.hash(password, 10); // ✅ await eklendi

    try {
      const newUser = await UserModel.create({
        username: username,
        email: email,
        password: hashedPassword, // ✅ düz password değil, hash!
      });

      return res.status(200).json({ message: "User Created" }); // ✅ return eklendi
    } catch (error) {
      return res.status(400).json({ message: "User could not be created" }); // ✅ return eklendi
    }

  } catch (error) {
    return res.status(500).json({ message: "Connection error on server" }); // ✅ return eklendi
  }
};
