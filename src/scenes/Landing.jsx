import React from 'react'
import UseMediaQuery from '../Hooks/UseMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from "../Component/SocialMediaIcons"

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = UseMediaQuery('(min-width:1060px)');
  return (
    <>
    <section id="home" className='md:flex md:justify-between md:items-center md:h-full gap-16 py-20'>
      {/* IMAGE */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
            {isAboveMediumScreens ? (
                <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
                    <img className="hover:filter hover:saturate-200 duration-500 transition ease z-10 w-full max-w-[200px] md:max-w-[500px]" src="./src/profile-image.png" alt="Profile" />
                </div>
            ) : (
                <img className="hover:filter hover:saturate-200 duration-500 ease z-10 w-full max-w-[400px] md:max-w-[600px]" src="./src/profile-image.png" alt="Profile" />
            )}
        </div>

            {/* main section */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                {/* HEADING */}
                <motion.div initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration:0.5}} variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x:0},
                }}>
                    <p className="text-5xl font-playfair z-10 text-center md:text-start">
                        Harsh {""}
                        <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20">
                            <img className="absolute max-w-[250px] -left-[25px] -top-[78px] z-[-1]" src="./src/brush.png" alt="brush"/>
                            Chauhan
                        </span>
                    </p>
                    <p className="mt-10 mb-7 text-sm text-center md:text-start">
                    I am an enthusiastic and aspiring web developer with a strong foundation in web technologies and a genuine passion for coding. As a recent graduate, I am start my web development career and contribute to dynamic projects. I am committed to learning, adapting, and growing as a developer while delivering innovative and user-friendly web solutions.
                    </p>
                </motion.div>

                {/* call to action */}
                <motion.div className="flex mt-5 justify-center md:justify-start" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x:0},
                }}>
                    <AnchorLink className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500" onClick={() => setSelectedPage("contact")} href="#contact">
                        Contact Me
                    </AnchorLink>

                    <AnchorLink className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5" onClick={() => setSelectedPage("contact")} href="#contact">
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
                            Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div className="flex mt-5 justify-center md:justify-start" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.4, duration:0.5}} variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x:0},
                }}>
                    <SocialMediaIcons/>
                </motion.div>
            </div>
    </section>
    </>
  )
}

export default Landing;