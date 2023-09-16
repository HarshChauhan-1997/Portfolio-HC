import React from 'react'
import UseMediaQuery from '../Hooks/UseMediaQuery';
import LineGradient from '../Component/LineGradient';
import { motion } from 'framer-motion';

const MySkills = () => {
    const isAboveMediumScreens = UseMediaQuery('(min-width:1060px)');
  return (
    <section id="skills" className="pt-10 pb-24">
        {/* HAEDER AND IMG SECTION */}
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div className="md:w-1/3" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x:0},
                }}>
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY{" "}
                    <span className="text-red">
                        SKILLS
                    </span>
                </p>
                <LineGradient width="w-1/3"/>
                <p className="mt-10 mb-7">
                    <span className="text-blue">HTML5, CSS3, JavaScript</span>{" | "}
                    <span className="text-red">Responsive Web Design</span>{" | "}
                    <span className="text-yellow">Basic knowledge of front-end libraries and frameworks</span>{" | "}
                    <span className="text-blue">Problem-solving and logical thinking</span>{" | "}
                    <span className="text-red">Strong communication and collaboration skills</span>{" | "}
                    <span className="text-yellow">Eagerness to learn and adapt to new technologies</span>
                </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
                {isAboveMediumScreens ? (
                    <div className="relative z-10 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img className="z-10" src="./src/skills-image.png" alt="Skills" />
                    </div>
                ) : (
                    <img className="z-10" src="./src/skills-image.png" alt="Skills" />
                )}
            </div>
        </div>
        {/* SKILLS */}
        <div className="md:flex md:justify-center mt-16 gap-32">
            {/* EXPERIENCE */}
            <motion.div className="md:w-1/3 mt-10" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{duration:0.5}} variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y:0},
                }}>
                    <div className="relative h-32 z-10">
                        <div className="">
                            <p className="font-playfair font-semibold text-5xl">01</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Skills Development</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                    I am actively working on enhancing my skills through online courses and self-study. My focus is on mastering front-end technologies, deepening my knowledge of JavaScript, and exploring popular libraries and frameworks like React and Angular. (Reference: <a className="text-blue underline" target="_blank" href="https://www.youtube.com/@ApnaCollegeOfficial">Apna College</a>, <a className="text-blue underline" target="_blank" href="https://www.youtube.com/@chaiaurcode">Chai aur code</a>, <a className="text-blue underline" target="_blank" href="https://www.youtube.com/@thesheryianscodingschool">The sheryians coding school</a>)
                    </p>
            </motion.div>

            {/* INNOVATIVE */}
            <motion.div className="md:w-1/3 mt-10" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y:0},
                }}>
                    <div className="relative h-32 z-10">
                        <div className="">
                            <p className="font-playfair font-semibold text-5xl">02</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Innovative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                    I am an innovative web developer with a relentless passion for pushing the boundaries of what's possible on the web. With a proven track record of creating unique and engaging web experiences, I thrive on leveraging cutting-edge technologies and creative thinking to bring concepts to life. My goal is to deliver web solutions that not only meet but exceed client expectations, setting new standards for innovation and user engagement.
                    </p>
            </motion.div>

            {/* IMAGINATIVE */}
            <motion.div className="md:w-1/3 mt-10" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.4, duration:0.5}} variants={{
                    hidden: {opacity: 0, y: 50},
                    visible: {opacity: 1, y:0},
                }}>
                    <div className="relative h-32 z-10">
                        <div className="">
                            <p className="font-playfair font-semibold text-5xl">03</p>
                            <p className="font-playfair font-semibold text-3xl mt-3">Imaginative</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                    I am an imaginative web developer who combines a flair for creativity with strong technical skills to craft web experiences that captivate and inspire. With a background in both design and development, I thrive on pushing the boundaries of what's possible on the web. My passion lies in turning innovative ideas into visually stunning and interactive realities, creating digital experiences that leave a lasting impact.
                    </p>
            </motion.div>
        </div>
    </section>
  )
}

export default MySkills