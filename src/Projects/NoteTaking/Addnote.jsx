import React from "react"

const AddNote = (props) => {
  const delItem = () => {
    props.del(props.id)
  }
  return (
    <div className="w-[250px] h-[300px] bg-white mt-[40px] ml-[20px] relative flex flex-col items-center justify-center rounded-[10px]">
      <input
        className="pl-[5px] w-full h-[20%] outline-0 rounded-t-[10px] font-bold text-xl text-black"
        type="text"
        name="title"
        value={props.title}
      />
      <hr className="h-[2px] w-full bg-slate-600" />
      <textarea
        className="pl-[5px] h-[80%] w-full outline-0 rounded-b-[10px] text-black"
        value={props.content}
        name="content"
      ></textarea>
      <button
        className="absolute p-2 bg-[#F6B914] rounded-full -right-[10px] -bottom-[10px]"
        onClick={delItem}
      >
        Del
      </button>
    </div>
  )
}

export default AddNote
