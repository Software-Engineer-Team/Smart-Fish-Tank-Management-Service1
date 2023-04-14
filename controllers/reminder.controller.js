const Reminder = require("../models/reminder.database");

exports.getReminders = (req, res, next) => {
  const username = "admin";
  Reminder.find({ username })
    .then((reminders) => {
      result1 = [];
      result2 = [];
      today = new Date();
      for (let i = 0; i < reminders.length; i++) {
        curr = new Date(reminders[i].date);
        if (
          curr.getDate() == today.getDate() &&
          curr.getMonth() == today.getMonth() &&
          curr.getFullYear() == today.getFullYear()
        ) {
          result1.push(reminders[i]);
        } else {
          result2.push(reminders[i]);
        }
      }
      return res.json({
        message: "Successful",
        today: result1,
        other: result2,
      });
    })
    .catch((err) => console.log(err));
};

exports.postReminders = (req, res, next) => {
  const title = req.body.title;
  const date = req.body.date;
  const username = req.body.username;
  const reminder = new Reminder({
    title: title,
    date: date,
    username: username,
  });
  reminder
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Reminder created successfully!",
        reminder: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteReminder = (req, res, next) => {
  const id = req.params.id;
  Reminder.deleteOne({ _id: id })
    .then((result) => {
      console.log(result);
      return res.json({
        message: "Reminder deleted successfully!",
        reminder: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
