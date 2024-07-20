import React from 'react'
import '../css/business.css'



function Business({locality, Pr, OnlineD, TableB, Blink, Plink, cur, ctwo}) {
  return (
    <div className="business">
        <div className="eleme">
            <h1>Locality</h1>
            <p>{locality}</p>
        </div>
        <div className="eleme">
            <h1>Price Range</h1>
            <p>{Pr}</p>
        </div>
        <div className="eleme">
            <h1>Has Online Delivery</h1>
            <p>{OnlineD}</p>
        </div>
        <div className="eleme">
            <h1>Has Table Booking</h1>
            <p>{TableB}</p>
        </div>
        <div className="eleme">
            <h1>Booking Website</h1>
            <p><a href= {Blink} style={{"color":'blue'}}>Booking Link</a></p>
        </div>
        <div className="eleme">
            <h1>Photos</h1>
            <p><a href = {Plink} style={{"color":'blue'}}>Photos Link</a></p>
        </div>
        <div className="eleme">
            <h1>Currency</h1>
            <p>In {cur} </p>
        </div>
        <div className="eleme">
            <h1>Average Cost for two</h1>
            <p>{ctwo}</p>
        </div>
        

    </div>
  )
}

export default Business