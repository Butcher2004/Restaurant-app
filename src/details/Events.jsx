import React from 'react'
import '../css/business.css'

function Events({title, desc, sd, st, ed, et, desclaim}) {
  return (
    <div className="business">
        
        <div className="eleme">
            <h1>Event Title</h1>
            <p>{title}</p>
        </div>
        <div className="eleme">
            <h1>Description</h1>
            <p>{desc}</p>
        </div>
        <div className="eleme">
            <h1>Start Date and Time</h1>
            <p>G{sd} and {st}</p>
        </div>
        <div className="eleme">
            <h1>End Date and Time</h1>
            <p>{ed} and {et}</p>
        </div>
        <div className="eleme">
            <h1>Desclaimer</h1>
            <p>{desclaim}</p>
        </div>
    </div>
  )
}

export default Events