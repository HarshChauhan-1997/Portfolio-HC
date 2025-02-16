import React from 'react'
import LineGradient from '../Component/LineGradient'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../assets/img.js'
import { VideoPlayer } from '../utils/VideoPlayer.jsx'
import ProjectWork from './ProjectWork.jsx'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const projectVariants = {
  visible: { opacity: 1, scale: 1 },
}

const Project = ({ title, links, href, subtitle, to, GD }) => {
  const projectTitle = title.split(' ').join('-').toLowerCase()
  const overLayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition durations-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`

  return (
    <motion.div variants={projectVariants} className="relative">
      <div className={overLayStyles}>
        <p className="text-2xl font-playfair underline">
          <Link to={to}>{title}</Link>{' '}
          <a
            className="text-sm font-bold bg-red text-white rounded-[5px]"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {links}
          </a>
        </p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img src={GD} alt={projectTitle} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48 flex flex-col gap-24">
      {/* HEADING */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          My development journey began with mastering core web technologies -
          HTML, CSS, and JavaScript. Through hands-on projects and platform
          clones, I built a strong foundation in frontend development while
          exploring modern frameworks and best practices.
          <br />
          <br />
          Diving deep into mobile development, I specialized in React Native,
          creating sophisticated applications with complex state management
          using Redux and Redux Saga. My expertise expanded to implementing
          advanced features like real-time data synchronization with Firestore,
          optimized API integrations, and platform-specific implementations for
          both iOS and Android.
          <br />
          <br />
          Most recently, I developed a comprehensive Cricket App that showcases
          my proficiency in building production-ready mobile applications. This
          project features real-time score updates, complex UI implementations,
          efficient data management, and cross-platform subscription systems. I
          implemented sophisticated features like rate-limited API calls,
          pagination systems, and platform-specific in-app purchase flows,
          demonstrating my ability to handle complex mobile development
          challenges.
        </p>
      </motion.div>

      <ProjectWork />

      {/* PROJECTS */}
      <div className="flex flex-col gap-5">
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-red">Movie</span>App
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-1/3" />
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center flex-row items-center">
          <motion.div
            className="grid sm:grid sm:grid-cols-5 gap-5 justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={container}
          >
            <VideoPlayer video={projects.Movie_1} />
            <VideoPlayer video={projects.Movie_2} />
            <VideoPlayer video={projects.Movie_3} />
            <VideoPlayer video={projects.Movie_4} />
            <VideoPlayer video={projects.Movie_5} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
