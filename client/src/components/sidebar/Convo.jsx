// import React from 'react'

// const Convo = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//     <div className='avatar online'>
//         <div className='w-12 rounded-full'>
//             <img src="https://avatar.iran.liara.run/public/boy?username=Pranav" alt="" />
//         </div>

//     </div>
//     <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>pranav</p>
//             <span className='text-xl'></span>

//         </div>
//     </div>
//     </div>
//     <div className='divider my-0 py-0 h-0.5 '/>
//     </>
//   )
// }

// export default Convo


import React from 'react';

const Convo = () => {
  return (
    <>
      <div className='flex gap-3 items-center hover:bg-sky-500 rounded-lg p-3 cursor-pointer transition-colors duration-200'>
        <div className='avatar online'>
          <div className='w-12 h-12 rounded-full'>
            <img src="https://avatar.iran.liara.run/public/boy?username=Pranav" alt="Profile" />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-between items-center'>
            <p className='font-bold text-gray-200'>Pranav</p>
            <span className='text-gray-400 text-sm'>2m ago</span>
          </div>
          <p className='text-gray-400 text-sm'>Last message preview...</p>
        </div>
      </div>
      <div className='divider my-0 py-0 h-0.5 '/>
    </>
  );
}

export default Convo;
