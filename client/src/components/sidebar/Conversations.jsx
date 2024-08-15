import React from 'react'
import Convo from './Convo'
import useGetConversation from '../../hooks/useGetConversation';

const Conversations = () => {
  const {loading,conversation}=useGetConversation();

  return (
    <div className='py-2 flex flex-col space-y-2 overflow-auto'>
     {conversation.map((convo,idx)=>(
      <Convo key={convo._id}
      conversation={convo}
      lastIdx={idx=== conversation.length-1}/>
     ))}
    </div>
  )
}

export default Conversations



// starter code
// import React from 'react'
// import Convo from './Convo'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col space-y-2 overflow-y-auto h-full'>
//       <Convo/>
//       <Convo/>
//       <Convo/>
//       <Convo/>
//       <Convo/>
//       <Convo/> 
//     </div>
//   )
// }

// export default Conversations
