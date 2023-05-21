
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    email:{
        type:String
    },
    service_name:{
        type:String
    }
    ,dateTime:{
        type:String,
        default:Date.now()
    },
    customer_name:{
        type:String
    }
})


export default  mongoose.model("bookings",appointmentSchema)
