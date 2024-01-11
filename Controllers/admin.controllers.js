const Logos = require("../Models/logo.model");
const Users = require("../Models/user.model");
const { uploadFile } = require("../helpers/cloudinary");

exports.uploadLogo = async (req, res) => {
  //   console.log(req.file); // logged file info
  try {
    const upload = await uploadFile(req.file.path);
    // console.log("URL", upload.url);
    await Logos.findByIdAndUpdate(
      { _id: "659e6ef8ae46052d68a3cb41" },
      { logo: upload.secure_url },
      {
        new: true,
      }
    ).then((data) => {
      if (!data) return res.status(400).send("Error creating new Logo");
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal server error",
      Error: error,
    });
  }
};

exports.updateText = (req, res) => {
  try {
    const { text } = req.body;
    // console.log(text)
    Users.findByIdAndUpdate(
      { _id: "659e7970d9e61b9a03aecece" },
      { text: text },
      {
        new: true,
      }
    ).then((data) => {
      res.status(200).send({
        data: data,
      });
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal server error",
      Error: error,
    });
  }
};

exports.updateEmail = (req, res) => {
  try {
    const { email } = req.body;
    Users.findByIdAndUpdate(
      { _id: "659e7970d9e61b9a03aecece" },
      { email: email },
      {
        new: true,
      }
    ).then((data) => {
      res.status(200).send({
        data: data,
      });
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal server error",
      Error: error,
    });
  }
};

exports.getLogo = async (req, res) => {
  try {
    await Logos.find().then((data) => {
      if (!data) {
        throw new Error("No Data Available");
      } else {
        return res.status(200).send(data);
      }
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal server error",
      Error: error,
    });
  }
};

exports.getText = async (req, res) => {
  try {
    await Users.find().then((data) => {
      if (!data) {
        throw new Error("No Data Available");
      } else {
        return res.status(200).send(data);
      }
    });
  } catch (error) {
    res.status(400).send({
      message: "Internal server error",
      Error: error,
    });
  }
};
