import React from 'react'
import { IoMdSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <from className="px-4 my-3">
        <div className='w-full relative'>
            <input type="text"
            className='border text-sm rounded-llg block w-full p-2.5 bg-gray-700 border-gray-600 text-white rounded-md' 
            placeholder='Send a message'/>
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
            <IoMdSend  className='text-white'/>
            </button>
        </div>

      
    </from>
  )
}

export default MessageInput
