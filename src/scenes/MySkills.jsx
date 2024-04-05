import React from 'react'
import UseMediaQuery from '../Hooks/UseMediaQuery';
import LineGradient from '../Component/LineGradient';
import { motion } from 'framer-motion';
import skills from "../assets/skills-image.png"

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
                    <span className="text-blue">React-JS</span>{" | "}
                    <span className="text-red">React-Native</span>{" | "}
                    <span className="text-yellow">HTML5, CSS3, JavaScript, Tailwind</span>{" | "}
                    <span className="text-blue">API, Redux, Redux_Saga, GraphQL</span>{" | "}
                    <span className="text-red">Node.js, MongoDB</span>{" | "}
                    <span className="text-yellow">Xcode, Android Studio</span>
                </p>
            </motion.div>
            <div className="mt-16 md:mt-0">
                {isAboveMediumScreens ? (
                    <div className="relative z-10 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
                        <img className="z-10" src={skills} alt="Skills" />
                    </div>
                ) : (
                    <img className="z-10" src={skills} alt="Skills" />
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
                            <p className="font-playfair font-semibold text-3xl mt-3">React-JS / React-Native</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        I have extensive experience in React and React Native, having contributed to projects such as a voice clone web application and logic development in React JS, as well as the development of 'Zive: Health' and 'prev: salon' app. Additionally, I created my own MovieApp using React Native, honing my logical thinking, coding standards, and design skills. Throughout these endeavors, I adeptly utilized tools like Jira, Git, and Bitbucket. (Git-repo: <a className="text-blue underline" target="_blank" href="https://github.com/HarshChauhan-1997/MovieApp">MovieApp</a>, <a className="text-blue underline" target="_blank" href="https://github.com/HarshChauhan-1997/Portfolio-HC">Portfolio</a>)
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
                            <p className="font-playfair font-semibold text-3xl mt-3">API / Redux / Redux-Saga / GraphQL</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        I have actively engaged in API integration, proficiently employing methods such as GET, POST, PUT, and DELETE. Utilizing tools like Postman, I ensured seamless testing and validation of APIs. Furthermore, I adeptly managed API calls through Redux and middleware, primarily leveraging Redux-Saga. My experience predominantly revolves around GraphQL APIs, where I've demonstrated proficiency in data fetching and manipulation for efficient application development.
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
                            <p className="font-playfair font-semibold text-3xl mt-3">Xcode / Android Studio</p>
                        </div>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]"/>
                    </div>
                    <p className="mt-5">
                        My portfolio also encompasses experience with industry-standard build tools such as Xcode for iOS development and Android Studio for Android applications. I have adeptly navigated Xcode's TestFlight and certification processes, ensuring seamless testing and deployment of iOS apps. Additionally, my proficiency extends to the Google Play Console, where I've successfully uploaded test apps for beta (internal testing) as well as production releases, guaranteeing a smooth user experience across platforms.
                    </p>
            </motion.div>
        </div>
    </section>
  )
}

export default MySkills