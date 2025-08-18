import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelsLists } from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { AI_PROMPT, generateWithGemini } from '@/service/AIModal';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { doc, setDoc } from "firebase/firestore";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { db, } from '@/service/firebaseConfig';



function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const login = useGoogleLogin({
    // onSuccess: codeResponse => console.log(codeResponse),
    onSuccess: codeResponse => GetUserDetails(codeResponse),
    onError: codeResponse => console.log(codeResponse)
  });

  const GetUserDetails = (tokenInfo) => {
    console.log("Token info received:", tokenInfo);

    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?`, { // This URL is Google’s OAuth v3 userinfo endpoint. When you pass an access token in the request, Google returns the authenticated user's profile information (name, email, picture, etc.).
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`, //Authorization → Uses the OAuth Bearer token to prove the user is authenticated.
        Accept: 'application/json'//Accept → Tells Google you want the response in JSON format.
      }
    })
      .then((resp) => {
        console.log("Google user profile:", resp.data);
        localStorage.setItem('user', JSON.stringify(resp.data)) //JSON.stringify converts object to JSON string
        setOpenDialog(false)
        OnGenerateTrip()
      })
      .catch((error) => {
        console.error("Error fetching profile:", error.response?.data || error.message);
      });
  };

  const OnGenerateTrip = async () => {

    const user = localStorage.getItem('user')
    if (!user) {
      setOpenDialog(true)
      return;
    }

    if (formData?.noOfDays > 5 || !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please fill all details")
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays)

    // Pass FINAL_PROMPT to Gemini
    console.log("Prompt being sent:", FINAL_PROMPT);

    const result = await generateWithGemini(FINAL_PROMPT);
    console.log("AI Result:", result?.response?.text);
    setLoading(false)
    SaveAITrip(result?.response?.text)
  }

  const SaveAITrip = async (TripData) => {

    setLoading(true)
    const docID = Date.now().toString();
    const user = JSON.parse(localStorage.getItem('user'));

    //AI responses (like from Gemini/OpenAI) often return JSON wrapped in Markdown code blocks, so you need to clean them first before parsing.
    let cleanedTripData = TripData.replace(/```json|```/g, "").trim(); //  // trim() removes any extra space or empty lines.
    const tripData = JSON.parse(cleanedTripData);

    await setDoc(doc(db, "AITrips", docID), {
      userSelection: formData,
      tripData: (tripData),
      userEmail: user?.email,
      Id: docID,
    });
    setLoading(false)
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

      <Dialog open={openDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogDescription>

              <div className='flex justify-center items-center flex-col mt-7'>
                <img className="mx-auto" src="/logo.svg" alt="" />
                <h2 className='font-bold text-lg mt-7'>Sign In With Google </h2>
                <p >Sign In to the App with Google authentication securily.</p>

                <Button
                  onClick={login}
                  className="w-full mt-5" >
                  <FcGoogle className='h-7 w-7' />
                  Sign In With Google</Button>
              </div>

            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default CreateTrip