import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios';
import {toast} from 'react-toastify'


const Login = () => {
    const navigate=useNavigate();

    const {backendUrl, setIsLoggedIn, getUserData}= useContext(AppContent)

    const [state, setState]=useState('SignUp')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')

    
    const onSubmitHandler = async(e)=>{
        try{
            e.preventDefault();
            axios.defaults.withCredentials = true;

            if(state === 'SignUp')
            {
                const {data} = await axios.post(backendUrl + '/api/auth/register', {name,email,password});
                if(data.success)
                {
                    setIsLoggedIn(true)
                    getUserData()
                    navigate('/')
                }
                else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/auth/login', {email,password});
                if(data.success)
                {
                    setIsLoggedIn(true)
                    getUserData()
                    navigate('/')
                }
                else{
                    toast.error(data.message)
                }
            }
        }catch(error){
            toast.error(error.message)
        }
        
    }

  return (
    <div className=" flex justify-center  items-center min-h-screen p-6 gap-2 bg-linear-to-br from-violet-700 to-amber-500">
      <div className=" bg-slate-800 p-8 rounded-md">
        
        <h2 className='font-semibold text-3xl text-white text-center mb-3 px-2'>
            {state==='SignUp'?'Create Account' : 'Login'}
        </h2>

        <p className=" text-white text-center font-light">
            {state ==='SignUp'?'Create Your Account' : 'Login to your Account'}
        </p>

        <form onSubmit={onSubmitHandler} className="w-full">
            <div className="py-4">
                
                {state === 'SignUp' && (
                    <div className="m-4"><input type="text" onChange={(e)=>setName(e.target.value)} value={name} 
                    className="bg-white w-full text-slate-600 rounded-md p-2 " placeholder="Enter Name" required/></div>
                )
                }

                <div className="m-4"><input type="text"  onChange={(e)=>setEmail(e.target.value)} value={email}
                 className="bg-white w-full text-slate-600 rounded-md p-2 " placeholder="Email Id" required/></div>

                <div className="m-4"><input type="password"  onChange={(e)=>setPassword(e.target.value)} value={password}
                 className="bg-white w-full text-slate-600 rounded-md p-2" placeholder="Password" required/></div>
            </div>
            <p onClick={()=>navigate('/reset-password')} className="text-slate-500 mb-4 hover:cursor-pointer">Forgot Password?</p>
            <button className='w-full p-2 mb-2 justify-center text-white rounded-lg bg-linear-to-r from-violet-900 to-sky-700'>{state}</button>
        </form>
        {state === "SignUp" ?(
            <p className="text-white text-xs text-center mb-2">Already have an Account?{' '}
            <span onClick={()=> setState("Login")}className="text-xs text-blue-500 hover: cursor-pointer underline">Login Here</span>
        </p>
        ) :(
            <p className="text-white text-xs text-center">Don't have an Account?{' '}
            <span onClick={()=> setState("SignUp")}className="text-xs text-blue-500 hover: cursor-pointer underline">Sign Up</span>
        </p>
        )}
        

      </div>
    </div>
  )
}

export default Login
