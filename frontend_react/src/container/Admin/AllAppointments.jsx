import React,{useState,useEffect} from 'react'

const AllAppointments = () => {

const contStyle = {
height: "800px",
}
    const [bookingList,setBookingList] = useState([])
    const [email,setEmail] = useState('')
    const [password,setpassword] = useState('')
    const [isLoggedIn,setisLoggedIn] = useState(localStorage.getItem('token') ? true: false)

    useEffect(() => {
        getBooking()
    }, [])

    const getBooking =()=>{
        fetch(`http://localhost:5050/getBookings`)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setBookingList(data.bookings)
        }).catch(err=>{
            console.log(err)
        })
    }

    const formetDateTime = (dateTime)=>{
        let result = ''
        let dd = new Date(dateTime)
        let d = new Intl.DateTimeFormat('en-us',{
          dateStyle:'full',
          timeStyle:'medium'
        })

         result = d.format(dd)
         return result
    }

    const handleLogin =(e)=>{
        e.preventDefault()
        if(email  == '' || password == ""){
            alert('Please enter	email and password')
        }else{
            const data = {
                email,
                password
            }
            fetch(`http://localhost:5050/signin`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }).then(res=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.success){
                    setisLoggedIn(true)
                    localStorage.setItem('token',data.token)
                }else if(!data.success){
                    alert(data.error)
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    const logOut =()=>{
        localStorage.removeItem('token')
        setisLoggedIn(false)
    }

    const deleteBooking =(id)=>{

        fetch(`http://localhost:5050/deleteBooking/${id}`,{
            method:'DELETE',
           }).then(res=>res.json())
    .then((data)=>{
        console.log(data)
        if(data.success){
           alert(data.message)
           getBooking()
        }
    }).catch(err=>{
        console.log(err)
    })
    }

  return (
    <div>
        {
            isLoggedIn ?
<div>
    <div style={{
        display:'flex',
        alignContent:'flex-end',
    }}>
<button onClick={logOut} className='btn btn-danger'>Logout</button>
</div>
{


                bookingList &&  bookingList.map((booking)=>(
                    <div  className='container mt-5 mb-5 p-2  shadow p-3 mb-5  rounded'>
                     <div className='card m-3 p-2'>
                         <p>{booking.customer_name}</p>
                         <i>{booking.email}</i>
                         <h4>{booking.service_name}</h4>
                         <b>{formetDateTime(booking.dateTime)}</b>
                         <button className='btn btn-danger' onClick={()=>deleteBooking(booking._id)}>Delete Booking</button>
                         </div>
                         </div>
                 ))
                }
                 </div>
             :
             <div style={contStyle}>
             <div  className='container mt-5 mb-5 p-2 bg-black bg-gradient bg-opacity-25  shadow p-3 mb-5  rounded'>
                <h1 className='text-center'>Admin Login</h1>
                <form onSubmit={handleLogin}>
                <div class="row align-items-center">
                <div class="col-md-6 ">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text ">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group ">
    <label for="exampleInputPassword1">Password</label>
    <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  </div>
  </div>
  <button type="submit" class="btn btn-dark mt-3">Login</button>
</form>
                </div>
                </div>
        }

    </div>
  )
}

export default AllAppointments



//admin@system.com
//password
