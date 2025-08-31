import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/custom/Header';
import CreateTrip from './components/features/trip/CreateTrip'
import { Toaster } from './components/ui/sonner'
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './components/features/trip/ViewTrip'
import RootLayout from './layouts/RootLayout'
import MyTrip from './components/features/trip/MyTrip'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: '/create-trip',
//     element: <CreateTrip />
//   },
//   {
//     path: '/create-trip/view-trip/:tripId',
//     element: <ViewTrip />
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },  // ✅ use App instead of Home
      // { path: "create-trip", element: <CreateTrip /> },
      // { path: "create-trip/view-trip/:tripId", element: <ViewTrip /> },
      // { path: "my-trip", element: <MyTrip /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      {/* <Header /> */}
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
