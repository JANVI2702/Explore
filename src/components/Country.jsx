import React from 'react'
import State from './state'


function Country({country,state,city}) {
  
  return (
    <div>
      <h1>Props Drealling</h1>
      <p className='fw-normal5 fs-5' >Hello from : {country}</p>
      <State state={state}  city={city}/>
    </div>
  )
}

export default Country
