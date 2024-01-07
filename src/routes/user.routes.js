import { Router } from "express";
import { getUser, login, register } from "../controller/user.controller.js";
import { checkUser } from "../middleware/user.middleware.js";

const route = Router();

route.get("/user",getUser)
route.post("/login",checkUser,login)
route.post("/register",checkUser,register)


export default route