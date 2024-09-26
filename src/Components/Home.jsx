import React from 'react'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react'
import slider1 from "../Components/PICS/SliderPics/Slider1.jpg"
import slider2 from "../Components/PICS/SliderPics/Slider2.jpg"
import slider3 from "../Components/PICS/SliderPics/Slider3.jpg"
import slider4 from "../Components/PICS/SliderPics/Slider4.jpg"

const images  = [ slider1 , slider2 , slider3 , slider4 ]

function Home() {

  const   [CurrentSlider , setCurrentSlider] = useState(0)

    useEffect(()=>{ const timer = setTimeout(()=>  { setCurrentSlider((prev) => (prev === images.length - 1 ? 0 : prev + 1 ));
    } , 5000) } , [CurrentSlider])

    const handleBulletClick  = (index) => {setCurrentSlider(index);}
        
  return (
    <div>
      <h1 className='text-center flex justify-center font-bold font-serif text-[60px] text-red-700'>This is my home page</h1>
      <img src={images[CurrentSlider]} alt="" 
      className='h-[1500px] w-full object-cover'
      />



<div className='space-x-2 flex justify-center'>

{images.map ((_ , index) => (    
  <div
 
 key={index}
 className={`m-3 p-4 rounded-full cursor-pointer ${CurrentSlider===index ?  'bg-red-600' : 'bg-gray-500 '}`}
 onClick={() => handleBulletClick(index)}
/>
))}

</div>




     <Link to = "/NewPage"> <button>Click here to go to next page</button></Link>
     <br />
     <Link to = "/SecondPage"> <button>Click here to go to Second page</button></Link>
     <br />
     <Link to = "/ThirdPage"> <button>Click here to go to Third page</button></Link>
     <br />
     <Link to = "/ForthPage"> <button>Click here to go to Forth page</button></Link>
    </div>
  )
}

export default Home
