import React from 'react'
import { Button } from '@/components/ui/button';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function PlaceCardItem({ place }) {
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' +place?.placeName} target='_blank' className="no-underline text-inherit hover:no-underline hover:text-inherit">
            <div className='border rounded-xl p-5 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <img src='/placeholder.jpg' alt="" className='w-[160px] h-[130px] rounded-xl' />
                <div>
                    <h2 className='font-bold text-lg'>{place?.placeName}</h2>
                    <h2 className='text-sm text-gray-400'>{place?.placeDetails}</h2>
                    <h2 className='mt-2'>🕙 {place?.travelTime}</h2>
                    {/* <Button><FaMapLocationDot /></Button> */}
                </div>
            </div>
        </Link>
    )
}

export default PlaceCardItem