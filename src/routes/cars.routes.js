import {Router} from 'express';
import {upload} from '../utils/multer.js';
import { getCar, getCarAll, postCar } from '../controller/cars.controller.js'
import checkToken from '../middleware/token.middleware.js';

const route = Router()

route.get("/car/:id",getCarAll)
route.get("/cars/:id",getCar)
route.post("/cars/:id",checkToken,upload.fields([
    {name:"img",maxCount:1},
    {name:"img_in",maxCount:1},
    {name:"img_out",maxCount:1}
]),
postCar)


export default route