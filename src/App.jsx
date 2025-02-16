import React, { useEffect, useState } from 'react'
import DotGroup from './scenes/DotGroup'
import Landing from './scenes/Landing'
import UseMediaQuery from './Hooks/UseMediaQuery'
import Navbar from './scenes/Navbar'
import LineGradient from './Component/LineGradient'
import MySkills from './scenes/MySkills'
import Projects from '../src/scenes/Projects'
import Testimonials from './scenes/Testimonials'
import Footer from './scenes/Footer'
import Netflix from './Projects/Netflix/Netflix'
import Pass from './Projects/PasswordGenarator/Pass'
import Passnew from './Projects/PasswordGenarator/Passnew'
import Button from './Projects/RandomColor/Button'
import RandomColor from './Projects/RandomColor/RandomColor'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoteTaking from './Projects/NoteTaking/NoteTaking'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreen = UseMediaQuery('(min-width: 1060px)')
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY == 0) setIsTopOfPage(true)
      if (window.scrollY != 0) setIsTopOfPage(false)
      // if (window.scrollY == 0) setSelectedPage('home');
      // if (window.scrollY == 500) setSelectedPage('skills');
      // if (window.scrollY == 1000) setSelectedPage('projects');
      // if (window.scrollY == 2000) setSelectedPage('testimonials');
      // if (window.scrollY == 3000) setSelectedPage('content');
    }
    window.addEventListener('scroll', handelScroll)
    return () => window.removeEventListener('scroll', handelScroll)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-deep-blue">
                <Navbar
                  isTopOfPage={isTopOfPage}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className="w-5/6 mx-auto md:h-full">
                  {isAboveMediumScreen && (
                    <DotGroup
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  )}
                  <Landing setSelectedPage={setSelectedPage} />
                </div>
                <LineGradient />
                <div className="w-5/6 mx-auto md:h-full">
                  <MySkills />
                </div>
                <LineGradient />
                <div className="w-5/6 mx-auto">
                  <Projects />
                </div>
                <LineGradient />
                <div className="w-5/6 mx-auto md:h-full">
                  <Testimonials />
                </div>
                <LineGradient />
                <div>
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route path="/Netflix" element={<Netflix />} />
        </Routes>
        <Routes>
          <Route
            path="/Logical/1"
            element={
              <div>
                <Passnew />
              </div>
            }
          />
          <Route
            path="/Logical/2"
            element={
              <div>
                <Pass />
              </div>
            }
          />
          <Route
            path="/Logical/3"
            element={
              <div>
                <Button />
              </div>
            }
          />
          <Route
            path="/Logical/4"
            element={
              <div>
                <RandomColor />
              </div>
            }
          />
        </Routes>
        <Routes>
          <Route path="/NoteTaking" element={<NoteTaking />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
