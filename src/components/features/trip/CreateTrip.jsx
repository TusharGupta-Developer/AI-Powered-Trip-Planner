import React, { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelsLists } from '@/constants/options';
import { Button } from '@/components/ui/button';


function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Tell us your travel preferences🏝️🏔️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner generate a customzed intinerary based on your preferences.</p>

      {/* Destination selection with Google Places Autocomplete */}
      <div className='mt-20 flex flex-col gap-9'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                console.log(v)
              }
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you plannig your trip?</h2>
          <Input placeholder="Ex.3" type="number" />
        </div>

        {/* Budget selection and travel companion selection grids with interactive cards */}
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} className='p-4 border rounded-lg hover:shadow cursor-pointer'>
                <h2 className='text-4xl mb-1'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelsLists.map((item, index) => (
              <div key={index} className='p-4 border rounded-lg hover:shadow cursor-pointer'>
                <h2 className='text-4xl mb-1'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='my-10 flex justify-end'>
        <Button>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip