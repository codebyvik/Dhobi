// create and send token and save in cookie.

const sendToken = async (user, statusCode, res, data) => {
  // create token
  const token = await user.generateJwtToken();

  // options for cookie
  const options = {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  if (user.role === "seller") {
    return res.status(statusCode).cookie("token", token, options).json({
      success: true,
      token,
      user: data,
    });
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
