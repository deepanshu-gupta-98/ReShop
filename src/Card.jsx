import React from 'react'

function Card(props) {
  return (
     <>
    <div className="card mb-1 mx-1">
        <img src={props?.data1.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props?.data1.heading}</h5>
            <p>{props.data1.desc}</p>
            <p2>{props.data1.price}</p2>
            <div className='d-flex '> <button on clik className='btn btn-primary mx-2'>Buy now </button> <br/>
             <br/><button on clik className='btn btn-success'>Add to cart</button> </div>
        </div>
    </div>

</>
  )
}

export default Card