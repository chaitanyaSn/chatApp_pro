import React from 'react'
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <from className='flex items-center gap-2'>
        <input type="text" placeholder='search' className='input input-bordered rounded-full' />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'><FaSearch /></button>
    </from>
  )
}

export default SearchInput







// starter code
// import React from 'react'
// const SearchInput = () => {
//   return (
//     <from className='flex items-center gap-2'>
//         <input type="text" placeholder='search' className='input input-bordered rounded-full' />
//       <button type='submit' className='btn btn-circle bg-sky-500 text-white'>icon</button>
//     </from>
//   )
// }

// export default SearchInput
