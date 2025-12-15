const productModel =require('../model/Product');

exports.getProducts=async(req,res)=>{
    try {
        const product= await productModel.find();
        res.json(product);
    }catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({error:"Server Error"});
    }
}

exports.postProduct=async(req,res)=>{
    const {name,description,price,image}=req.body;
    try{
        let data = req.body;

        let result;
        if (Array.isArray(data)) {
           result = await productModel.insertMany(data);
        } else {
           result = await productModel.create(data);
       }

       res.status(201).json(result);

    }catch(error){
        console.error("Error fetching products:", error);
        res.status(500).json({error:"Server Error"});

    }
}


exports.deleteProduct=async(req,res)=>{
    const id=req.params.id;
    const deleted=await productModel.findByIdAndDelete(id);
    if(!deleted){
        return res.status(404).json({message:"Product not found"});
    }
    res.status(204).json({message:"Product deleted successfully"});
}


exports.updateProduct=async(req,res)=>{
    try{

        const {name,description,price,image}=req.body;
        const id=req.params.id;
        const updated=await productModel.findByIdAndUpdate(id,{name,description},{new:true});
        if(!updated){
            return res.status(404).json({message:"Product not found"});
        }
        res.json(updated);

    }catch(error){
        console.error("Error updating product");
        res.status(500).json({error:"Server Error"});
    }
}