import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

function ForthPage() {

    
    const paragraph  = [    
        {discription:"Lorem 1 ipsum dolor sit, amet consectetur adipisicing elit. Assumenda harum corrupti atque laboriosam voluptatibus alias impedit animi, fugit fuga vero, corporis tempora voluptas at similique necessitatibus dolorum! At, deserunt inventore."},
        {discription:"Lorem 2 ipsum dolor sit, amet consectetur adipisicing elit. Assumenda harum corrupti atque laboriosam voluptatibus alias impedit animi, fugit fuga vero, corporis tempora voluptas at similique necessitatibus dolorum! At, deserunt inventore."},
        {discription:"Lorem 3 ipsum dolor sit, amet consectetur adipisicing elit. Assumenda harum corrupti atque laboriosam voluptatibus alias impedit animi, fugit fuga vero, corporis tempora voluptas at similique necessitatibus dolorum! At, deserunt inventore."},
        {discription:"Lorem 4 ipsum dolor sit, amet consectetur adipisicing elit. Assumenda harum corrupti atque laboriosam voluptatibus alias impedit animi, fugit fuga vero, corporis tempora voluptas at similique necessitatibus dolorum! At, deserunt inventore."},
    ]

    const [Slider , setSlider] = useState(0)

    function handleSlide(index){
     setSlider(index)
    }

  useEffect( () => {const timer = setTimeout(()=>{setSlider(prev => (prev+1) % paragraph.length ) ; } , 5000);} , [Slider])
    
    
      return (
        <div className='slider h-[400px] w-full bg-green-400 text-center justify-center flex items-center'>
        <div className='w-[800px] font-bold text-[30px] text-red-700'>
        {paragraph[Slider].discription}

        <div className='top-[150px] justify-center items-center text-center flex relative gap-5'>

        {paragraph.map((_ , index) => (
    
         <div
         key={index}
         className={`w-3 h-3 flex justify-center items-center text-center  rounded-full cursor-pointer ${Slider === index ? 'bg-red-700 w-4 h-4' : 'bg-gray-700' } `}
        onClick={()=>handleSlide(index)}
        >
        </div>
        ))}

        

        </div>

        </div>       
        </div>
      );
    }
    
    export default ForthPage
    


 
