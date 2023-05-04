const cryptoJS = require("crypto-js");
require("dotenv").config();

const secretKey = process.env.SERVER_SECRETKEY;

function encrypt(text) {
  const encryptedText = cryptoJS.AES.encrypt(text, secretKey).toString();
  return encryptedText;
}

function decrypt(encryptedText) {
  const decryptedText = cryptoJS.AES.decrypt(encryptedText, secretKey).toString(
    cryptoJS.enc.Utf8
  );
  return decryptedText;
}

module.exports = {
  encrypt,
  decrypt,
};
