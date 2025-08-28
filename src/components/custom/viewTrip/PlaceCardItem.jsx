import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GetPlaceDetail, PHOTP_REF_URL } from '@/service/GlobalApi';


function PlaceCardItem({ place }) {

    const [photo, setPhoto] = useState()
    console.log(place)

    useEffect(() => {
        if (place?.placeName) { // Self: If used here because when page is load then instantly GetPlacePhoto(); is called but at that time data have no value as trip?.userSelection?.location?.label not run that time so "error", To fix this problem I used if condfiyion that only runs GetPlacePhoto(); when trip?.userSelection?.location?.label have value.
            GetHotelPhoto();
        }
    }, [place]);

    const data = {

        textQuery: place?.placeName
    };

    const GetHotelPhoto = async () => {
        try {
            const resp = await GetPlaceDetail(data);
            console.log(resp.data);
            console.log(resp.data.places[0].photos[3]);
            console.log(resp.data.places[0].photos[3].name);
            const PhotoUrl = PHOTP_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name)
            console.log(PhotoUrl)
            setPhoto(PhotoUrl)

        } catch (err) {
            console.error("Google Places API Error:", err.response?.data || err.message);
        }
    };

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName} target='_blank' className="no-underline text-inherit hover:no-underline hover:text-inherit">
            <div className='border rounded-xl p-5 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
                <div className="w-[700px] h-[200px] rounded-xl overflow-hidden">
                    <img
                        src={photo}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

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