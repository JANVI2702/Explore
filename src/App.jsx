import React, { useState , useEffect} from 'react'
import Country from './components/Country'
import Text1 from './components/Text1'
import Text2 from './components/Text2'

import './App.css'

function App() {
  const [country]=useState('Canada')
  const [state]=useState('Ontario')
  const [city]=useState('Toronto')
  // lifecycle
   const[count,setcount]=useState(0)
  const [isActive,setActive]=useState(true)

   useEffect(()=>{
  console.log("Render.."+count);
  return()=>{
    console.log("UnMount.."+count);
  }
 },[count])

 const handleIncrement=()=>{
    setcount(count+1)
    // setcount((prev)=>(prev+1))
  }
  return (
    
    
      <body>
     <Country country={country} state={state} city={city} />
     <hr />
    <h1>Component Lifecycle</h1>
    <h3>count{count}</h3>
    <button className="btn1" onClick={()=> handleIncrement()}>Increase</button>
      {isActive?<Text1/>:<Text2/>}
      <button className="btn1" onClick={()=>setActive(!isActive)}>Change</button>
      </body>
    
    
  )
}

export default App