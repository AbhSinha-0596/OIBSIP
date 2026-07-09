import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import { AppContent } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Emailverify = () => {
  axios.defaults.withCredentials=true
  const {backendUrl, isLoggedIn, userData, getUserData }=useContext(AppContent)
  const navigate=useNavigate();
  const inputRefs=React.useRef([]);
  const handleInput=(e,index)=>{
    if(e.target.value.length >0 && index<inputRefs.current.length-1){
      inputRefs.current[index+1].focus();
    }
  }
  const handleKeyDown=(e,index)=>{
    if(e.key === 'Backspace' && e.target.value === ''&& index>0)
    {
      inputRefs.current[index-1].focus();
    }
  }
  const handlePaste=(e)=>{
    const paste = e.clipboardData.getData('text')
    const pasteArray=paste.split('');
    pasteArray.forEach((char, index)=>{
      if (inputRefs.current[index]){
        inputRefs.current[index].value=char;
      }
    })
  }

  const onSubmitHandler=async (e)=>{
    try{
      e.preventDefault();
      const otpArray=inputRefs.current.map(e=>e.value)
      const otp=otpArray.join('');

      const {data}=await axios.post(backendUrl+'/api/auth/verify-email',{otp})
      if(data.success)
      {
        toast.success(data.message);
        getUserData()
        navigate('/')
      }
      else{
        toast.error(data.message);
      }
    }catch(error){
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    isLoggedIn && userData && userData.isAccountVerified && navigate('/')
  },[isLoggedIn, userData])

  return (
    <div className="flex  items-center justify-center min-h-screen bg-linear-to-bl from-violet-800 to-amber-600" >
      <div className="flex justify-center p-4 rounded-lg bg-slate-800">
      <form onSubmit={onSubmitHandler}>
        <h1 className="flex justify-center mb-2 text-white">Email Verify OTP</h1>
        <p className="flex justify-center mb-3 text-white">Enter the 6-digit code sent to your email id.</p>
        <div onPaste={handlePaste} className='flex justify-between mb-8'>
          {Array(6).fill(0).map((_,index)=>(
            <input type="text" maxLength='1' key={index} required className='w-12 h-12 bg-slate-500 text-white text-center text-lg rounded-md'
            ref={e=>inputRefs.current[index]=e} 
            onInput={(e)=> handleInput(e,index)}
            onKeyDown={(e)=>handleKeyDown(e,index)}/>
          ))}</div>
          <button className="bg-linear-to-r from-violet-800 to-indigo-700 text-white rounded-sm w-full"> Verify Email</button>
      </form>
      </div>
    </div>
  )
}

export default Emailverify
