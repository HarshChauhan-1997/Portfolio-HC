import React from 'react'
import LineGradient from '../Component/LineGradient';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const testimonialsStyle = `mx-auto relative max-w-[400px] h-[250px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;
  return (
    <section id="testimonials" className="pt-32 pb-16">
        {/* HEADING */}
        <motion.div className="md:w-1/3 text-center md:text-left" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x:0},
                }}>
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    GAMES
                </p>
                <LineGradient width="w-2/4"/>
                <p className="mt-10">
                    Some, games created by simple html and css using java script. in this games project i practice backtracing, loops and animations updating by java script. if you like you can play.
                </p>
            </motion.div>

            {/* TESTIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
            <motion.div className={`bg-blue ${testimonialsStyle} before:content-person1`} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration:0.5}} variants={{
                    hidden: {opacity: 0, scale: 0.8},
                    visible: {opacity: 1, scale:1},
                }}>
                    <p className="text-2xl font-bold ">
                        <a className="hover:text-yellow hover:bg-red hover:p-1 hover:rounded-md" href="https://snake-ecru-five.vercel.app/" target='_blank'>Click To Play</a>
                    </p>
                </motion.div>
                <motion.div className={`bg-red ${testimonialsStyle} before:content-person2`} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, scale: 0.8},
                    visible: {opacity: 1, scale:1},
                }}>
                    <p className="text-2xl font-bold ">
                        <a className="hover:text-red hover:bg-yellow hover:p-1 hover:rounded-md" href="https://tic-tac-toe-six-gold.vercel.app/" target='_blank'>Click To Play</a>
                    </p>
                </motion.div>
                <motion.div className={`bg-yellow ${testimonialsStyle} before:content-person3`} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.4, duration:0.5}} variants={{
                    hidden: {opacity: 0, scale: 0.8},
                    visible: {opacity: 1, scale:1},
                }}>
                    <p className="text-2xl font-bold ">
                        <a className="hover:text-blue hover:bg-red hover:p-1 hover:rounded-md" href="https://sudoku-game-iota-beryl.vercel.app/" target='_blank'>Click To Play</a>
                    </p>
                </motion.div>
            </div>
    </section>
  )
}

export default Testimonials