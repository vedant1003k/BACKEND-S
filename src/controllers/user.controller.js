import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  //   res.status(200).json({
  //   message: "ok Vedant",
  // });

  // steps to register
  // 1 get user detail from frontend
  // 2 validation -- not empty
  // 3  check if user already exists : username or emial
  // 4 check for images , check for avatar
  // 5 upload them to cloudinary
  // 6  create user object to send in databas - create entry in db
  // 7 remove password and referesh token fiedl from response
  // 8 check for user creation
  // 9 return response (res)
  // for file handling go to routes

  //STEP 1
  const { fullname, email, username, password } = req.body;
  console.log(fullname, email, username, password);

  // if(fullname === ''){
  //   throw new ApiError(400,"Fullname is Required");
  // }

  // STEP 2
  //advance code for checking is field is empty or not
  if (
    [fullname, email, username, password].some((feild) => feild?.trim === "")
  ) {
    throw new ApiError(400, "Fullname is Required");
  }

  // STEP 3
  // finding if user already exists
  const existedUser = User.findOne({
    $or: [{ username }, { email }, { password }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or usrename already exists");
  }

  // STEP 4
  // console.log(req.files);
  /* is a concise way of safely accessing the path of an uploaded file in a Node.js application, potentially using a library like multer for handling file uploads. */
  const avatarLocalPath = req.files?.avatar[0]?.path;

  const coverImageLocalPath = req.files?.coverImage[0].path;

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required ");
  }

  // STEP 5
  const avatar = await uploadOnCloudinary(avatarLocalPath);

  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(400, "Avatar file is requi  red ");
  }

  // STEP 6
  const user = await User.create({
    fullname,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username,
  });

  //check whether the user is authenticated or not
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "somthing went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registerd Successfully"));

  // res.send(respone);
});

export { registerUser };
