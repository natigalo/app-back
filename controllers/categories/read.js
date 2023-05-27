import Category from '../../models/Category.js'
export default async (req,res)=>{
try {
    let all= await Category.find()
    return res.status(200).json(
        {
            success: true,
            response: all 
            }
    )
} catch (error) {
    return res.status(500).json(
        {
            success:false,
            message:'error'
        }
    )
}
}