import { createUser, fetchUser } from "../service/authService.js";
import { createProfile } from "../service/userService.js";
import jwtUtils from "../util/jwtUtils.js";

async function registerUser(req, res) {
  const { username, password } = req.body;
  if (username == undefined || password == undefined)
    return res.status(400).send("Missing user details");
  if (username.length <= 4)
    return res.status(400).send("Username must be longer then 4 characters");
  if (password.length <= 4)
    return res.status(400).send("Password must be longer then 4 characters");
  if (username.includes(" ") || password.includes(" "))
    return res
      .status(400)
      .send("Password and username must not have whitespacees");

  const result = await createUser(username, password);

  if (result.upsertedCount == 1) {
    const details = {
      debitCard: "",
      address: "",
      balance: 0,
    };
    createProfile(username, details);
    const token = jwtUtils.generateToken(username);
    return res.status(201).send(token);
  } else {
    return res.status(409).send("This account already exist");
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  if (username == undefined || password == undefined)
    return res.status(400).send("Missing user details");
  if (username.includes(" ") || password.includes(" "))
    return res
      .status(400)
      .send("Password and username must not have whitespacees");

  const isAuth = await fetchUser(username, password);
  if (isAuth) {
    const token = jwtUtils.generateToken(username);
    return res.status(200).send(token);
  } else {
    return res.status(400).send("Wrong username or password");
  }
}

export default { registerUser, login };
