import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen 
    bg-[url("C:\Users\hp\Desktop\login_authentication\client\src\assets\bg_img.jpg")] 
    bg-cover bg-center'>
      <Navbar/>
      <Header/>
    </div>
  )
}

export default Home
