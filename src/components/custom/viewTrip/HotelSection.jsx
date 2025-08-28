import React from 'react'
import { Link } from 'react-router-dom';
import HotelCardItem from './HotelCardItem';

function HotelSection({ trip }) {
    // console.log(trip)

    return (
        <div>
            <h2 className=' font-bold text-xl mt-5'>Hotel Recommendation </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-3'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
                    <HotelCardItem hotel={hotel} index = {index}/>
                ))}
            </div>

        </div>
    )
}

export default HotelSection