import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Paragraphs = [

    {discription:"hello my name is nauman"},
    {discription:"I worked in Collectum Solution"},
    {discription:"I studied from university of central punjab"},

]
function SecondPage() {

const
 [Paragraph , setParagraphs] = useState(0)
useEffect (() => {const timer = setTimeout(()=> {setParagraphs(prev => (prev + 1 ) % Paragraphs.length ) ;  
} , 5000);} ,  [Paragraph]);


const handleBulletClick = (index) => {setParagraphs(index);} ;

  return (
    <div>
    <div className='bg-black h-[500px] items-center text-[50px] text-red-700 font-bold font-serif flex text-center justify-center'>
    {Paragraphs[Paragraph].names} 
    <br />
    {Paragraphs[Paragraph].discription}
   
    <div className=" absolute bottom-[400px] flex  space-x-4">
        {Paragraphs.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3  rounded-full cursor-pointer
            ${Paragraph === index ? ' bg-red-600 h-4 w-4' : 'bg-gray-500'
            }`}
            onClick={() => handleBulletClick(index)}
          />
          
        ))}
      </div>
</div>
<div className='m-10 text-center justify-center'>
<Link to = "/ThirdPage"><button>Go to slider number 3 / page 3</button></Link>
</div>
</div>
);
}
export default SecondPage
