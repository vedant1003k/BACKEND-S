import { asyncHandler } from "../utils/asyncHandler.js";

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

  const { fullname, email, username, password } = req.body;
  console.log(fullname, email, username, password);

  // res.send(respone);
});

export { registerUser };
