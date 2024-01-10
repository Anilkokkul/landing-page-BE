const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  uploadLogo,
  updateText,
  updateEmail,
  getLogo,
  getText,
} = require("../Controllers/admin.controllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + "-" + uniqueSuffix + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("logo"), uploadLogo);

router.post("/update-text", updateText);

router.post("/update-email", updateEmail);

router.get("/logo", getLogo);

router.get("/get-text", getText);

module.exports = router;
