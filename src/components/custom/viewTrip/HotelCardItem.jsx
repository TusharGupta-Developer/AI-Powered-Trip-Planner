import { GetPlaceDetail, PHOTP_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HotelCardItem({hotel, index}) {

    const [photo, setPhoto] = useState()
    // console.log(trip)

    useEffect(() => {
        if (hotel?.hotelName) { // Self: If used here because when page is load then instantly GetPlacePhoto(); is called but at that time data have no value as trip?.userSelection?.location?.label not run that time so "error", To fix this problem I used if condfiyion that only runs GetPlacePhoto(); when trip?.userSelection?.location?.label have value.
            GetHotelPhoto();
        }
    }, [hotel]);

    const data = {

        textQuery: hotel?.hotelName
    };

    const GetHotelPhoto = async () => {
        try {
            const resp = await GetPlaceDetail(data);
            console.log(resp.data);
            console.log(resp.data.places[0].photos[3]);
            console.log(resp.data.places[0].photos[3].name);
            const PhotoUrl = PHOTP_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
            // console.log(PhotoUrl)
            setPhoto(PhotoUrl)

        } catch (err) {
            console.error("Google Places API Error:", err.response?.data || err.message);
        }
    };

    return (
        <Link key={index} to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + "," + hotel?.hotelAddress} target='_blank' className="no-underline text-inherit hover:no-underline hover:text-inherit">
            {/* // {console.log(item)} */}
            <div key={index} className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photo?photo:'/plcaeholder.jpg'} alt="" className='rounded-xl w-[250px] h-[200px]'/>

                <div className='my-2'>
                    <h2 className='font-medium'>{hotel?.hotelName}</h2>
                    <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                    <h2 className='text-sm'>💰 {hotel?.price}</h2>
                    <h2 className='text-sm'>⭐{hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem