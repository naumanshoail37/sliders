import React, { useState, useEffect, } from 'react';
import { animate, motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import { delay } from 'framer-motion/dom';




function NextPage() {


    const Control = useAnimation()

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
            x: 500,
            scale: 1,
            transition: { duration: 2 },
            rotate: 180

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
        },
    };


    return (
        <div>
            <h1>This is the new page</h1>
            <h1>Count: {Counter}</h1>
            <button onClick={increase}>INCREMENT</button>
            <br />
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
                    {[1, 2, 3].map((_, index) => (
                        <motion.li
                            key={index}
                            className='h-7 w-9 bg-white'
                            variants={ListController}
                        >

                        </motion.li>
                    ))}
                </ul>
            </motion.div>



            <motion.div

                className=' box5 h-[200px] w-[200px] '

                initial={{
                    x: -900,
                    y: -500,
                    backgroundColor: "black"
                }}

                animate={{

                    x: 900,
                    y: -500,
                    rotate: 500,
                    transitionDelay: 2,
                    backgroundColor: 'grey',
                    stiffness: 4,
                    type: "spring",


                }}

                whileHover={{

                    scale: 1.5,

                }}

                whileTap={{

                    scale: 1.2,
                }}

                transition={{

                    delay: 1.8,
                    duration: 1
                }}

                style={{

                    listStyleType: 'none',
                }}


            >
                <div className='flex  justify-center items-center h-[200px]'>
                    <ul className='flex space-x-2'>
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <motion.li
                                className='flex justify-center items-center  h-8 w-8 bg-white rounded-full space-x-2'
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }} // Start hidden
                                animate={{ opacity: 0.5, scale: 0.5 }} // Animate to visible
                                transition={{ duration: 3, delay: 3 }} // Add delay based on index
                            >

                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            <motion.div

                className='h-[150px] w-[150px] bg-blue-700'



                initial={{ x: 1600, y: -700 }}
                animate={{ scale: [1.6, 1.2, 0.4, 1.1, 1.6, 2], borderRadius: ["30%", "20%", "5%", "15%", "30%", "50%"], x: 1250, y: -700, rotate: [250, 200, 100, 30, 600, 230, 500] }}

                transition={{ duration: 4 }}
            >
            </motion.div>

            <div className='box relative bottom-[1130px] left-[900px]'>


                <button onClick={() => {

                    Control.start({
                        x: -250,
                        transition: { duration: 1.5 }
                    })


                }} className='border-2 border-blue-200 bg-blue-950 w-[70px] h-[40px] border-b-4'>left</button>
                <button onClick={() => {

                    Control.start({

                        x: 250,
                        transition: { duration: 1.5 }
                    })

                }}
                    className='border-2 border-blue-200 bg-blue-950 w-[70px] h-[40px] border-b-4'>right</button>
                <button onClick={() => {

                    Control.start({

                        borderRadius: 300,
                        transition: { duration: 1.5 },
                    })

                }}

                    className='border-2 border-blue-200 bg-blue-950 w-[70px] h-[40px] border-b-4'>circle</button>
                <button onClick={() => {

                    Control.start({

                        borderRadius: 2
                    })

                }}

                    className='border-2 border-blue-200 bg-blue-950 w-[70px] h-[40px] border-b-4'>square</button>
                <button onClick={() =>{

                 Control.stop({

                    x:0
                 })

                }} 
                
                className='border-2 border-blue-200 bg-blue-950 w-[70px] h-[40px] border-b-4'>stop</button>

                <motion.div

                    className='bg-blue-800 h-[100px] w-[100px] mt-[50px] ml-[150px]'
                    animate={Control}

                >
                </motion.div>
            </div>



        </div>


    );
}

export default NextPage;
