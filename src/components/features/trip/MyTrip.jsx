import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function MyTrip() {

  const naviagte = useNavigate();
  useEffect(() => {
    GetUserTrips();
  })

  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      naviagte("/")
      return;
    }

    //Get multiple documents from a collection
    const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }


  return (
    <div>My Trips</div>
  )
}

export default MyTrip