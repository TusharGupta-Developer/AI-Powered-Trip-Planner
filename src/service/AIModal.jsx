
// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// This is original sdk code 
// import {
//   GoogleGenAI,
// } from '@google/genai';

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });
//   const tools = [
//     {
//       googleSearch: {
//       }
//     },
//   ];
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//   };
//   const model = 'gemini-2.5-pro';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();


// This SDK code is update by me for my desirable result by using ChatGpt
import { GoogleGenAI } from '@google/genai';

export async function generateWithGemini(prompt) {
  const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY, // Make sure this is set in .env as VITE_GEMINI_API_KEY
  });

  const model = 'gemini-2.5-pro';

  const contents = [
    {
      role: 'user',
      parts: [{ text: prompt }],
    },
  ];

  // Request Gemini output as a stream
  const stream = await ai.models.generateContentStream({
    model,
    contents,
  });

  // Collect chunks into one string
  let fullText = '';
  for await (const chunk of stream) {
    fullText += chunk.text;
  }

  // Return in the exact shape the second snippet expects
  return { response: { text: fullText } };
}





export const AI_PROMPT = `Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, Geo coordinates, rating, description and suggest itinerary with placeName, PlaceDetails, Place image Url, Geo Coordinate, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.              
Please provide the trip details in strict JSON format. The JSON must include all of the following keys exactly as written (case-sensitive) and no extra keys. Follow the JSON structure strictly, as I will access the information directly in my project. Ensure that all image_url fields contain valid, working image URLs:
{
 "PlaceImage_url": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Melbourne_Skyline_from_Eureka_Tower.jpg",
 "hotelOptions": [
      {
        "hotelName": "The Victoria Hotel",
        "hotelAddress": "215 Little Collins St, Melbourne VIC 3000, Australia",
        "price": "Approx. AUD 170-240 per night",
        "hotelImageUrl": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "geoCoordinates": { "latitude": -37.8149, "longitude": 144.9664 },
        "rating": 4.1,
        "description": "A historic hotel with modern amenities located in the heart of the CBD, offering excellent value and a convenient base for exploring the city on foot."
      },
      {
        "hotelName": "Citadines on Bourke Melbourne",
        "hotelAddress": "131-135 Bourke St, Melbourne VIC 3000, Australia",
        "price": "Approx. AUD 200-280 per night",
        "hotelImageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "geoCoordinates": { "latitude": -37.8131, "longitude": 144.9691 },
        "rating": 4.4,
        "description": "Modern apartment-style hotel offering studios and apartments with kitchenettes. Located in the theatre district, close to shopping and dining."
      },
      {
        "hotelName": "Brady Hotels Central Melbourne",
        "hotelAddress": "30 Little La Trobe St, Melbourne VIC 3000, Australia",
        "price": "Approx. AUD 180-260 per night",
        "hotelImageUrl": "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "geoCoordinates": { "latitude": -37.8091, "longitude": 144.9627 },
        "rating": 4.5,
        "description": "A stylish and contemporary hotel located near Melbourne Central Station and Queen Victoria Market, offering comfortable rooms and a central location."
      }
    ],
    "itinerary": [
      {
        "day": 1,
        "theme": "CBD Laneways & Market Life",
        "dailyPlan": [
          {
            "placeName": "Flinders Street Station & Federation Square",
            "placeDetails": "Start at Melbourne's most iconic landmark, Flinders Street Station. Cross the road to Federation Square, the city's modern public space. Grab a coffee from a local cafe and soak in the morning city vibe.",
            "placeImageUrl": "https://images.unsplash.com/photo-1544327415-34a23b1c6778?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "geoCoordinates": { "latitude": -37.8183, "longitude": 144.9671 },
            "ticketPricing": "Free",
            "time": "9:00 AM - 10:30 AM",
            "travelTime": "N/A (Starting point)",
            "bestTimeToVisit": "Morning"
          },
          {
            "placeName": "Hosier Lane & Degraves Street",
            "placeDetails": "Wander from Fed Square into Hosier Lane to see world-famous street art. Then, make your way to Degraves Street, a Parisian-style laneway perfect for people-watching and a classic Melbourne brunch or coffee.",
            "placeImageUrl": "https://images.unsplash.com/photo-1590089083112-685757a2c7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            "geoCoordinates": { "latitude": -37.8166, "longitude": 144.9691 },
            "ticketPricing": "Free (food and drink at own cost)",
            "time": "10:30 AM - 12:30 PM",
            "travelTime": "5 min walk from previous location",
            "bestTimeToVisit": "Late morning for the best cafe buzz."
          },
          {
            "placeName": "Queen Victoria Market",
            "placeDetails": "Take a free tram within the CBD zone to the historic Queen Victoria Market. Explore the sheds, grab a delicious and affordable lunch from one of the many food stalls (try the borek or a bratwurst), and browse local produce and souvenirs.",
            "placeImageUrl": "https://images.unsplash.com/photo-1589025984282-14c11451bf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            "geoCoordinates": { "latitude": -37.8076, "longitude": 144.9568 },
            "ticketPricing": "Free entry (check market days - closed Mon & Wed)",
            "time": "12:30 PM - 3:00 PM",
            "travelTime": "10 min tram ride from CBD",
            "bestTimeToVisit": "Lunchtime for food, morning for fresh produce."
          }
          // ... (rest of daily plans for Days 1–3 continue here)
        ]
      }
    ],
    "tripDetails": {
      "budget": "Moderate",
      "duration": "3 Days",
      "location": "Melbourne VIC, Australia",
      "notes": "Melbourne has a fantastic public transport system, especially the free tram zone in the CBD. For travel outside this zone (like to St Kilda or Fitzroy), purchase a Myki card. This itinerary is a mix of walking and short tram rides.",
      "travelerCount": 1,
      "userEmail": "tushar.developer127@gmail.com"
    },
    "userSelection": {
  "budget": "Moderate",
  "location": {
    "label": "Melbourne VIC, Australia",
    "value": {
      "description": "Melbourne VIC, Australia",
      "place_id": "ChIJ90260rVG1moRkM2MIXVWBAQ",
      "reference": "ChIJ90260rVG1moRkM2MIXVWBAQ",
      "structured_formatting": {
        "main_text": "Melbourne",
        "secondary_text": "VIC, Australia"
      },
      "types": ["colloquial_area", "geocode", "locality", "political"],
    }
  }
},
    "noOfDays": "3"
}

Return ONLY valid JSON with these keys. Do not include any explanations, text, or Markdown. Ensure the JSON is fully parseable.
`;
