const fs = require("fs");

exports.removeFiles = (files) => {
  files.forEach((file) => {
    const fl = fs.unlinkSync(file.path);
  });
};
