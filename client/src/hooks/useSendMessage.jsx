import React from 'react'
import useConversation from "../zustand/useConversation"
import toast from 'react-hot-toast'
const useSendMessage = () => {
 const{messages,setMessages,selectedConversation}=useConversation();
 const sendMessages=async(message)=>{
    try {
        const res=await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({message})
        })
        const data=await res.json()
        if(data.error) throw new Error(data.error)
        setMessages([...messages,data.message])
        
    } catch (error) {
        
        toast.error(error.message)
        console.log(error)
    }

 }
 return {sendMessages}
}

export default useSendMessage
