import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';

function Header() {

    const navigate = useNavigate()
    const [openDialog, setOpenDialog] = useState(false);

    // const user = localStorage.getItem('user')
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(() => {
        console.log(user)
        console.log(user?.picture)
    }, [user])

    const handleLogout = () => {
        googleLogout();
        localStorage.clear();
        navigate('/')
    }

    const login = useGoogleLogin({
        // onSuccess: codeResponse => console.log(codeResponse),
        onSuccess: codeResponse => GetUserDetails(codeResponse),
        onError: codeResponse => console.log(codeResponse)
    });

    const GetUserDetails = (tokenInfo) => {
        // console.log("Token info received:", tokenInfo);

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

            })
            .catch((error) => {
                console.error("Error fetching profile:", error.response?.data || error.message);
            });
    };

    const hadleSignIn = () => {
        setOpenDialog(true)
    }



    return (
        <header>
            <div className='p-2 shadow-sm flex justify-between items-center px-5'>
                {/* Logo is accessed automatically from the public folder */}
                <img src="/logo.svg" alt="Logo" />

                <div>
                    {user ?
                        <div className='flex items-center gap-3'>
                            <Button variant="outline" className="rounded-full" onClick={() => navigate("my-trip")}>My Trip</Button>

                            <Popover>
                                <PopoverTrigger><img src={user?.picture} className='h-[40px] w-[40px] rounded-full' alt="" /></PopoverTrigger>
                                <PopoverContent>
                                    <h2 className='cursor-pointer' onClick={() => {
                                        handleLogout();      // first action
                                        // setOpenDialog(true); // second action
                                    }}
                                    >Logout</h2>
                                </PopoverContent>
                            </Popover>
                        </div>
                        :
                        <Button onClick={hadleSignIn}>SignIn</Button>}
                </div>
                <Dialog open={openDialog}>

                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>

                                <div className="flex justify-center items-center flex-col mt-10 px-6">
                                    {/* Logo */}
                                    <div className="p-3 bg-white shadow-lg rounded-2xl">
                                        <img className="mx-auto h-16 w-16" src="/logo.svg" alt="App Logo" />
                                    </div>

                                    {/* Heading */}
                                    <h2 className="font-extrabold text-2xl mt-6 text-gray-900 tracking-wide">
                                        Sign In With Google
                                    </h2>
                                    <p className="text-gray-500 mt-2 text-center max-w-sm leading-relaxed">
                                        Sign in to the app with <span className="font-medium text-gray-700">Google authentication</span> securely.
                                    </p>

                                    {/* Button */}
                                    <div className="mt-10 w-full max-w-sm">
                                        <Button
                                            onClick={login}
                                            className="group w-full py-4 rounded-xl bg-white text-gray-700 shadow-md border border-gray-200  hover:bg-black hover:text-white hover:shadow-xl transition-all duration-300 flex gap-3 justify-center items-center"
                                        >
                                            <FcGoogle className="h-6 w-6" />
                                            Sign In With Google
                                        </Button>

                                    </div>
                                </div>

                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </header>
    );
}

export default Header;
