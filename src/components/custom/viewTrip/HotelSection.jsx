import React from 'react'
import { Link } from 'react-router-dom';

function HotelSection({ trip }) {
    // console.log(trip)

    return (
        <div>
            <h2 className=' font-bold text-xl mt-5'>Hotel Recommendation </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-3'>
                {trip?.tripData?.hotelOptions?.map((hotel, index) => (
            
                        // {console.log(item)}
                        <div className='hover:scale-105 transition-all cursor-pointer'>
                            <img src={hotel?.hotelImageUrl} alt="" className='rounded-xl' />

                            <div key={index} className='my-2'>
                                <h2 className='font-medium'>{hotel?.hotelName}</h2>
                                <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                                <h2 className='text-sm'>💰 {hotel?.price}</h2>
                                <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                            </div>
                        </div>
                    
                ))}
            </div>

        </div>
    )
}

export default HotelSection