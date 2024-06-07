import express from "express"
import bcrypt from "bcrypt"
import { AdminModal } from "./models/admin.js"
//import { Connection } from "./database/db.js"
import "./database/db.js"

async function AdminAccount (params) {
    try{
        const adminCount = await AdminModal.countDocuments()
        if(adminCount===0){
            const hashPass= await bcrypt.hash('Solution123++',10)
            const newAdmin=new AdminModal({
                username:'admin',
                password: hashPass
            }) 
            await   newAdmin.save()
            console.log("account created")
        }else{
            console.log("account already created");
        }

    }
    catch(err){
        console.log(err);

    }
}
AdminAccount()