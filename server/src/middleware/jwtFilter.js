import jwtUtils from "../util/jwtUtils.js";

const authorization = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader == undefined || !authHeader.includes("Bearer ")) {
    return res.sendStatus(400);
  }

  try {
    const token = authHeader.replace("Bearer ", "");
    const payload = jwtUtils.verify(token);

    req.user = payload;

    next();
  } catch {
    return res.sendStatus(403);
  }
};

export default { authorization };
