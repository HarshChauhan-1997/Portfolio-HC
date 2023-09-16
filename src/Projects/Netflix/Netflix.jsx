import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

const Netflix = () => {
  return (
    <>
    {/* <!-- page1 start--> */}
    <section id='Netflix' className="w-[100%] h-[90vh] bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-center bg-cover">
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
            <header className="max-w-[1170px] mx-auto">
                <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] pt-[25px] items-center">
                    <figure>
                        <img className="w-[150px]" src="Netflix_2015_logo.svg.png" alt=""/>
                    </figure>
                    <div className="flex justify-end gap-[25px]">
                        <div className="relative">
                            <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="default-ltr-cache-0 e1mhci4z1 text-white absolute top-[8px] left-[5px]" data-name="Globe" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.5C8.23033 14.5 8.84266 14.2743 9.48679 12.986C9.76293 12.4337 9.99973 11.7621 10.1748 11H5.8252C6.00027 11.7621 6.23707 12.4337 6.51321 12.986C7.15734 14.2743 7.76967 14.5 8 14.5ZM5.57762 9.5C5.52716 9.02077 5.5 8.51911 5.5 8C5.5 7.48089 5.52716 6.97923 5.57762 6.5H10.4224C10.4728 6.97923 10.5 7.48089 10.5 8C10.5 8.51911 10.4728 9.02077 10.4224 9.5H5.57762ZM11.7092 11C11.4822 12.1217 11.1317 13.117 10.6914 13.9184C12.0137 13.3161 13.0987 12.2837 13.7678 11H11.7092ZM14.3261 9.5H11.9298C11.9759 9.01412 12 8.51269 12 8C12 7.48731 11.9759 6.98588 11.9298 6.5H14.3261C14.4398 6.98152 14.5 7.48373 14.5 8C14.5 8.51627 14.4398 9.01848 14.3261 9.5ZM4.0702 9.5H1.67393C1.56019 9.01848 1.5 8.51627 1.5 8C1.5 7.48373 1.56019 6.98152 1.67393 6.5H4.0702C4.02411 6.98588 4 7.48731 4 8C4 8.51269 4.02411 9.01412 4.0702 9.5ZM2.23221 11H4.29076C4.51779 12.1217 4.86832 13.117 5.30864 13.9184C3.98635 13.3161 2.90128 12.2837 2.23221 11ZM5.8252 5H10.1748C9.99973 4.23793 9.76293 3.56626 9.48679 3.01397C8.84266 1.72571 8.23033 1.5 8 1.5C7.76967 1.5 7.15734 1.72571 6.51321 3.01397C6.23707 3.56626 6.00027 4.23793 5.8252 5ZM11.7092 5H13.7678C13.0987 3.71627 12.0137 2.68389 10.6914 2.08162C11.1317 2.88302 11.4822 3.8783 11.7092 5ZM5.30864 2.08162C4.86832 2.88302 4.51779 3.8783 4.29076 5H2.23221C2.90128 3.71628 3.98635 2.68389 5.30864 2.08162ZM8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0Z" fill="currentColor"></path></svg>
                            <select className="bg-black text-white font-medium p-[4px_8px] sm:p-[4px_20px] text-[0.95rem] w-[40px] sm:w-[100%] rounded-[3px] border-[1px] border-white" name="lang">
                                <option value="English">English</option>
                                <option value="Hindi">हिन्दी</option>
                            </select>
                        </div>
                        <button className="bg-[#E50914] text-white font-medium text-[0.95rem] p-[2px_10px] rounded-[3px]">Sign in</button>
                    </div>
                </div>
            </header>
            <div className="max-w-[1170px] mx-auto text-white sm:py-[185px] py-[50px] flex flex-col justify-center items-center">
                <h1 className="sm:text-[48px] text-center sm:w-[1150px] sm:font-extrabold text-[25px] w-[250px] font-[750]">The biggest Indian hits. Ready to watch here from ₹ 149.</h1>
                <p className="text-center sm:text-[25px] text-[20px] leading-[57px]">Join today. Cancel anytime.</p>
                <p className="text-center text-[20px] w-[225px] sm:w-auto">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="m-[30px] mx-auto w-auto flex flex-col justify-center items-center gap-4 sm:inline-block space-x-3">
                    <input className="sm:w-[330px] sm:h-[57px] w-[250px] h-[50px] bg-transparent border-white border-[1px] placeholder:pl-[10px] rounded-[5px]" type="text" placeholder="Email address"/>
                    <button className="bg-[#ef3f3f] sm:text-[25px] p-[10px_20px] font-bold sm:p-[9px_35px] text-center rounded-[5px] hover:bg-[#C11119] ease-in duration-[0.2s]">Get Started </button>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- page1 end --> */}

    {/* <!-- page2 Enjoy on your TV --> */}
    <section className="w-[100%] border-t-[10px] border-[#232323] h-[80vh] border-b-[10px] bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row w-auto justify-center items-center">
            <div className="text-white sm:w-[600px] w-[300px] text-center sm:text-left">
                <h1 className="sm:text-[50px] text-[25px] font-extrabold ">Enjoy on your TV</h1>
                <p className="sm:text-[25px] text-[15px]">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div className="relative z-0">
                <img className="sm:h-[400px] h-[200px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt=""/>
                <video className="absolute sm:bottom-[110px] sm:left-[77px] sm:h-[250px] h-[125px] bottom-8 left-[10px] -z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay loop muted></video>
            </div>
        </div>
    </section>
    {/* <!-- page2 Enjoy on your TV --> */}

    {/* <!-- page3  --> */}
    <section className="w-[100%] border-[#232323] h-[80vh] border-b-[10px] bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row w-auto justify-center items-center">
            <div className="relative z-0">
                <img className="sm:h-[400px] h-[200px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt=""/>
                <video className="absolute sm:bottom-[110px] sm:left-[77px] sm:h-[250px] h-[125px] bottom-8 left-[10px] -z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" autoplay loop muted></video>
            </div>
            <div className="text-white sm:w-[600px] w-[300px] text-center sm:text-left">
                <h1 className="sm:text-[50px] text-[25px] font-extrabold ">Download your shows to watch offline</h1>
                <p className="sm:text-[25px] text-[15px]">Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
    </section>
    {/* <!-- page3 --> */}

    {/* <!-- page4 --> */}
    <section className="w-[100%] border-[#232323] h-[80vh] border-b-[10px] bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row w-auto justify-center items-center">
            <div className="text-white sm:w-[600px] w-[300px] text-center sm:text-left">
                <h1 className="sm:text-[50px] text-[25px] font-extrabold ">Watch everywhere</h1>
                <p className="sm:text-[25px] text-[15px]">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className="relative z-0">
                <img className="sm:h-[400px] h-[200px]" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt=""/>
                <video className="absolute sm:bottom-[110px] sm:left-[77px] sm:h-[250px] h-[125px] bottom-8 left-[10px] -z-10" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" autoplay loop muted></video>
            </div>
        </div>
    </section>
    {/* <!-- page4 --> */}

    {/* <!-- page5 --> */}
    <section className="w-[100%] border-[#232323] h-[80vh] border-b-[10px] bg-black flex justify-center">
        <div className="flex flex-col sm:flex-row w-auto justify-center items-center">
            <div className="relative z-0">
                <img className="sm:h-[400px] h-[200px]" src="https://occ-0-2164-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt=""/>
            </div>
            <div className="text-white sm:w-[600px] w-[300px] text-center sm:text-left">
                <h1 className="sm:text-[50px] text-[25px] font-extrabold ">Create profiles for kids</h1>
                <p className="sm:text-[25px] text-[15px]">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    </section>
    {/* <!-- page5 --> */}
    <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
            <Link to="/"><button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">Home</button></Link>
      </div>
    </>
  )
}

export default Netflix;
