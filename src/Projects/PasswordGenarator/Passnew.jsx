import React, { useCallback, useState, useEffect, useRef } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Passnew = () => {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [password, setPassword] = useState("")

  const Password = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIGKLMNOPQRSTWXYZabcdefghigklmnopqrstwxyz"
    if (numbers) str += "0123456789"
    if (symbol) str += "!@#$%^&*()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char)
      pass += str.charAt(char)
      console.log(pass)
    }
    setPassword(pass)
  }, [length, numbers, symbol])

  const copy = useRef(null)
  const copyClipBoard = useCallback(() => {
    copy.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    Password()
  }, [length, numbers, symbol])

  return (
    <>
      <div className="h-screen w-full bg-black flex justify-center items-center">
        <div className="h-[120px] w-[500px] bg-gray-800 border-[1px] border-gray-500 flex flex-col justify-center items-center gap-2 rounded-[8px]">
          <h1 className="text-[15px] text-white">Password Generator</h1>
          <div>
            <input
              className="h-[35px] text-black pb-[5px] w-[350px] rounded-l-[8px] text-[20px] font-normal pl-[10px]"
              ref={copy}
              value={password}
              placeholder="Password"
              type="text"
              readOnly
            />
            <button
              className="text-white bg-blue p-[7px] text-[15px] rounded-r-[8px]"
              onClick={copyClipBoard}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-8">
            <div className="gap-2 flex">
              <input
                className="cursor-pointer"
                type="range"
                min={1}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value)
                }}
              />
              <label className="text-white">Lenght:{length}</label>
            </div>
            <div className="flex gap-2">
              <input
                defaultChecked={numbers}
                onChange={() => {
                  setNumbers((pre) => !pre)
                }}
                type="checkbox"
                name="Number"
              />
              <p className="text-white">Number</p>
            </div>
            <div className="flex gap-2">
              <input
                defaultChecked={symbol}
                onChange={() => {
                  setSymbol((pre) => !pre)
                }}
                type="checkbox"
                name="Symbols"
              />
              <p className="text-white">Symbols</p>
            </div>
            <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
              <Link to="/Logical/2">
                <button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">
                  Next
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Passnew
