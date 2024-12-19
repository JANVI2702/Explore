import React from 'react'
import City from './city'

function State({state,city}) {
  return (
    <div>

      <h2>hello From :{state}</h2>
      <City city={city}/>
    </div>
  )
}

export default State
