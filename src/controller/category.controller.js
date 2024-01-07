import Category from "../models/category.model.js"

export const getCategoryAll = async (req,res)=>{
    try {
        const category = await Category.findAll();
        if(!category){
            return res.status(404).json("category is not found")
        }
        return res.status(200).json({data:category})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export const getCategory = async (req,res)=>{
    try {
        const {id} = req.params;
        const category = await Category.findOne({where:{id}});
        if(!category){
            return res.status(404).json("category is not found")
        }
        return res.status(200).json({data:category})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export const postCategory = async (req,res)=>{
    try { 
        const {title} = req.body;

        const category = await Category.create({
            title,
            img:req.file.filename
        })
        return res.status(201).json({data:category})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}