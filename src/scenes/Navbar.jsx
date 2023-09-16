import AnchorLink from 'react-anchor-link-smooth-scroll';
import UseMediaQuery from "../Hooks/UseMediaQuery";
import { useState } from 'react';

const Link = ({page, selectedPage, setSelectedPage}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow duration-500 transition`} href={`#${lowerCasePage}`} onClick={() => {setSelectedPage(lowerCasePage)}}>
      {page}
    </AnchorLink>
  )
}

const Navbar =({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const isAboveSmallScreen = UseMediaQuery("(min-width: 768px)");
    const navBarBG = isTopOfPage ? "" : "bg-red";

    return (
        <>
          <nav className={`${navBarBG} transition duration-300 z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
              <h4 className="font-playfair text-3xl font-bold">HC</h4>

              {/* DESKTOP NAV */}
              {isAboveSmallScreen ? (
                <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
              ) : (
              <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggle(!isMenuToggle)}>
                  <img alt='menu-icon' src='https://drive.google.com/uc?export=view&id=1ArYpijgsge0rNpiYlpSqPiW-yOe152Vk'/>
              </button>)}

              {/* MOBILE MENU */}
              {!isAboveSmallScreen && isMenuToggle && (
                <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
                  {/* CLOSE ICONE */}
                  <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                      <img alt='close-menu' src='https://drive.google.com/uc?export=view&id=1u-DuwC7tLnPXirSxXke0W8z63jo5IRHR'/>
                    </button>
                  </div>

                  {/* MENU ICONS */}
                  <div className='flex flex-col gap-[10px] ml-[33%] text-2xl text-deep-blue'>
                      <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                      <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                      <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                      <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                      <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </>
    )
}

export default Navbar;