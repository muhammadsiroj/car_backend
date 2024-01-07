import Cars from "../models/cars.model.js";

const getCarAll = async (req,res)=>{
    const {id} = req.params
    try {
        const car = await Cars.findOne({where:{id}});
        if(!car){
            return res.status(404).json('car is not found')
        }
        return res.status(200).json({data:car})
    } catch (error) {
        return res.status(500).json(error.message) 
    }
};
const getCar = async (req,res)=>{
    try {
        const {id} = req.params;
        const car = await Cars.findAll({where:{categoryId:id}})
        if(!car){
            return res.status(404).json('car is not found')
        }
        return res.status(200).json({data:car})
    } catch (error) {
        return res.status(500).json(error.message)
    }
};
const postCar = async (req,res)=>{
    try {
        const {name,price,position,marka,mator,color,distance,description} = req.body;
        const car = await Cars.create({
            name,
            price,
            img:req.files.img[0].filename,
            img_in:req.files.img_in[0].filename,
            img_out:req.files.img_out[0].filename,
            position,
            marka,
            mator,
            color,
            distance,
            description,
            categoryId:req.params.id
        })
        
        return res.status(201).json({data:car})
    } catch (error) {
        return res.status(500).json(error.message)
        
    }
};

export{
    getCar,
    getCarAll,
    postCar
}

