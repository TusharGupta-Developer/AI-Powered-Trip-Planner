import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelsLists } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { AI_PROMPT, generateWithGemini } from '@/service/AIModal';


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name, value) => {

    // if (name == 'noOfDays' && value > 5) {
    //   console.lol("Please enter Trip Days less than 5")
    // }

    setFormData({
      ...formData,//It preserves the existing data in formData and It updates only the specified field (name) with the new value.
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const OnGenerateTrip = async () => {
    if (formData?.noOfDays > 5 || !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please fill all details")
    }
    else {
      const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', formData?.location?.label)
        .replace('{totalDays}', formData?.noOfDays)
        .replace('{traveler}', formData?.traveler)
        .replace('{budget}', formData?.budget)
        .replace('{totalDays}', formData?.noOfDays)

      console.log(FINAL_PROMPT)

      // Pass FINAL_PROMPT to Gemini
      console.log("Prompt being sent:", FINAL_PROMPT);

      const result = await generateWithGemini(FINAL_PROMPT);
      console.log("AI Result:", result?.response?.text);

    }
  }

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
                console.log(v);
                handleInputChange('location', v)
              }
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you plannig your trip?</h2>
          <Input placeholder="Ex.3" type="number"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        {/* Budget selection and travel companion selection grids with interactive cards */}
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} className={`p-4 border rounded-lg hover:shadow cursor-pointer ${formData?.budget == item.title && 'shadow-lg border-black'}`} // use ? to safely access formData.budget without throwing an error if formData is null or undefined.
                onClick={(e) => handleInputChange("budget", item.title)}>
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
              <div key={index} className={`p-4 border rounded-lg hover:shadow cursor-pointer ${formData?.traveler == item.people && 'shadow-lg border-black'}`}
                onClick={(e) => handleInputChange("traveler", item.people)}>
                <h2 className='text-4xl mb-1'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className='my-10 flex justify-end'>
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>

    </div>
  )
}

export default CreateTrip