import mongoose from "mongoose"
import dotenv from "dotenv"




dotenv.config();


const Connection= async ()=>{
    try{
        mongoose.connect(process.env.MONGO_DB)
        console.log("connected")
    }
    catch(err){
        console.log(err)

    }
}

export{Connection}