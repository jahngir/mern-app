import express from "express"
import bcrypt from "bcrypt"
import { AdminModal } from "./models/admin"
import { Connection } from "./database/db"

function name(params) {
    try{
        const adminCount = AdminModal.countDocuments()
        if(adminCount===0){
            const hashPass= bcrypt.hash('Solution123++',10)
            const newAdmin=new AdminModal({
                username:'admin',
                password:hashPass
            })
        }

    }
    catch{

    }
}