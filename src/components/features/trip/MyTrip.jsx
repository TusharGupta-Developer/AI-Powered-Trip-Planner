import { db } from '@/service/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserMyTripCardItem from './UserMyTripCardItem';

function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);
  const naviagte = useNavigate();

  useEffect(() => {
    GetUserTrips();
  })

  // Use to get all user Trips
  const GetUserTrips = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      naviagte("/")
      return;
    }
    //Get multiple documents from a collection
    const q = query(collection(db, "AITrips"), where("userEmail", "==", user?.email));
    
    const querySnapshot = await getDocs(q);
    setUserTrips([])
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    //   setUserTrips(prevVal => [...prevVal, doc.data()])
    // });

    const trips = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setUserTrips(trips);

  }


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>My Trips</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        {userTrips.map((trip, index) => (
          <div key={index}>
            < UserMyTripCardItem trip={trip} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyTrip