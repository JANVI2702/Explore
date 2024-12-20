import React from 'react'
import City from './city'

function State({state,city}) {
  return (
    <div>

      <p className='fw-normal5 fs-5 '>Hello from : {state}</p>
      <City city={city}/>
    </div>
  )
}

export default State
