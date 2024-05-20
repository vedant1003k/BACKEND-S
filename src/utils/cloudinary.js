import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINRY_CLOUD_NAME,
  api_key: process.env.CLOUDINRY_API_KEY,
  api_secret: process.env.CLOUDINRY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded
    console.log("File is Uploaded on Cloudinary", response.url);

    return response;
    
  } catch (error) {
    fs.unlinkSync(localFilePath);
    // will remove the localy saved file as the upload operation failed
    return null;
  }
};

export { uploadOnCloudinary };
