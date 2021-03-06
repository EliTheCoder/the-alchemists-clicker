const colors = require('colors');

exports.logMessage = (type, message) => {
  let typeString;
  let datestamp = "";
  let msg = "";
  msg += message;
  datestamp += new Date();
  switch (type) {
    case 0:
      typeString = "INFO";
      console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${msg.toUpperCase()}`);
      break;
    case 1:
      typeString = "WARNING";
      console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${msg.toUpperCase()}`.yellow);
      break;
    case 2:
      typeString = "ERROR";
      console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${msg.toUpperCase()}`.red);
      break;
    case 3:
        typeString = "OUTPUT";
        console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${msg.toUpperCase()}`.blue);
        break;
    default:
      typeString = "LOG";
      console.log(`[${typeString.toUpperCase()}] {${datestamp.toUpperCase()}} ${msg.toUpperCase()}`);
  }
}

exports.random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
