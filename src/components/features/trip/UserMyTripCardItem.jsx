import { GetPlaceDetail, PHOTP_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserMyTripCardItem({ trip }) {

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
        <Link to={'/create-trip/view-trip/' + trip?.Id}>
            <div className='hover:scale-105 transition-all' >
                <div className="w-50 h-60">
                    <img
                        src={photo}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>

                <div>
                    <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
                    <h2 className='text-sm text-gray-500' >{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget</h2>
                </div>
            </div>
        </Link>
    )
}

export default UserMyTripCardItem