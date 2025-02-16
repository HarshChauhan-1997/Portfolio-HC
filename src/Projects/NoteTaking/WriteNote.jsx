import React, { useState } from 'react'

const WriteNote = (props) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  })

  const dataInput = (event) => {
    const { name, value } = event.target
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const add = () => {
    save()
    props.passNote(note)
    setNote({
      title: '',
      content: '',
    })
  }

  const save = () => {
    props.saveNote()
  }

  const [expand, setExpand] = useState(false)

  const expandIt = () => {
    setExpand(true)
  }

  const expandNo = () => {
    setExpand(false)
  }

  return (
    <div onDoubleClick={expandNo}>
      <div className="bg-white w-[500px] h-[200px] rounded-[5px] flex flex-col justify-center items-center relative ml-[32%] mt-[20px]">
        {expand ? (
          <input
            className="pl-[5px] w-full h-[20%] border-none resize-none outline-none text-black font-bold text-xl rounded-t-[20px]"
            value={note.title}
            name="title"
            onChange={dataInput}
            type="text"
            placeholder="title.."
          />
        ) : null}
        <textarea
          className="pl-[5px] w-full h-[80%] resize-none outline-none text-black rounded-b-[20px]"
          name="content"
          value={note.content}
          onClick={expandIt}
          onChange={dataInput}
          placeholder="Write note here..."
        ></textarea>
        {expand ? (
          <button
            className="absolute text-[25px] p-1 rounded-full bg-[#F6B914] text-white -right-[10px] -bottom-[10px]"
            onClick={add}
          >
            +
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default WriteNote
