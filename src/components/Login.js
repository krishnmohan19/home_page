import React, { useState } from 'react'
import myimage from './myimage.svg'
import axios from 'axios'
function Login() {

  const [userDetail,setUserDetail]=useState({
    email:"",
    password:""
  })
   
  function handleChange(event){
    event.preventDefault();
      const {name,value}=event.target;

      setUserDetail(pre=>{
       return { ...pre,
        [name]:value}
      })
  }

  function handleClick(event){
    
    axios.post("/login", userDetail)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div id="content" className=" d-flex" style={{ height: "100vh" }}>

        <div id="loginpart" className='d-flex justify-content-center align-items-center'>
          
          <div id="mainbox" className=' d-flex-column justify-content-center'>
            <h1 className='text-center fw-bold'>Welcome Back</h1>
            <p className='text-center text-dark mt-0'>Sub-title text goes here</p>

            <div className='d-flex justify-content-center mt-4 inputDiv'>
              <input id="email" type="email" className='ps-2 inputBox' placeholder='Email Address *' name='email' value={userDetail.email?? ""} onChange = {handleChange} />
            </div>

            <div className='d-flex justify-content-center mt-2 inputDiv'>
              <input id="password" type="password" autoComplete='false' className='ps-2 inputBox' placeholder='Password *' name='password' value={userDetail.password?? ""} onChange = {handleChange} />
            </div>

            <div className='d-flex justify-content-center mt-2 inputDiv'>
              <button  className='text-white inputBox click' onClick={handleClick}>Login</button>
            </div>

            <div className='d-flex justify-content-between mt-2 mx-auto inputDiv' style={{ width: "90%"}} >

              <div className="d-flex justify-content-top">
              <label htmlFor='checkbox' id="rp" className='checkBox'><input type="checkbox" id="cb" className='checkBoxInput' style={{accentColor:"#16395c"}}/> Remember Password</label>
              </div>

              <a href='#' className='checkBox'>Forgot Password?</a>
            </div>

          </div>

        </div>

        <div id="imagepart">
          <img src={myimage} alt="..." />
        </div>
      </div>
  )
}

export default Login