const fs = require('fs');

function checkIfFileExists(filename: string, imageType: string): Boolean {
  try {
    if (fs.existsSync(`./assets/${imageType}/${filename}`)) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
  return false;
}

export default checkIfFileExists;
