import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
const ResetPassword = () => {

  const {backendUrl} = useContext(AppContent);
  axios.defaults.withCredentials = true;
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [newPassword,setNewPassword]=useState('');
  const [isEmailSent,setIsEmailSent]=useState(false);
  const [otp,setOtp]=useState(0);
  const [isOtpSubmitted,setIsOtpSubmitted]=useState(false);

  const inputRefs=React.useRef([])
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

  const onSubmitEmail=async(e)=>{
    console.log(e)
    e.preventDefault();
    try{
      const {data}= await axios.post(backendUrl + '/api/auth/send-reset-otp', {email});
      if(data.success)
      {
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
      data.success && setIsEmailSent(true);
    }catch(error)
    {
      toast.error(error.message)

    }
  }
  const onSubmitOtp=async(e)=>{
    e.preventDefault();
    const otpArray = inputRefs.current.map(e =>e.value)
    setOtp(otpArray.join(''))
    setIsOtpSubmitted(true);
  }
  const onSubmitNewPassword=async(e)=>{
    e.preventDefault();
    try{
      const {data}=await axios.post(backendUrl+'/api/auth/reset-password', {email,otp,newPassword})
      data.success ? toast.success(data.message) : toast.error(data.error);
      setNewPassword('');
      data.success && navigate('/')
    }catch(error)
    {
      toast.error(error.message);
    }
    
  }





  return (
  <div className="flex items-center justify-center min-h-screen gap-2 bg-linear-to-bl from-amber-300 to-violet-700" >
    <div className="flex p-8 rounded-sm bg-slate-600">
  {!isEmailSent &&
      <form onSubmit={onSubmitEmail} className="rounded-sm gap-2">
        <h1 className="flex justify-center text-white text-2xl mb-2">Reset Password</h1>
        <p className="flex justify-center text-white text-sm font-semibold mb-2">Enter your registered email address</p>
        <div>
          <span className="text-white">Enter Email</span>
          <input type="email" className="bg-white rounded-lg p-1 w-full mb-2"
           value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" required/>
        </div>
        <button type="submit" className="bg-amber-700 w-full text-white rounded-sm"> Submit</button>
      </form>
  }
  { !isOtpSubmitted && isEmailSent && 
      <form onSubmit={onSubmitOtp} className="rounded-sm gap-2" >
        <h1 className="flex justify-center mb-2 text-white">Reset Password OTP</h1>
        <p className="flex justify-center mb-3 text-white">Enter the 6-digit code sent to your email id.</p>
        <div onPaste={handlePaste} className='flex justify-between mb-8'>
          {Array(6).fill(0).map((_,index)=>(
            <input type="text" maxLength='1' key={index} required className='w-12 h-12 bg-slate-500 text-white text-center text-lg rounded-md'
            ref={e=>inputRefs.current[index]=e} 
            onInput={(e)=> handleInput(e,index)}
            onKeyDown={(e)=>handleKeyDown(e,index)}/>
          ))}</div>
          <button className="bg-linear-to-r from-violet-800 to-indigo-700 text-white rounded-sm w-full"> Submit</button>
      </form>
}
{isOtpSubmitted && isEmailSent &&
      <form onSubmit={onSubmitNewPassword} className="rounded-sm gap-2 min-w-100">
        <h1 className="flex justify-center text-white text-2xl mb-2">Reset Password</h1>
        <p className="flex justify-center text-white text-md mb-2">Enter new password for your account</p>
        <div>
          <input  type="password" className="bg-white rounded-lg p-1 w-full mb-3" value={newPassword}
          onChange={e=> setNewPassword(e.target.value)}placeholder="New Password" />
        </div>
        <button className="bg-linear-to-r from-violet-500 to-sky-700 w-full text-white rounded-sm "> Reset Password</button>
      </form>
}
    </div>
  </div>
  )
}

export default ResetPassword
