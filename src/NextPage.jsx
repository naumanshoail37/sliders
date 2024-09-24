import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {motion} from "framer-motion"

function NextPage() {
const [Counter , setCounter] = useState(0)
const increase  = () => {
    setCounter(Counter+1)
}

const decrease  = () => {
    setCounter(Counter-1)
}



useEffect(()=>{console.log('The count is :' , Counter  )} , [Counter])




    return (
    <div>
      
      <h1>This is new page</h1> <br />
      <h1> Count : {Counter} </h1>
      <button onClick={increase}>INCREAMENT</button>
      <br />
      <button onClick={decrease}>DECREMENT</button>

 <motion.div 
 className='box1 h-[150px] w-[200px] m-10 bg-blue-300'
style={{

    opacity:0.2
}}

 animate = {{
    x:750,
    opacity:3
 }}


>

 </motion.div>




    </div>




  );
}

export default NextPage

