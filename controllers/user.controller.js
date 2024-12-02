const User = require("../models/user.model.js");

exports.findAll = (req, res) => {
  User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err.stack);
      res.status(500).send({
        message: err.message || "some error occured",
      });
    });
};

exports.registerUser = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "content cannot be empty",
    });
    return;
  }
  const messages = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    mobile: req.body.mobile,
    admin: req.body.admin,
  });
  messages
    .save(messages)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occured while creating",
      });
    });
};
