import Cars from "../models/cars.model.js";
import Category from "../models/category.model.js";


Category.hasMany(Cars);
Cars.belongsTo(Category);