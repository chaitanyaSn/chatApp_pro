import React from 'react'
import Convo from './Convo'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col space-y-2 overflow-auto'>
      <Convo/>
      <Convo/>
      <Convo/>
      <Convo/>
      <Convo/>
      <Convo/> 
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
