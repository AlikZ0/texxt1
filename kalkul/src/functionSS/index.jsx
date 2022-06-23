import React from "react";
import { useState } from "react";
const FunctionSS =()=>{
    const [inputTitle,setMe]=useState ({
        firstName : '',
        lastName :''
        
    })
    const [arr, setArr]=useState([])
    // const [inputDes,setDes]=useState('')
   const handleChange = (e)=>{
    setMe({
        ...inputTitle,
        [e.target.name]:e.target.value
    })
   }
 
    const foo3 =()=>{
         arr.push({
            title:inputTitle.firstName,
            descriotion: inputTitle.lastName 
          
         })
         setArr(arr)
        console.log(inputTitle)
        console.log(arr)
    }
    
   
    return <div>
        <input type="text" name="firstName" value={inputTitle.firstName} onChange={handleChange}/><br/>
        <input type="text" name="lastName" value={inputTitle.lastName} onChange={handleChange}/><br/>
        <button onClick={foo3}>clik me</button><br/>
        <span>{inputTitle.firstName} "    2   "{inputTitle.lastName   }</span>
    </div>
}
export default FunctionSS