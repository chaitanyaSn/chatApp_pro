import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogout from '../../hooks/useLogout';
const LogoutBtn = () => {
    const {loading,logout}=useLogout()
  return (
    <div className='mt-auto'>
        <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer mt-2'
        onClick={logout}
        />
      
    </div>
  )
}

export default LogoutBtn
