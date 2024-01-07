import sequelize from "../utils/db.connected.js";
import { DataTypes,Model } from 'sequelize';

class Category extends Model{};
Category.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    sequelize,
    modelName: 'category',
    createdAt: false,
    updatedAt: false,
});
export default Category