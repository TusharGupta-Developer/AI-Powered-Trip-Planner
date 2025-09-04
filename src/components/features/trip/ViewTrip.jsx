import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/service/firebaseConfig';
import InfoSection from './../../custom/viewTrip/InfoSection';
import HotelSection from './../../custom/viewTrip/HotelSection';
import PlacesToVisit from './../../custom/viewTrip/PlacesToVisit';
import Footer from './../../custom/viewTrip/Footer';



function ViewTrip() {
  const { tripId } = useParams()
  // console.log(tripId)
  const [trip, setTrip] = useState([]);


  useEffect(() => {
    tripId && GetTripData();// && operator – in JavaScript, the && operator works like this:
    // It evaluates the left-hand side (tripId) first. 
    // If the left-hand side is truthy (not null, undefined, 0, "", false), it evaluates and returns the right-hand side (GetTripData() in this case).
    // If the left-hand side is falsy, it stops and returns the left-hand side. The right-hand side is never executed.
  }, [tripId])

  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTrip(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <div className='p-10 md:px-10 lg:px-44 xl:px-50'>

       {/* Information Section */}
      <InfoSection trip={trip} />

      {/* Recommended Hotels */}
      <HotelSection trip={trip} />

      {/* Daily Plan */}
      <PlacesToVisit trip={trip} />

      {/* Footer */}
      {/* <Footer /> */}

    </div>
  )
}

export default ViewTrip