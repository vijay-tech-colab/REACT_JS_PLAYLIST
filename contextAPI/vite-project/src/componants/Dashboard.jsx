import React, { useContext } from 'react'
import AuthContext from '../context/context-provider'
function Dashboard() {
    const {user} = useContext(AuthContext);
  return (
    <>
        {
        user ? <h1>Dashboard</h1> :"please login?"
    }
    </>
  )
}

export default Dashboard