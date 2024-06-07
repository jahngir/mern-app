import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
   username :{type:String,required:true,unique:true},
   password: { type: String, required: true },

  });
  const AdminModal = mongoose.model("Admin", AdminSchema);

 export{AdminModal}