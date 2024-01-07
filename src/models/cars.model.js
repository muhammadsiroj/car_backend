import sequelize from "../utils/db.connected.js";
import { DataTypes, Model } from 'sequelize'

class Cars extends Model{};
Cars.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    img: {
        type: DataTypes.STRING,
        allowNull:false
    },
    img_in: {
        type: DataTypes.STRING,
        allowNull:false
    },
    img_out: {
        type: DataTypes.STRING,
        allowNull:false
    },
    position:{
        type: DataTypes.INTEGER,
        allowNull:false,
        default:1
    }, 
    marka: {
        type: DataTypes.STRING,
        allowNull:false
    },
    mator: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    color:{
        type:DataTypes.STRING,
        allowNull:false
    },
    distance:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    year:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:2023
    }

},{
    sequelize,
    modelName: 'cars',
    createdAt: false,
    updatedAt: false,
});

export default Cars