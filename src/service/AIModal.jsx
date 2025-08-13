// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

// import {
//   GoogleGenAI,
// } from '@google/genai';

// export async function generateWithGemini(prompt) {
//   const ai = new GoogleGenAI({
//     apiKey: import.meta.env.VITE_GEMINI_API_KEY,
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
//           text: prompt,
//         },
//       ],
//     },
//     {
//       role: 'model',
//       parts: [
//         {
//           text: `**Exploring Vegas Hotels & Activities**

// I've begun compiling data on Las Vegas hotels suitable for couples, focusing on affordability.  I'm gathering essential details like addresses, prices, and ratings. Concurrently, I'm researching cost-effective and complimentary activities and attractions perfect for couples visiting the city. This data will provide a solid base to build upon.


// **Compiling Las Vegas Itinerary**

// I've made headway, shifting from individual components to the big picture. I'm actively synthesizing hotel and activity data into a structured 3-day itinerary. This includes incorporating transportation times and suggested visit times for each activity. The aim is to create a dynamic, cost-effective experience. I'm focusing on ensuring the final JSON format meets the user's need.


// **Constructing a Vegas Itinerary**

// I'm currently focused on developing a JSON structure to meet the user's requirements. My progress involves building the framework for a 3-day itinerary focusing on affordability. This entails researching and sourcing budget-friendly hotel options in Las Vegas.


// **Gathering Hotel Details**

// I'm now focused on collecting precise details for budget-friendly hotels in Las Vegas.  My recent efforts have been on pinpointing hotel addresses, securing price ranges, finding image URLs, and obtaining precise geo-coordinates.  These are crucial to complete the initial JSON structure. The goal is a comprehensive and structured data set.


// **Defining Itinerary Structure**

// I'm now fully immersed in developing the JSON structure. My immediate focus is on crafting the day-by-day itinerary segments. I plan to incorporate timings and estimated travel durations between attractions using public transport options. Additionally, I'm working on integrating the "best time to visit" element, based on preliminary findings. The goal is to create a complete and cohesive travel plan.


// **Exploring Budget Options**

// I've made headway, compiling a solid list of affordable hotels and free attractions, complete with addresses and GPS coordinates. Public transport details, including the Deuce bus and the Monorail, are now documented. My research on these options is progressing.


// **Organizing the Information**

// I'm now diving into the JSON formatting. I've selected the best hotel options and am working on the day-by-day itinerary. This involves mapping out the sequence of attractions and estimating travel times using public transport, aiming to construct a logical, budget-friendly 3-day experience. I'm focused on populating all the required fields and sourcing image URLs. I should be able to construct the JSON shortly.


// **Crafting the JSON**

// I'm now fully immersed in the JSON structuring phase. I've narrowed down the hotel choices and started formatting their details, including image URLs. The itinerary is taking shape day by day. I'm carefully sequencing attractions, calculating travel times, and incorporating visit durations to create a cohesive and efficient 3-day budget plan. My focus is on ensuring every required field, from place details to ticket prices, is populated. Once complete, I'll have a fully functional JSON object.


// `,
//         },
//         {
//           text: `\`\`\`json
// {
//   "TravelPlan": {
//     "Location": "Las Vegas",
//     "Duration": "3 Days",
//     "BudgetType": "Cheap",
//     "BestTimeToVisit": "The best times to visit Las Vegas for budget-conscious travelers are typically during the shoulder seasons. These include the months of January and February (after New Year's), and from September to November. [2, 3, 4] During these times, the weather is generally pleasant, and you can often find lower prices on hotels and flights compared to the peak seasons of spring and early fall. [2, 3, 4] Weekdays are almost always cheaper than weekends for both accommodation and airfare. [3, 14]",
//     "Hotels": [
//       {
//         "HotelName": "Excalibur Hotel & Casino",
//         "HotelAddress": "3850 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
//         "Price": "Approximately $40-$150 per night",
//         "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Excalibur_Hotel_Casino_at_night_2.jpg/1200px-Excalibur_Hotel_Casino_at_night_2.jpg",
//         "GeoCoordinates": {
//           "latitude": 36.1047,
//           "longitude": -115.1753
//         },
//         "Rating": "3.5-star",
//         "Description": "A budget-friendly, castle-themed hotel and casino located on the south end of the Strip. It offers a variety of dining options, live entertainment, and a large casino floor."
//       },
//       {
//         "HotelName": "The STRAT Hotel, Casino & SkyPod",
//         "HotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104, USA",
//         "Price": "Approximately $30-$120 per night",
//         "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Stratosphere_in_Las_Vegas_in_2016.jpg",
//         "GeoCoordinates": {
//           "latitude": 36.1476,
//           "longitude": -115.1568
//         },
//         "Rating": "3-star",
//         "Description": "Known for its iconic 1,149-foot tower with thrill rides at the top. This hotel offers affordable rooms and is located on the north end of the Strip."
//       },
//       {
//         "HotelName": "Circus Circus Hotel & Casino",
//         "HotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
//         "Price": "Approximately $25-$100 per night",
//         "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Circus_Circus_Hotel_and_Casino_-_Las_Vegas.jpg/1200px-Circus_Circus_Hotel_and_Casino_-_Las_Vegas.jpg",
//         "GeoCoordinates": {
//           "latitude": 36.1374,
//           "longitude": -115.1646
//         },
//         "Rating": "3-star",
//         "Description": "A family-friendly hotel with a circus theme, featuring free daily circus acts and an indoor amusement park called the Adventuredome. [44] It's a very budget-friendly option on the Strip. [30, 39, 40]"
//       },
//       {
//         "HotelName": "Luxor Hotel and Casino",
//         "HotelAddress": "3900 S Las Vegas Blvd, Las Vegas, NV 89119, USA",
//         "Price": "Approximately $45 - $160 per night",
//         "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Luxor_Hotel_and_Casino_2015.jpg/1200px-Luxor_Hotel_and_Casino_2015.jpg",
//         "GeoCoordinates": {
//           "latitude": 36.0954,
//           "longitude": -115.1761
//         },
//         "Rating": "3.5-star",
//         "Description": "A distinctive 30-story pyramid-shaped hotel with an Egyptian theme. It offers a large casino, various entertainment options, and is connected to Mandalay Bay and Excalibur."
//       },
//       {
//         "HotelName": "Flamingo Las Vegas Hotel & Casino",
//         "HotelAddress": "3555 S Las Vegas Blvd, Las Vegas, NV 89109, USA",
//         "Price": "Approximately $40 - $180 per night",
//         "HotelImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flamingo_Las_Vegas_Hotel_and_Casino_in_2017.jpg/1200px-Flamingo_Las_Vegas_Hotel_and_Casino_in_2017.jpg",
//         "GeoCoordinates": {
//           "latitude": 36.1163,
//           "longitude": -115.1705
//         },
//         "Rating": "3.5-star",
//         "Description": "A classic Vegas hotel with a vibrant, retro theme. It features a 15-acre Caribbean-style pool and wildlife habitat with flamingos. [28, 38, 41, 49]"
//       }
//     ],
//     "Itinerary": [
//       {
//         "Day": "Day 1: The Iconic Las Vegas Strip (South & Center)",
//         "Plan": [
//           {
//             "placeName": "Welcome to Fabulous Las Vegas Sign",
//             "PlaceDetails": "Start your trip with a picture at the iconic 'Welcome to Fabulous Las Vegas' sign. It's a must-do for first-time visitors and a great way to kick off your adventure. To avoid crowds, try to go early in the morning. [11, 16]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Welcome_to_Fabulous_Las_Vegas_sign.jpg/1200px-Welcome_to_Fabulous_Las_Vegas_sign.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.082027,
//               "longitude": -115.172897
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "Located at the south end of the Strip. You can take the Deuce bus to get here. [11, 16]"
//           },
//           {
//             "placeName": "Explore the South Strip Casinos",
//             "PlaceDetails": "Walk north from the sign and explore the unique architecture of the south Strip casinos like Mandalay Bay, Luxor, and Excalibur. You don't have to gamble to enjoy the impressive themes and decor.",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Las_Vegas_Strip_mandalay_bay_luxor_excalibur.jpg/1200px-Las_Vegas_Strip_mandalay_bay_luxor_excalibur.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.0954,
//               "longitude": -115.1761
//             },
//             "ticketPricing": "Free to enter",
//             "TimeTravel": "Walking distance from the 'Welcome to Las Vegas' sign."
//           },
//           {
//             "placeName": "Bellagio Conservatory & Botanical Gardens",
//             "PlaceDetails": "Experience the stunning seasonal displays at the Bellagio's Conservatory. [12] The intricate and beautiful arrangements of flowers and plants are a peaceful escape from the Strip's hustle and bustle and are completely free to enjoy. [24]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bellagio_Conservatory.jpg/1200px-Bellagio_Conservatory.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1126,
//               "longitude": -115.1767
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "Take the Deuce bus or walk from the south Strip. The bus ride will take approximately 15-20 minutes."
//           },
//           {
//             "placeName": "Fountains of Bellagio",
//             "PlaceDetails": "Witness the famous fountain show outside the Bellagio. The choreographed water, music, and light show is a spectacular and romantic experience. [18] Shows run every 30 minutes in the afternoons and every 15 minutes in the evenings. [6, 22, 23, 25]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Fountains_of_Bellagio_at_dusk.jpg/1200px-Fountains_of_Bellagio_at_dusk.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1126,
//               "longitude": -115.1767
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "Located right in front of the Bellagio."
//           },
//           {
//             "placeName": "LINQ Promenade",
//             "PlaceDetails": "Stroll through this open-air shopping and entertainment district. [26, 29] It has a vibrant atmosphere with street performers, unique shops, and is home to the High Roller observation wheel (ticketed). [22, 51]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/The_Linq_Promenade_at_night_2016.jpg/1200px-The_Linq_Promenade_at_night_2016.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1180,
//               "longitude": -115.1706
//             },
//             "ticketPricing": "Free to walk through",
//             "TimeTravel": "A short walk north from the Bellagio."
//           }
//         ]
//       },
//       {
//         "Day": "Day 2: Downtown & Fremont Street",
//         "Plan": [
//           {
//             "placeName": "Fremont Street Experience",
//             "PlaceDetails": "Head to Downtown Las Vegas to experience the vintage charm of Fremont Street. [15, 27] In the evening, watch the famous Viva Vision light show on the massive overhead canopy. There are also free concerts and street performers. [45, 48]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Fremont_Street_Experience_2018.jpg/1200px-Fremont_Street_Experience_2018.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.170719,
//               "longitude": -115.143929
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "Take the Deuce bus from the Strip to Downtown Las Vegas. The ride can take 30-45 minutes depending on traffic."
//           },
//           {
//             "placeName": "Explore Downtown Casinos",
//             "PlaceDetails": "Wander through the historic casinos of Downtown like the Golden Nugget and Binion's. The gambling stakes are often lower here than on the Strip, and the atmosphere is more old-school Vegas.",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Golden_Nugget_Casino_in_Las_Vegas.jpg/1200px-Golden_Nugget_Casino_in_Las_Vegas.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1709,
//               "longitude": -115.1462
//             },
//             "ticketPricing": "Free to enter",
//             "TimeTravel": "Located along the Fremont Street Experience."
//           },
//           {
//             "placeName": "Downtown Container Park",
//             "PlaceDetails": "A unique shopping and entertainment venue made from shipping containers. [12] It features boutique shops, quirky restaurants, and a playground with a giant flame-shooting praying mantis. It's a fun and relaxed place to hang out.",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Downtown_Container_Park_Las_Vegas.jpg/1200px-Downtown_Container_Park_Las_Vegas.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1681,
//               "longitude": -115.1377
//             },
//             "ticketPricing": "Free to enter",
//             "TimeTravel": "A short walk from the Fremont Street Experience."
//           }
//         ]
//       },
//       {
//         "Day": "Day 3: Art, Nature & Farewell",
//         "Plan": [
//           {
//             "placeName": "Seven Magic Mountains",
//             "PlaceDetails": "Take a trip out to the desert to see this vibrant and large-scale art installation. [17, 47] The seven towering stacks of brightly colored boulders are a stunning sight against the desert backdrop and offer fantastic photo opportunities. [42, 46]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Seven_Magic_Mountains_2016.jpg/1200px-Seven_Magic_Mountains_2016.jpg",
//             "GeoCoordinate": {
//               "latitude": 35.8399,
//               "longitude": -115.2710
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "This requires a bit of a journey. As there is no public transport, the most budget-friendly option would be a ride-sharing service. The drive is approximately 30-40 minutes from the Strip. [35]"
//           },
//           {
//             "placeName": "Flamingo Wildlife Habitat",
//             "PlaceDetails": "Back on the Strip, visit the serene Flamingo Wildlife Habitat at the Flamingo Hotel. [23] You can see Chilean flamingos, other exotic birds, fish, and turtles in a lush garden setting. It's a peaceful and free attraction. [24]",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flamingo_Wildlife_Habitat_-_Las_Vegas.jpg/1200px-Flamingo_Wildlife_Habitat_-_Las_Vegas.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1163,
//               "longitude": -115.1705
//             },
//             "ticketPricing": "Free",
//             "TimeTravel": "Located mid-Strip, easily accessible by the Deuce bus or the Monorail."
//           },
//           {
//             "placeName": "Window Shopping at The Grand Canal Shoppes",
//             "PlaceDetails": "End your trip with a stroll through The Grand Canal Shoppes at The Venetian. Enjoy the romantic ambiance of the indoor canals, complete with gondolas (rides are ticketed), and street performers. It's a great place for some last-minute souvenir hunting or simply to enjoy the incredible Italian-themed architecture.",
//             "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Grand_Canal_Shoppes_at_The_Venetian.jpg/1200px-Grand_Canal_Shoppes_at_The_Venetian.jpg",
//             "GeoCoordinate": {
//               "latitude": 36.1213,
//               "longitude": -115.1697
//             },
//             "ticketPricing": "Free to walk through",
//             "TimeTravel": "A short walk from the Flamingo."
//           }
//         ]
//       }
//     ]
//   },
//   "TransportationSuggestion": "For a cheap budget, the best way to get around the Las Vegas Strip and Downtown is by using the public bus system, The Deuce. [4, 5] A 3-day pass offers unlimited rides and is very economical. [9, 10, 14] The Las Vegas Monorail is another good option for traveling along the Strip, with multi-day passes available. [2, 3, 7, 8, 12, 13]"
// }
// \`\`\``,
//         },
//       ],
//     },
//     {
//       role: 'user',
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   // Get streaming response from Gemini
//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });

//   // Collect all chunks into one string
//   // let fileIndex = 0;
//   let fullText = '';
//   for await (const chunk of response) {
//     fullText += chunk.text;
//   }

//   console.log(fullText)

//   // Return it in an object
//   return { response: { text: fullText } };
// }

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





export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, Geo coordinates, rating, description and suggest itinerary with placeName, PlaceDetails, Place image Url, Geo Coordinate, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."
