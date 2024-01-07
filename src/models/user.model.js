import { DataTypes,Model } from "sequelize";
import sequelize from "../utils/db.connected.js";

class User extends Model{};

User.init({
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{
    sequelize,
    modelName:"users",
    createdAt:false,
    updatedAt:false
})

export default User