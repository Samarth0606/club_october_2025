const RestaurantModel = require("../model/Restaurant.model")

async function readRestaurant(req,res){
    try{
        const allRestaurants = await RestaurantModel.find({}) //promise
        return res.status(200).json(allRestaurants)
    }
    catch(err){
        return res.status(500).json({msg: "Error while fetching restaurants"})
    }
}

async function createRestaurant(req,res){
    try{
        let {name,imageUrl,cuisines,rating,deliveryTime} = req.body; //undefined by default
        const newRestaurant = await RestaurantModel.create({name,imageUrl,cuisines,rating,deliveryTime}) //promise
        return res.status(201).json(newRestaurant)
    }
    catch(err){
        return res.status(500).json({msg: "Error while creating restaurants"})
    }
}

async function updateRestaurant(req,res){
    try{
       let {id} = req.params;
    //    let updatedData = await RestaurantModel.findByIdAndUpdate(id , req.body) //old data
       let updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id , req.body , {new:true}) //new data
       return res.status(200).json(updatedRestaurant)
    }
    catch(err){
        return res.status(500).json({msg: "Error while creating restaurants"})
    }
}
async function deleteRestaurant(req,res){
    try{
       let {id} = req.params;
       let deletedRestaurant =  await RestaurantModel.findByIdAndDelete(id);
       res.status(200).json({msg: "Rest. deleted successfully"} , deletedRestaurant)
    }
    catch(err){
        return res.status(500).json({msg: "Error while creating restaurants"})
    }
}

module.exports = {readRestaurant, createRestaurant,updateRestaurant,deleteRestaurant}




