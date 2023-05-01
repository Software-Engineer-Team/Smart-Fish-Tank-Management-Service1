const Feeding = require("../models/feeding.database");

exports.getFeedings = (req, res, next) => {
  const user_id = req.params.user_id;
  Feeding.find({ user_id: user_id })
    .then((feeding) => {
      feeding.sort(function (a, b) {
        return (
          new Date().setHours(a.hour, a.minute) -
          new Date().setHours(b.hour, b.minute)
        );
      });
      return res.status(200).json({
        messaage: "Fetch successfully!",
        data: feeding,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postFeeding = (req, res, next) => {
  const level = req.body.level;
  const hour = req.body.hour;
  const minute = req.body.minute;
  const user_id = req.body.user_id;
  Feeding.find({ user_id: user_id, hour: hour, minute: minute })
    .then((feeding) => {
      if (feeding.length != 0) {
        return res.status(400).json({
          message: "Time have already setting",
        });
      } else {
        const newfeeding = new Feeding({
          user_id: user_id,
          hour: hour,
          minute: minute,
          level: level,
        });
        newfeeding
          .save()
          .then((result) => {
            res.status(201).json({
              message: "Feeding created successfully!",
              feeding: result,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => console.log(err));
};

exports.deleteFeeding = (req, res, next) => {
  const id = req.params.id;
  Feeding.deleteOne({ _id: id })
    .then((result) => {
      console.log(result);
      return res.json({
        message: "Feeding deleted successfully!",
        feeding: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.patchFeeding = (req, res, next) => {
  const id = req.body.id;
  const hour = req.body.hour;
  const minute = req.body.minute;
  const level = req.body.level;
  const user_id = req.body.user_id;
  Feeding.find({ hour: hour, minute: minute, user_id: user_id })
    .then((feeding) => {
      if (feeding.length != 0) {
        return res.status(400).json({
          message: "Feeding have the same time with other!",
        });
      } else {
        Feeding.findByIdAndUpdate(id, { hour, minute, level })
          .then((result) => {
            console.log(result);
            return res.json({
              message: "Feeding update successfully!",
              feeding: result,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => console.log(err));
};
