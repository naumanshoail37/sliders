import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Paragraphs = [
  { discription: "hello my name is nauman" },
  { discription: "I worked in Collectum Solution" },
  { discription: "I studied from university of central punjab" },
];

function SecondPage() {
  const [Paragraph, setParagraphs] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setParagraphs((prev) => (prev + 1) % Paragraphs.length);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [Paragraph]);

  const handleBulletClick = (index) => {
    setParagraphs(index);
  };

  const [IsAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!IsAnimating); // Toggle between true and false on click
  };

  return (
    <div>
      <div className='bg-black h-[500px] items-center text-[50px] text-red-700 font-bold font-serif flex text-center justify-center'>
        {Paragraphs[Paragraph].discription}

        <div className="absolute bottom-[400px] flex space-x-4">
          {Paragraphs.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer
              ${Paragraph === index ? ' bg-red-600 h-4 w-4' : 'bg-gray-500'
                }`}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </div>
      </div>

      <div className='m-10 text-center justify-center'>
        <Link to="/ThirdPage"><button>Go to slider number 3 / page 3</button></Link>
      </div>

      <div className='box flex text-center justify-center mt-[-50px]'>
      
        <motion.div
          className='h-[200px] w-[200px] mt-10 mb-10 bg-blue-500'
        
          initial={{ x: -1000 , borderRadius:200 }}
          transition={{ duration: 2 }}
          animate={{ x: IsAnimating ? 1000 :0  , borderRadius:50 }} // Change between 1000 and 400 on click
          onClick={handleClick} // Trigger the animation on click
          
        >
       <h1 className='text-center w-[100px] flex-col justify-center items-center m-10'>click here if you are done</h1>
       
       </motion.div>
    </div>
    </div>
  );
}

export default SecondPage;
