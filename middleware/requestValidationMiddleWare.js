const multer = require("multer");
const { storage } = require("../config/multerConfig");
const utilities = require("../utilities");

const bodyValidation = (schema) => {
  return (req, res, next) => {
    result = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: true,
    });
    if (result?.error) {
      if (req.files?.length > 0) {
        utilities.file.removeFiles(req.files);
      }
      next({
        status: 400,
        message: "Bad Request",
        data: result?.error?.details.map((item) => {
          return {
            message: item?.message?.replaceAll('"', ""),
          };
        }),
      });
    } else {
      next();
    }
  };
};

const fileValidation = (schema) => {
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1000000, // 1MB
    },
    fileFilter: (req, file, cb) => {
      const found = schema.files.find((f) => file.fieldname === f.name);
      if (found) {
        if (found.accepts.includes(file.mimetype)) {
          cb(null, true);
        } else {
          cb(new Error(`file type not match , accepts:${found.accepts}`));
        }
      } else {
        cb(null, false);
      }
    },
  });
  return upload.any();
};

module.exports = {
  body: bodyValidation,
  file: fileValidation,
};
