import React, { useContext } from 'react'
import { AppContent } from '../context/AppContext'

const Header = () => {
  const{userData} = useContext(AppContent)
  return (
    <div>
      <h1>Hey {userData ? <b>{userData.name}</b> : "Developer"} !</h1>
      
      {userData ? <h1 className="font-semibold">You are logged in to CollegeTree!!!</h1> :<h2>Welcome to CollegeTree!!!</h2>}
      {userData && !userData.isAccountVerified &&<h1 className="text-semibold text-red-500">Please verify email to continue!!!</h1>}
    </div>
  )
}

export default Header
