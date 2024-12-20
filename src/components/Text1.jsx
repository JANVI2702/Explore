import React, { useEffect } from 'react'

function Text1() {

    
    useEffect(()=>{
        console.log("HEllo...");
        return()=>{
            console.log("Bye...");
        }    
    },[])
  return (
    <div>
        
        
      <p className='text-white fs-5 mt-2'>hello from text : 1</p>
    </div>
  )
}

export default Text1
