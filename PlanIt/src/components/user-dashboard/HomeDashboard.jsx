import React, { useContext, useEffect } from 'react'
import authContext from '../../context/auth/authContext';

const HomeDashboard = () => {

  
  const { user, getUser } = useContext(authContext);
  // useEffect(() => {
  //   console.log(user)
  // },[])

  return (
    <div className='text-linen'>
      <h1>Home Dashboard</h1>
      <p>Username: {user.name}</p>
    </div>
  )
}

export default HomeDashboard
