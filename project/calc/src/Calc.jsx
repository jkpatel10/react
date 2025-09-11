import React, { useState } from 'react'

export default function Calc() {
  const [count,setCount]=useState(5)

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-purple-100">
      <div className="w-[20%] rounded-2xl bg-indigo-50 p-6 text-center" id='box'>
        {/* <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-500 mb-6">Counter</h1> */}
         <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ED68A4] to-[#688EBA] mb-6">Counter</h1>

        <div className="text-5xl font-extrabold text-gray-400 mb-8">{count}</div>
        <div className="flex flex-wrap justify-center justify-evenly m-auto gap-3 w-[70%]">
          <button onClick={()=>setCount(count+6)} className="px-5 py-2 rounded-xl" id='btn'>+</button>
          <button onClick={()=>setCount(count-6)} className="px-5 py-2 rounded-xl" id='btn'>-</button>
          <button onClick={()=>setCount(count*6)} className="px-5 py-2 rounded-xl" id='btn'>*</button>
          <button onClick={()=>setCount(count/6)} className="px-5 py-2 rounded-xl" id='btn'>/</button>
          <button onClick={()=>setCount(0)} className="px-5 py-2 rounded-xl" id='btn'>reset</button>
        </div>
      </div>
    </div>
  )
}
