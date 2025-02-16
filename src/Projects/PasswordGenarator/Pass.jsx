import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Pass = () => {
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState('')

  const Upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const Lower = 'abcdefghijklmnopqrstuvwxyz'
  const Numbers = '0123456789'
  const Symbols = '!@#$%&()*+,-./'

  const PassGenerator = useCallback(() => {
    let newPass = ''
    let str = ''
    if (uppercase) str += Upper
    if (lowercase) str += Lower
    if (numbers) str += Numbers
    if (symbols) str += Symbols
    for (let i = 0; i < length; i++) {
      const code = Math.floor(Math.random() * str.length + 1)
      newPass += str.charAt(code)
    }
    setPassword(newPass)
  }, [uppercase, lowercase, numbers, symbols, length, setPassword])

  const copy = useRef(null)

  useEffect(() => {
    PassGenerator()
  }, [uppercase, lowercase, numbers, symbols, length])

  return (
    <>
      <div
        id="Logical"
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="border-[2px] border-black h-[400px] w-[500px] bg-[#CEDEBD] flex justify-center items-center flex-col gap-[20px] rounded-[8px]">
          <input
            className="border-[2px] border-black h-[60px] w-[450px] text-black rounded-[10px] font-bold text-xl pl-[10px]"
            ref={copy}
            type="text"
            value={password}
            readOnly
          ></input>
          <div className="flex gap-[260px]">
            <h2 className="font-bold text-black">Password Length</h2>
            <input
              className="border-[1px] border-black w-[60px] text-black pl-2"
              type="number"
              max={20}
              min={2}
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
          </div>
          <div className="flex gap-[292px]">
            <h2 className="font-bold text-black">Contains Uppercase</h2>
            <input
              defaultChecked={uppercase}
              onChange={() => {
                setUppercase((pre) => !pre)
              }}
              type="checkbox"
            />
          </div>
          <div className="flex gap-[293px]">
            <h2 className="font-bold text-black">Contains Lowercase</h2>
            <input
              defaultChecked={lowercase}
              onChange={() => {
                setLowercase((pre) => !pre)
              }}
              type="checkbox"
            />
          </div>
          <div className="flex gap-[300px]">
            <h2 className="font-bold text-black">Contains Numbers</h2>
            <input
              defaultChecked={numbers}
              onChange={() => {
                setNumbers((pre) => !pre)
              }}
              type="checkbox"
            />
          </div>
          <div className="flex gap-[306px]">
            <h2 className="font-bold text-black">Contains Symbols</h2>
            <input
              defaultChecked={symbols}
              onChange={() => {
                setSymbols((pre) => !pre)
              }}
              type="checkbox"
            />
          </div>
          <button
            onClick={() => {
              PassGenerator()
            }}
            className="border-[2px] text-black border-black h-[60px] w-[450px] rounded-[10px] font-bold text-xl"
          >
            Generate
          </button>
        </div>
        <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
          <Link to="/Logical/3">
            <button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Pass
