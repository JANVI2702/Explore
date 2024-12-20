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
    
    
      <body className='bg-dark bg-gradient' >
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
          <div className='bg-transparent text-center'>
            <div className='card '>
           <Country country={country} state={state} city={city} />
           </div>
          
            <h1 className='text-info mt-5'>Component Lifecycle</h1>
             <div className=' '>
            <p className='text-white fw-normal fs-5 '>count : {count}</p>
            <button className='btn btn-outline-info' onClick={()=> handleIncrement()} >Increase</button>
             {isActive?<Text1/>:<Text2/>}
            <button className="btn btn-outline-info fw-normal  " onClick={()=>setActive(!isActive)}>Change</button>
            </div>
          </div>
        </div>
      </body>
    
    
  )
}

export default App