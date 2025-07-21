const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,           // OR CLOUDINARY_CLOUD_NAME
  api_key: process.env.CLOUD_API_KEY,           // OR CLOUDINARY_KEY
  api_secret: process.env.CLOUD_API_SECRET,     // OR CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV",
    allowed_formats: ["png", "jpg", "jpeg"],
  },
});

module.exports = {
  cloudinary,
  storage,
};