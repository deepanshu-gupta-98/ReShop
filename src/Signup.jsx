import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import Login from "./Login"




function Signup() {
  const [user, setUser] = useState({})
  const [error, setError] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const regix_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const regix_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!*]).{8,}$/

  const handleChange = (e) => {
    if (e.target.name == 'terms')
      setUser({ ...user, [e.target.name]: e.target.checked })
    else
      setUser({ ...user, [e.target.name]: e.target.value })

  }


  const handleSubmit = () => {
    setIsSubmitted(true)
    

    if (verify()) {
      if (localStorage.getItem("regUsers")) {
        const storageusers = JSON.parse(localStorage.getItem("regUsers"))
        storageusers.push(user)
        localStorage.setItem("regUsers", JSON.stringify(storageusers))
        setIsSubmitted(false)
        alert('successful')
      }
      else {
        localStorage.setItem("regUsers", JSON.stringify([user]))
        setIsSubmitted(false)
        alert('successful')
      }

    }
    else {
      console.log("something went wrong");
    }
  }

  const verify = () => {
    let localError = {}
    let returnVerified = true

    const addErrmessage = (msg, key) => {
      localError[key] = msg;
      returnVerified = false;
    }

    const userExists = () => {
      let exists = false
      if (localStorage.getItem("regUsers")) {
        const existusers = JSON.parse(localStorage.getItem('regUsers'))
        existusers.forEach(e => {
          if (e.email === user.email)
            exists = true
        })
        return exists;
      }
    }

    if (!user.name) {
      addErrmessage("Name must be required", "name")
    }
    else if (user.name.length < 2) {
      addErrmessage("Name should be atleast 2 chars", "name")
    }

    if (!user.email) {
      addErrmessage("Email must be reqired", "email")
    }
    else if (!regix_email.test(user.email)) {
      addErrmessage("Please enter valid email formate", "email")
    }
    else if (userExists()) {
      addErrmessage("Email already exists", "email")
    }

    if (!user.password) {

      addErrmessage("Password must be reqired", "password")
    }
    else if (!regix_password.test(user.password)) {
      addErrmessage("Please enter valid password format", "password")
    }

    if (user.password != user.confirmpassword) {
      addErrmessage("Password must be same", "confirmpassword")
    }

    if (!user.terms) {
      addErrmessage("Must be check terms and conditions")
    }
    setError(localError)
    return returnVerified;


    // return returnVerified
  }

  console.log(error)

  useEffect(() => {
    verify()
  }, [user])



  return (
    <>
      <div className="background p-3" >
        <div className="container w-50 my-3 mt-5  p-2">
          <h1 className='text-center '>Create user</h1>

          <div className='form-group mb-3'>
            <label htmlFor="name" className="form-lable text-white">Enter your name</label>
            <input type="text" name="name" value={user.name} className="form-control" id="name" placeholder="Enter name" onChange={handleChange} />
            {isSubmitted && error.name && <p className='text-danger'>{error.name}</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-lable text-white">Enter your email address</label>
            <input type="text" name='email' value={user.email} className="form-control" id='email' placeholder="Enter email" onChange={handleChange} />
            {isSubmitted && error.email && <p className='text-danger'>{error.email}</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="pass" className="form-lable text-white">Enter password</label>
            <input type="password" name='password' value={user.pass} className="form-control" id='password' placeholder="Password" onChange={handleChange} />
            {isSubmitted && error.password && <p className='text-danger'>{error.password}</p>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="cpass" className="form-lable text-white"> Confirm password</label>
            <input type="password" name='confirmpassword' value={user.confirmpassword} className="form-control" id='password' placeholder=" Confirm Password" onChange={handleChange} />
            {isSubmitted && error.confirmpassword && <p className='text-danger'>{error.confirmpassword}</p>}
          </div>
          <div className="form-group mb-3 form-check">
            <input type="checkbox" name="terms" className="form-check-input" onChange={handleChange} />
            <label className="form-check-label text-white " htmlFor="exampleCheck1 ">Check me out</label>
            {isSubmitted && error.terms && <p className='text-danger'>{error.terms}</p>}
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-success" onClick={handleSubmit}>Sign up</button>
            
            <Link to="/Login"> <button className="btn btn-primary">Login</button></Link>
          <p style={{color:'#fff'}}>Already registered?</p>
          </div>
          <hr />
          <span>

          </span>
        </div>
      </div>

    </>
  )
}

export default Signup