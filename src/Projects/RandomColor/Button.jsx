import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  const [color, setColor] = useState('red')

  return (
    <>
      <div
        className="w-[100%] h-[100vh] relative"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex bg-white border-black border-[1px] rounded-[10px] p-2 space-x-2 absolute bottom-[20px] left-[450px]">
        <button
          onClick={() => setColor('yellow')}
          className="bg-[#FFFF00] border-[1px] border-black rounded-[20px] p-2"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor('black')}
          className="bg-black border-[1px] border-black rounded-[20px] p-2 text-white"
        >
          Black
        </button>
        <button
          onClick={() => setColor('#FFFAFA')}
          className="bg-[#FFFAFA] border-[1px] border-black rounded-[20px] p-2"
        >
          Snow
        </button>
        <button
          onClick={() => setColor('#DC143C')}
          className="bg-[#DC143C] border-[1px] border-black rounded-[20px] p-2"
        >
          Crimson
        </button>
        <button
          onClick={() => setColor('#FF69B4')}
          className="bg-[#FF69B4] border-[1px] border-black rounded-[20px] p-2"
        >
          Pink
        </button>
        <button
          onClick={() => setColor('#DA70D6')}
          className="bg-[#DA70D6] border-[1px] border-black rounded-[20px] p-2"
        >
          Orchid
        </button>
        <button
          onClick={() => setColor('#F5F5DC')}
          className="bg-[#F5F5DC] border-[1px] border-black rounded-[20px] p-2"
        >
          Beige
        </button>
        <button
          onClick={() => setColor('#D2B48C')}
          className="bg-[#D2B48C] border-[1px] border-black rounded-[20px] p-2"
        >
          Tan
        </button>
        <button
          onClick={() => setColor('#FFE4C4')}
          className="bg-[#FFE4C4] border-[1px] border-black rounded-[20px] p-2"
        >
          Bisque
        </button>
        <button
          onClick={() => setColor('#800080')}
          className="bg-[#800080] border-[1px] border-black rounded-[20px] p-2 text-white"
        >
          Purple
        </button>
        <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
          <Link to="/Logical/4">
            <button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Button
