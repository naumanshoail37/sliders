import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


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
    </div>
  );
}

export default NextPage

