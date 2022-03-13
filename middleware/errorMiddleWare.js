const multer = require("multer");
module.exports.pageNotFoundErrorMiddleWare = (req, res, next) => {
  next({
    status: 404,
    message: "api not found",
    data: null,
  });
};

module.exports.defaultErrorMiddleWare = (err, req, res, next) => {
  const obj = {
    status: err?.status || 500,
    message: err?.message || "internal server error",
    data: err?.data || null,
  };
  res.status(obj.status).send(obj);
};
