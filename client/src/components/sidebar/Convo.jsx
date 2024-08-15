


import React from 'react';
import useConversation from "../../zustand/useConversation.js"
import { useSocketContext } from '../../context/SocketContext.jsx';

const Convo = ({conversation,lastIdx}) => {
  const {selectedConversation,setSelectedConversation}=useConversation()
  const isSelected=selectedConversation?._id===conversation._id
  const {onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(conversation._id)
  return (
    <>
      <div className={`flex gap-3 items-center hover:bg-sky-500 rounded-lg p-3 cursor-pointer transition-colors duration-200 ${isSelected? "bg-sky-500":""}`}
      onClick={()=>setSelectedConversation(conversation)}>
        
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className='w-12 h-12 rounded-full'>
            <img src={conversation.profilePic} alt="Profile" />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-gray-200'>{conversation.fullname}</p>
            <span className='text-gray-400 text-sm'>2m ago</span>
          </div>
          <p className='text-gray-400 text-sm'>Last message preview...</p>
        </div>
      </div>
      <div className='divider my-0 py-0 h-0.5 '/>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  );
}

export default Convo;
