import React, { useState } from "react"
import Header from "./Header"
import WriteNote from "./WriteNote"
import AddNote from "./Addnote"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
;() => {
  const backData = JSON.parse(localStorage.getItem("Note"))
  const saveTitle = []
  const saveContent = []
  backData.forEach((note) => {
    saveTitle.push(note.title)
  })
  backData.forEach((note) => {
    saveContent.push(note.content)
  })
}

const NoteTaking = () => {
  const [addItem, setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((prev) => {
      return [...prev, note]
    })
  }

  const saveNote = () => {
    const data = []
    if (addItem != []) {
      addItem.forEach((note) => {
        data.push(note)
      })
    }
    localStorage.setItem("Note", JSON.stringify(data))
  }

  const deletNote = (id) => {
    setAddItem((prev) =>
      prev.filter((currData, indx) => {
        return indx !== id
      }),
    )
    saveNote()
  }

  return (
    <>
      <Header />
      <WriteNote passNote={addNote} saveNote={saveNote} />
      {addItem.map((val, index) => {
        return (
          <div className="inline-block">
            <AddNote
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              del={deletNote}
            />
          </div>
        )
      })}
      <div className="bg-yellow w-[50px] h-[50px] fixed right-10 top-10 rounded-full flex justify-center items-center hover:bg-black">
        <Link to="/">
          <button className="text-black text-sm font-semibold hover:text-white w-[50px] h-[50px]">
            Home
          </button>
        </Link>
      </div>
    </>
  )
}

export default NoteTaking
