import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RandomColor = () => {
  const [color, setColor] = useState('Yellow')

  const code = Math.floor(Math.random() * 16777215)
  console.log(code)
  const newCode = '#' + code.toString(16)
  console.log(newCode)

  return (
    <>
      <div
        className="w-full h-screen flex justify-center items-center easy-in duration-500"
        style={{ backgroundColor: color }}
      >
        <div className="w-[400px] h-[80px] border-black border-[1px] rounded-md flex flex-col gap-2 bg-white">
          <p idName="text" className="text-center font-bold text-xl text-black">
            {newCode}
          </p>
          <button
            onClick={() => setColor(newCode)}
            className="bg-blue-500 h-[40px] mx-[10px] rounded border-[1px] border-black text-black font-bold"
          >
            Click Me
          </button>
        </div>
        <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
          <Link to="/">
            <button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default RandomColor
