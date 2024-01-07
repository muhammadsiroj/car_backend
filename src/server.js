import 'dotenv/config.js'
import express from 'express';
import cors from 'cors'
import sequelize from './utils/db.connected.js';
import cars from './routes/cars.routes.js'
import category from './routes/category.routes.js'
import path from 'path'
import '../src/utils/connect.js'
import auth from './routes/user.routes.js';

function starter() {
    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use(express.static(path.resolve("uploads")))
    sequelize.sync()
    app.use(auth)
    app.use(cars)
    app.use(category)
    app.listen(4000, () => console.log('server is running !...'))
}
starter()