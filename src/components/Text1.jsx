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
        
        
      <h2>hello from text 1</h2>
    </div>
  )
}

export default Text1
