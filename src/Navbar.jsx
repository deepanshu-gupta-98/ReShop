import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Samsung</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about us">about us</Link>
                            </li>
                        </ul>
                    </div>
                        <div className='me-2'>
                            <input type="text" placeholder='Search' className="navbar-brand" href="#"/>
                         <input type="button" value="search" className='mx-1'/>
                     </div> 
                     <Link to="/"> <button className="btn btn-success">Signup</button></Link>
                </div>
            </nav>
        </>
    )
}


export default Navbar