import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function NextPage() {
    const [Counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(Counter + 1);
    };

    const decrease = () => {
        setCounter(Counter - 1);
    };

    useEffect(() => { console.log('The count is:', Counter); }, [Counter]);

    const [IsAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
    };

    const boxVariant = {

        Lion: {
            x:500,
            scale: 1,
            transition:{duration:2},
            rotate:180
            
        }
    }

    const boxVariant1 = {
        hidden: {
            x: -1000,
            transition: { delay: 1 },
        },
        visible: {
            x: 200,
            transition: { when: "beforeChildren", staggerChildren: 1.5 }, // Stagger set to 1.5 seconds
        }
    };

    const ListController = {
        hidden: {
            x: -10,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 0.7,
            transition: { duration: 0.5 }, //  transition duration for individual items
        }
    };

    return (
        <div>
            <h1>This is the new page</h1>
            <h1>Count: {Counter}</h1>
            <button onClick={increase}>INCREMENT</button>
            <button onClick={decrease}>DECREMENT</button>
            <div className='text-center justify-center'>
                <Link to='/SecondPage'>
                    <button>Click here to go to the second page of slider</button>
                </Link>
            </div>

            <motion.div
                className='box1 h-[150px] w-[200px] m-10 bg-blue-300'
                style={{ opacity: 0.4 }}
                animate={{
                    x: IsAnimating ? 1000 : 400,
                    scale: 1.5,
                    opacity: 3,
                    rotate: 360,
                }}
                initial={{
                    opacity: 0.2,
                    y: 100,
                    backgroundColor: "blueviolet"
                }}
                transition={{
                    stiffness: 100,
                    type: "spring",
                }}
                onClick={handleClick}
            />

            <motion.div className='box2 h-[150px] w-[200px] m-10 bg-blue-300'
                drag
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.2 }}
                dragConstraints={{ right: 50, bottom: 0, left: 0, top: 50 }}
            />

            <motion.div className='box3 h-[150px] w-[200px] m-10 bg-blue-300'
                drag
                dragConstraints={{ left: 40, right: 40, top: 0, bottom: 0 }}
                variants={boxVariant}
                animate="Lion"
               
                
            
            />

            <motion.div
                className='box4 m-10 mb-10 h-[150px] w-[200px] bg-blue-300 flex flex-row items-center justify-center'
                variants={boxVariant1}
                animate="visible"
                initial="hidden"
            >
                <ul className='flex flex-col gap-4'>
                    {[1, 2, 3].map((box, index) => (
                        <motion.li
                            key={index}
                            className='h-7 w-9 bg-white'
                            variants={ListController}
                        >
                           
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}

export default NextPage;
