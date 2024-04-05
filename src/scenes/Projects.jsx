import React from 'react'
import LineGradient from '../Component/LineGradient';
import { motion } from 'framer-motion';
import {
    Link,
  } from "react-router-dom";
import {projects} from "../assets/img.js"

const container = {
    hidden:{},
    visible:{
        transition:{staggerChildren: 0.2}
    }
};

const projectVariants = {
    visible:{opacity: 1, scale: 1}
};

const Project = ({title, links, href, subtitle, to, GD}) => {
    const projectTitle = title.split(" ").join("-").toLowerCase();
    const overLayStyles =`absolute h-full w-full opacity-0 hover:opacity-90 transition durations-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <motion.div variants={projectVariants} className="relative">
            <div className={overLayStyles}>
                <p className="text-2xl font-playfair underline">
                    <Link to={to}>{title}</Link>{" "}
                    <a className="text-sm font-bold bg-red text-white rounded-[5px]" href={href} target="_blank" rel="noreferrer">{links}</a>
                </p>
                <p className="mt-7">
                    {subtitle}
                </p>
            </div>
            <img src={GD} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
        {/* HEADING */}
        <motion.div className="md:w-2/5 mx-auto text-center" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={{
                    hidden: {opacity: 0, y: -50},
                    visible: {opacity: 1, y:0},
                }}>
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-red">
                            PRO
                        </span>JECTS
                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3"/>
                    </div>
                </div>
                <p className="mt-10 mb-10">
                    for self development in coding all of this mention projects is explain my journey from starting with simple HTML,CSS and javascript 
                    to tailwind css, responsive design, javascript logics, Dom manipulation, Oops Concepts, bit manipulations, and then javascript library 
                    like react js on node.js framework. below is all of this projects.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div className="sm:grid sm:grid-cols-3" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration:0.5}} variants={container}>
                    {/* ROW-1 */}
                    <div className="flex justify-center items-center text-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" GD={projects.project_1}
                    subtitle="Netflix Project: Build by using tailwind css library. Main focus to learn tailwind css as well as make responsive web by using tailwind."
                    to="/Netflix"
                    />
                    <Project title="Project 2" links="Click Me" GD={projects.project_2}
                    subtitle="Amazon Project: Build by using simple HTML & CSS. Main focus to learn website design by using simple HTML & CSS. first project."
                    href="https://amazon-clone-liart-one.vercel.app/"
                    />
                    
                    {/* ROW-2 */}
                    <Project title="Project 3" GD={projects.project_3}
                    subtitle="Note Taking: in this project use simple java script to create logical properties with html & css combinations."
                    to="/NoteTaking"
                    />
                    <Project title="Project 4" links="Click Me" GD={projects.project_4}
                    subtitle="MovieApp: Explore the world of cinema with my React Native movie app, powered by Redux and Redux Saga for advanced state management. Integrated with the TMDB API, it offers personalized recommendations, intuitive navigation, and advanced search options. Bookmark your favorites and enjoy a seamless movie-watching experience on the go."
                    href="https://drive.google.com/file/d/1wGDC8wYchULuOfz-1BaT7S4e8bXzHYVi/view?usp=sharing"
                    />
                    <Project title="Project 5" links="Click Me" GD={projects.project_5}
                    subtitle="Animated Web: In this project use css to build animated properties of web as well as use java script to create animated properties."
                    href="https://animated-website-lilac.vercel.app/"
                    />

                    {/* ROW-3 */}
                    <Project title="Project 6" GD={projects.project_6}
                    subtitle="Logical Project: Random Password Generation and RandomColor Generation Projects : Main focus of those projects are to build batter understanding of the hooks of react, state changes, virtual dom, fiber and logical programming"
                    to="/Logical/1"
                    />
                    <Project title="Project 7" GD={projects.project_7}
                    subtitle="Portfolio: finally, after all of this project time to build portfolio. for this i use ref: ${} to build this portfolio. by this project i properly understand of react-dom and fiber modules. using parameter's in functions and hooks."
                    to="/"
                    />
                    <div className="flex justify-center items-center text-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
    </section>
  )
}

export default Projects;