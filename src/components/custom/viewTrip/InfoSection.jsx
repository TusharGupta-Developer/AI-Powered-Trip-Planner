import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import { IoIosSend } from "react-icons/io";
import { GetPlaceDetail, PHOTP_REF_URL } from '@/service/GlobalApi';


function InfoSection({ trip }) {

    const [photo, setPhoto] = useState()
    // console.log(trip)

    useEffect(() => {
        if (trip?.userSelection?.location?.label) { // Self: If used here because when page is load then instantly GetPlacePhoto(); is called but at that time data have no value as trip?.userSelection?.location?.label not run that time so "error", To fix this problem I used if condfiyion that only runs GetPlacePhoto(); when trip?.userSelection?.location?.label have value.
            GetPlacePhoto();
        }
    }, [trip]);

    const data = {

        textQuery: trip?.userSelection?.location?.label
    };

    const GetPlacePhoto = async () => {
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
        <div>
            <img src={photo} alt="" className='h-[300px] w-full object-cover rounded-xl' />

            <div className='flex justify-between items-center'>
                <div className='my-5 flex flex-col'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='flex gap-7 mt-1'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md'>📅 {trip?.userSelection?.noOfDays} Days</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md'>💰 {trip?.userSelection?.budget} Budget</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-700 text-xs md:text-md'>🥂 No. Of Travelers: {trip?.userSelection?.traveler}</h2>
                    </div>
                </div>
                <Button><IoIosSend /></Button>
            </div>
        </div>
    )
}

export default InfoSection