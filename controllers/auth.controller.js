const User = require("../models/user.database");
const bcrypt = require("bcrypt");

exports.Login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Not found" });
      }
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (result) {
            return res.status(200).json({
              message: "Login successfully!",
              user: user,
            });
          } else {
            return res
              .status(400)
              .json({ message: "Wrong username or passowrd" });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.Register = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const ada_key = req.body.ada_key;
  User.findOne({ username })
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: "Username has already register",
        });
      } else {
        bcrypt
          .hash(password, 10)
          .then((result) => {
            const newUser = new User({
              username: username,
              password: result,
              ada_key: ada_key,
            });
            newUser
              .save()
              .then((result) => {
                return res
                  .status(201)
                  .json({ message: "Register successfully!", user: result });
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

exports.changePassword = (req, res, next) => {
  console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;
  const newpassword = req.body.newpassword;
  User.findOne({ username })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (result) {
            bcrypt
              .hash(newpassword, 10)
              .then((newpass) => {
                User.findByIdAndUpdate(user._id, { password: newpass })
                  .then((result) => {
                    return res.status(200).json({
                      message: "Update successfully!",
                    });
                  })
                  .catch((err) => console.log(err));
              })
              .catch((err) => console.log(err));
          } else {
            return res.status(401).json({
              message: "Wrong password!",
            });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.changeAPI = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const ada_key = req.body.ada_key;
  User.findOne({ username })
    .then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (result) {
            User.findByIdAndUpdate(user._id, { ada_key: ada_key })
              .then((result) => {
                return res.status(200).json({
                  message: "Update successfully!",
                });
              })
              .catch((err) => console.log(err));
          } else {
            return res.status(401).json({
              message: "Wrong password!",
            });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
