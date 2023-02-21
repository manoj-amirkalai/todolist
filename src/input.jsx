import React, { useState } from 'react'

function InpuText (props){
    const [inputext,setInputext]=useState("")
    const handlechange=(e)=>{
        setInputext(e.target.value)
    }
    const handlesubmit=()=>{
        props.additems(inputext)
        setInputext("")
    }
    
  return (
    <div className='input'>
      <input type="text" onChange={handlechange} value={inputext}/>
      <button onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default InpuText
