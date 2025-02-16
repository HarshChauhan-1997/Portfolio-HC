import AnchorLink from 'react-anchor-link-smooth-scroll'
import UseMediaQuery from '../Hooks/UseMediaQuery'
import { useState } from 'react'

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase()
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''} hover:text-yellow duration-500 transition`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage)
      }}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggle, setIsMenuToggle] = useState(false)
  const isAboveSmallScreen = UseMediaQuery('(min-width: 768px)')
  const navBarBG = isTopOfPage ? '' : 'bg-red'

  return (
    <>
      <nav
        className={`${navBarBG} transition duration-300 z-40 w-full fixed top-0 py-6`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">HC</h4>

          {/* DESKTOP NAV */}
          {isAboveSmallScreen ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Cv"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
                  fill="white"
                />
              </svg>
            </button>
          )}

          {/* MOBILE MENU */}
          {!isAboveSmallScreen && isMenuToggle && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
              {/* CLOSE ICONE */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                      fill="white"
                      fillOpacity="0.54"
                    />
                  </svg>
                </button>
              </div>

              {/* MENU ICONS */}
              <div className="flex flex-col gap-[10px] ml-[33%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
