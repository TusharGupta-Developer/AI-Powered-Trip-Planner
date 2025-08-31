import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MyTrip() {

  const naviagte = useNavigate();
  useEffect(() => {
    GetUserTrips();
  })

  const GetUserTrips = () => {
    const user = localStorage.getItem('user')
    if (!user) {
      naviagte("/")
      return;
    }
  }

  return (
    <div>My Trips</div>
  )
}

export default MyTrip