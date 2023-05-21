import React from 'react'
import merlin from '../../assets/merlin.png';
import Button from '../../component/Button/Button';
import train from '../../assets/train.jpg';
import nutrition from '../../assets/nutrition.jpg';
import advice from '../../assets/advice.jpg';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {

    const divStyle = {

position: "relative",
backgroundColor: "black",
padding: "5rem",
color: "white",
top: "0",

// minHeight: "53vh",
    }
  return (
    <>
<div style= {divStyle}>
<div class="custom-shape-divider-bottom-1683375155">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>

<div class="container  text-center mt-5 mb-5">
</div>
    </div>
  <div class="row align-items-start">

    <div class="col mt-5 pt-5">

    <h1>STRENGHTEN YOUR MIND AND BODY</h1>
    <p class="mt-5 mb-5">Personal training & nutrition plans based in the Tenerife & Marbella. At the gym, remote or at home.</p>
    <Link to="/appointments">
    <button type="button" class="btn btn-dark">Get Started</button>
    </Link>

    </div>
    <div class="col mb-5">

    <img class="img-fluid" src={merlin} alt='merlin' />

</div>

  </div>
</div>
<div class="container text-center ">
  <div class="row align-items-start">
  <h1 class="mt-5 mb-5 ">Services</h1>
    <div class="col mt-5 mb-5">
    <img className='training' src={train} alt='train' />
    </div>
    <div class="col mt-5 mb-5">
    <img className='nutrition' src={nutrition} alt='nutrition' />
    </div>

  </div>
  <Link to="/services">
  <button type="button" class="btn btn-dark mt-5 mb-5">View Services</button>
  </Link>
</div>


<div class="container text-center pt-5 mt-5 pb-5 mb-5">
  <div class="row align-items-center">
    <div class="col">
    <img className='advice' src={advice} alt='merlin' />
    </div>
    <div class="col">
    <h1>Hi! I am Merlin Praks</h1>
     <p>I am a certified personal trainer with an EQF4 certificate. I am passionate about fitness and living a healthy lifestyle, and I am committed to helping my clients achieve their goals.

I have personally experienced the benefits of exercise and healthy living. As someone who has suffered from back pain due to long hours of sitting in the office, I know how important it is to take care of our bodies. With consistent exercise and proper form, I was able to alleviate my back pain and improve my overall well-being.

I believe in creating customized fitness programs that are tailored to each client's unique needs and goals. Whether you're looking to lose weight, build strength, improve your flexibility, or simply feel better in your own skin, I am here to help you every step of the way.

So if you're ready to make a change and take control of your health, I invite you to contact me today to schedule a consultation. Let's work together to achieve your fitness goals and create a happier, healthier you!</p>
    </div>
  </div>
</div>




</>

  )
}

export default Home
