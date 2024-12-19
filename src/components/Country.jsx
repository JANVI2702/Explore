import React from 'react'
import State from './state'


function Country({country,state,city}) {
  
  return (
    <div>
      <h1>Props Drealling</h1>
      <h2>HEllo from {country}</h2>
      <State state={state}  city={city}/>
    </div>
  )
}

export default Country
