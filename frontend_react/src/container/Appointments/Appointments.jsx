import React, {useState} from 'react'
import 'react-calendar/dist/Calendar.css';
import contact from '../../assets/contact.jpg'
import { toast } from 'react-hot-toast';

const Appointments = () => {

    const imgStyle = {
        height :"650px",
        width :"650px",
        borderRadius: "24px",
        objectFit: "contain",
    };

    const [value, onChange] = useState(new Date());
    // {email,service_name,dateTime,customer_name
    const [email,setEmail] = useState('')
    const [service_name,setservice_name] = useState('')
    const [customer_name,setcustomer_name] = useState('')
    const [dateTime,setdateTime] = useState('')


    const OPTIONS  =["Personal Training","Nutrition Consultation"]


    const handleSubmit =()=>{
        //simple object with keys match with datbase/server keys
        const data = {
            email,
            service_name,
            dateTime,
            customer_name
        }
        fetch(`http://localhost:5050/book-appointment`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json())
        .then((data)=>{
            console.log(data)
            toast.success(data.message)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div class="container mt-3 mb-3">

        <div className="row">
        <div class="col mt-5">
<img style= {imgStyle} src={contact} alt='contact' />

    </div>
        <div className='col'>
        <h1 class="mt-5">Appointments </h1>
<p class="mt-5 mb-5">
Welcome to my personal training and nutrition services! I am excited to help you achieve your health and fitness goals. Whether you're looking to lose weight, build muscle, or simply improve your overall health, our team of experienced trainers and nutritionists can provide you with the support and guidance you need.

To get started, simply schedule an appointment. During your appointment, we'll discuss your goals, assess your current fitness level, and develop a personalized plan that's tailored to your unique needs.</p>
<div  className='container mt-5 mb-5 p-2 bg-black bg-gradient bg-opacity-25  shadow p-3 mb-5  rounded'>

            <label for="exampleInputEmail1">Name</label>
    <input type="text" onChange={(e)=>setcustomer_name(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>


            <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>

            <label for="exampleInputEmail1">Date and Time</label>
    <input type="datetime-local" onChange={(e)=>setdateTime(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>


            <label for="exampleInputEmail1">Service Name</label>
    <select
    class="form-select"
    onChange={(e)=>setservice_name(e.target.value)}
    >
        <option value={''}>Select Services</option>
        {
            OPTIONS.map(opt=>(
                <option value={opt}>{opt}</option>
            ))
        }
    </select>
    <button onClick={handleSubmit} className='btn btn-dark mt-5 mb-5'>
        Submit
    </button>
    </div>
    </div>

    </div>
</div>

  )
}

export default Appointments
