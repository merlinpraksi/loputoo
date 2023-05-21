import React from 'react'
import { Link } from 'react-router-dom'
import nutrition from '../../assets/nutrition.jpg';
import advice from '../../assets/advice.jpg';
import './Services.css'

const Services = () => {
  return (

    <>
<div class="container text-center mt-5 pt-5">
    <h1 class="mb-5 mt-5">Services</h1>
  <div class="row align-items-center">
    <div class="col mb-5 mt-5">
        <h1 class="mb-5">Personal Training</h1>
<p>During our initial consultation, we will discuss your fitness goals and objectives, as well as any health concerns or limitations that you may have. Based on this information, we will develop a customized training plan that is tailored to your individual needs and goals, while also taking into account any health conditions or injuries.</p>
    </div>
    <div class="col mb-5 mt-5">
    <img className='advice-2' src={advice} alt='' />
    </div>
  </div>
</div>

<div class="container text-center mt-5 pt-5 mb-5 pb-5 ">
  <div class="row align-items-center">
    <div class="col">
    <img className='nutrition-2' src={nutrition} alt='' />
    </div>
    <div class="col">
        <h1 class="mb-5">Nutrition plan </h1>
    <p>Nutrition is an essential part of any fitness journey, which is why we offer personalized nutrition plans designed to help you reach your goals. Our nutrition plans take into account your unique needs and goals, as well as any health conditions or dietary restrictions you may have.</p>
    </div>
  </div>
</div>
</>
  )
}

export default Services
