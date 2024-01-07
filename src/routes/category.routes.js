import {Router} from 'express';
import { getCategory, getCategoryAll, postCategory } from '../controller/category.controller.js';
import {upload} from '../utils/multer.js';
import checkToken from '../middleware/token.middleware.js';
const route = Router()

route.get("/category",getCategoryAll)
route.get("/category/:id",getCategory)
route.post("/category",checkToken,upload.single("img"),postCategory)

export default route