import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <div className=" bg p-5 ">
    <div className="container w-50 my-3 mt-2  p-5">
      <h1 className='text-center mb-3 text-white'>Login</h1>
    <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-white">Enter your email id</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email'/>
    <div id="emailHelp" className="form-text"></div>
    </div>

    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-white">Enter your password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter password'/>
  </div>

  <Link to="/Home"> <button type="submit" className="btn btn-primary">Login</button></Link>
  <Link to="/"> <button className="btn btn-success">Signup</button></Link>
  </div>
  </div>
    </>
  )
}

export default Login