import jwt from "jsonwebtoken";

function generateToken(username) {
  let payloadOptions = {
    issuer: "TheKrakenInn",
    subject: "send and receive access token",
    expiresIn: "15m",
    algorithm: "RS256",
  };

  let payload = {
    username: username,
  };

  let token = jwt.sign(payload, process.env.PRIVATE_JWT_KEY, payloadOptions);

  return token;
}

function verify(token) {
  try {
    return jwt.verify(token, process.env.PUBLIC_JWT_KEY);
  } catch (err) {
    let verfError = new Error();

    if (err.name == "JsonWebTokenError") {
      verfError.clientMessage = "Digital signing is invalid, request new token";
      verfError.serverMessage = "Token verification failed";
    }

    if (err.name == "TokenExpiredError") {
      verfError.clientMessage = "Digital signing is invalid, request new token";
      verfError.serverMessage = "Token expired";
    }

    throw verfError;
  }
}

export default { generateToken, verify };
