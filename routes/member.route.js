const router = require("express").Router();
const multer = require("multer");

const { storage } = require("../config/multerConfig");
const Schema = require("../schemas");
const Controller = require("../controllers");

const requestValidationMiddleware = require("../middleware/requestValidationMiddleWare");
const { authMiddleWare } = require("../middleware/authMiddleware");

router.get("/", Controller.member.getAllMember);
router.post(
  "/",
  requestValidationMiddleware.file({
    files: [
      {
        name: "avatar",
        accepts: ["image/png"],
      },
    ],
  }),
  requestValidationMiddleware.body(Schema.member.create),
  Controller.member.create
);
router.get("/:id", Controller.member.getMemberById);
router.put(
  "/:id",
  requestValidationMiddleware.file({
    files: [],
  }),
  authMiddleWare,
  Controller.member.updateMemberById
);
router.delete("/:id", authMiddleWare, Controller.member.deleteMemberById);

module.exports = router;
