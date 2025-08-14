
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





export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} people with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image URL, Geo coordinates, rating, description and suggest itinerary with placeName, PlaceDetails, Place image Url, Geo Coordinate, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."
