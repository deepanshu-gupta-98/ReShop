import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Contact() {
  const handleSubbmit=()=>{

  }
  return (
    <>
    <Navbar/>
    <div className='cuimg'>
    
      {/* <div className='text'>
  Contact no-8946973100
  <br/>
  Email-gupta.deepanshu082@gmail.com
  <br/>
  address-patel marg,mansarovar,jaipur
    </div> */}

    <div className='contactus'></div>
    <div className='contact'> 
    
<h1>Contact us</h1>

<div>
<label  className="form-label">Enter your name</label>
<input type="name" className="form-control" id="name" placeholder='Name'/>
</div>
<br/>
<div>
<label className="form-label">Enter your email</label>
<input type="name" className="form-control" id="name" placeholder='Email '/>
</div>
<br/>
<div>
<label className="form-label">What can be help ypu with?</label>
<input type="name" className="form-control" id="name" placeholder='write..'/>
</div>
<br/>
<button  className='btn btn-success'onClick={handleSubbmit}>Send</button>
</div>
</div>


<Footer/>



    </>
  )
}

export default Contact