import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import jwt from 'jsonwebtoken'
dotenv.config({path:'./.env'})
const app = express()
const PORT = process.env.PORT || 5050;
import  path from 'path'
import Bookings from './models/appointment.model.js'
import User from './models/user.model.js'
const jwtkey ='ilovenodejs'



import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(cors('*'))
app.use(express.json())


app.use(express.static('client/build'))
/// database connectiong

app.get('*', (req, res) => {

    try {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }
    catch (error) {
        console.log(error);
    }
})


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connetced')
}).catch(err=>{
    console.log(err)
})



app.post('/signup', async (req, res) => {

    const { email, password } = req.body;

    try {
      const user = new User({ email, password });
      await user.save();
      const token = jwt.sign({ userId: user._id }, jwtkey)
      res.status(200).send({ success: true, user, token })

    } catch (err) {
      return res.status(422).send({ success: false, error: err.message })
    }

  })

  app.post('/signin', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(422).send({ success: false, error: "must provide email or password" })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(422).send({ success: false, error: "must provide email or password" })
    }
    try {
      await user.comparePassword(password);
      const token = jwt.sign({ userId: user._id }, jwtkey)
      res.status(200).send({ success: true, user, token })
    } catch (err) {
      return res.status(422).send({ success: false, error: "must provide email or password" })
    }
  })


/// @ fileds name will be email,service name,dateTime,customer name




app.post('/book-appointment', async (req, res)=>{

    const {email,service_name,dateTime,customer_name} = req.body
    const newBooking = new Bookings({email,service_name,dateTime,customer_name})
    newBooking.save()
    .then(()=>{
        res.status(200).send({success:true,booking:newBooking,message:'Appointment Booked successfully'})
    }).catch((err=>{
        console.log(err)
    }))
})


app.delete('/deleteBooking/:id',async(req,res)=>{

    try {
       await  Bookings.findByIdAndDelete({_id:req.params.id})
       res.status(200).send({success:true, message:'Deleted Successfully'})
     } catch (error) {
         res.status(500).send(error)
     }
})


app.get('/getBookings',async (req,res)=>{
    try {
       const list = await Bookings.find()
       res.status(200).send({success:true,bookings:list})
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/',(req,res)=>{
    res.send('Hello f rom server')
})

app.listen(PORT,()=>{
    console.log('listening on port'+PORT)
})
