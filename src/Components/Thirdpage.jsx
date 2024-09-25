import React from 'react'
import { useState, useEffect } from 'react'
import slider1 from "../Components/PICS/SliderPics/page3slider1.jpg"
import slider2 from "../Components/PICS/SliderPics/page3slider2.jpg"
import slider3 from "../Components/PICS/SliderPics/page3slider3.jpg"
import slider4 from "../Components/PICS/SliderPics/page3slider4.jpg"
import { Link } from 'react-router-dom'
const Thirdpage = () => {

    const images = [slider1, slider2, slider3, slider4]
    const [slider, setslider] = useState(0)
    useEffect(() => { const timer = setTimeout(() => { setslider((prev) => (prev === images.length - 1 ? 0 : prev + 1)) }, 5000) }, [slider])
    const handleSlider = (index) => {setslider(index);}


    return (
        <div className='slider'>

            <div className=''>

                <img src={images[slider]} alt=""
                    className='h-[1000px] w-full object-cover'
                />

                <div className=' flex justify-center space-x-4 m-10 '>
                    {images.map((_, index) => (

                        <div
                            key={index}
                            className={`w-3 h-3 md:mt-0 mt-5 md:ml-0 ml-[140px] rounded-full cursor-pointer  ${slider === index ? 'w-5 h-5 bg-red-700' : 'w-4 h-4 bg-gray-500'}`}
                        onClick= {()=>handleSlider(index)}
                        >
                        </div>
                    ))}
                </div>

                <Link to = '/'><button>go back to home page</button></Link>
            </div>
        </div>
    )
}

export default Thirdpage
