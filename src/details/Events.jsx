import React from 'react'
import '../css/business.css'

function Events({title, desc, sd, st, ed, et, desclaim}) {
  return (
    <div className="business">
        
        <div className="eleme">
            <h1>Event Title</h1>
            <p>{title?title:"Null"}</p>
        </div>
        <div className="eleme">
            <h1>Description</h1>
            <p>{desc?desclaim:"Null"}</p>
        </div>
        <div className="eleme">
            <h1>Start Date and Time</h1>
            {sd? <p>{sd} and {st}</p>:<p>Null</p>}
        </div>
        <div className="eleme">
            <h1>End Date and Time</h1>
            {ed? <p>{ed} and {et}</p>:<p>Null</p>}
        </div>
        <div className="eleme">
            <h1>Desclaimer</h1>
            <p>{desclaim?desclaim:"Null"}</p>
        </div>
    </div>
  )
}

export default Events