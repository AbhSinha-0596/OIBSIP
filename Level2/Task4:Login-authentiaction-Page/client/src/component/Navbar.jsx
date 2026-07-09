import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const Navbar = () => {
    const navigate=useNavigate();
    const {userData, backendUrl, setUserData, setIsLoggedIn} = useContext(AppContent)
    const sendVerificationOTP=async()=>{
      try{
        axios.defaults.withCredentials =true;
        const {data}=await axios.post(backendUrl+'/api/auth/send-verify-otp')
        if(data.success){
          navigate('/verify-email')
          toast.success(data.message)
        }else{
          toast.error(data.message)
        }

      }catch(error)
      {
        toast.error(error.message)
      }
    }
    const logout =async()=>{
      axios.defaults.withCredentials =true
      const {data}=await axios.post(backendUrl+'/api/auth/logout')
      data.success && setIsLoggedIn(false)
      data.success && setUserData(false)
      navigate('/')
    }
    const reset=async()=>{
      axios.defaults.withCredentials =true
      navigate('/reset-password')
    }
  return (
    <div className="w-full bg-amber-100 p-4 px-6 flex justify-between absolute top-0 ">
        <p className="p-2 justify-center "> CollegeTREE </p>
        {
          userData?(
          <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white hover:cursor-pointer relative group">
            {userData.name[0].toUpperCase()}
            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10'>
               <ul className="list-none m-0 p-2 bg-slate-300 text-sm">
                {!userData.isAccountVerified && <li onClick={sendVerificationOTP} className='py-1 px-2 hover:bg-gray-200'>
                  Verify Email
                </li>}
                <li onClick={reset} className='py-1 px-2 hover:bg-gray-200'>
                  Reset Password
                </li>
                <li onClick={logout} className='py-1 px-2 hover:bg-gray-200'>
                  Logout
                </li>
               </ul>
            </div>
          </div>)
          :(
            <button onClick={()=>navigate('/login')}
            className="p-2 gap-2 bg-amber-600 hover:bg-amber-400 rounded-sm">
                Login 
            </button>
          )
        }
        

    </div>
  )
}

export default Navbar
