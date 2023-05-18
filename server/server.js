import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./src/router/authRouter.js";
import jwtFilter from "./src/middleware/jwtFilter.js";
import router from "./src/router/router.js";
import menuRouter from "./src/router/menuRouter.js";

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/health", (req, res) => {
  res.send("i'm alive");
});

app.use(authRouter);
app.use("/menu", menuRouter);
app.use("/user", jwtFilter.authorization, router);

app.listen(port, () => {
  console.log("server is running on port " + port);
});
