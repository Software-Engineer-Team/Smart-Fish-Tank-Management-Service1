require("dotenv").config();

exports.getTemp = (req, res, next) => {
  const ada_key = req.body.ada_key;
  const username = req.body.username;
  const url = `${process.env.ADA_FRUIT_APP_ENDPOINT_X_AIO_API}/${username}/feeds/tempstatus/data?X_AIO_Key=${ada_key}`;
  console.log(url);
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((temps) => {
      return res.status(200).json({
        message: "Fetch successfully!",
        data: temps,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};
