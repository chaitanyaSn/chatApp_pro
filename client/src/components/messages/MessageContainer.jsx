import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  let noChatSelectes=true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelectes ?(<NoChatSelectes/>):(
        <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>
            <span className='text-gray-900 font-bold'>pranv</span>
        </div>
        <Messages/>
        <MessageInput/>
        </>
    )}
      
    </div>
  )
}

export default MessageContainer


const NoChatSelectes=()=>{
  return (
    <div className='flex items-center justify-center wifull h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome pranav</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-5xl text-center'/>
      </div>
    </div>
  )
}
