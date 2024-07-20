import React from "react"
import Navbar from "./Navbar"


import Footer from "./Footer"

export default function Login(props) {




    return (

        <>

        <div className="">
            <Navbar />

            <div className="bg-base-200 p-10 rounded-lg mt-24 mb-56 mx-auto w-fit">
                <p className="text-3xl font-bold font-2 mb-4 text-center">Login</p>
                <div className=" ">
                    <div className="p-10 flex flex-col gap-4 font-2 bg-base-300 rounded-lg">
                        <input type="email" className="input w-full input-lg" placeholder="Email" />
                        <input type="password" className="input w-full input-lg" placeholder="Password" />
                        <div>
                        <button className="w-full btn btn-accent btn-lg">
                            <p className="font-2 text-lg">Login</p>
                        </button>
                        <p className="text-sm text-center mt-1">Don't have an account? <a href="#" className="underline underline-offset-2">Sign up</a></p>
                        </div>
                        
                    </div>
                    {/* <div className="self-center justify-self-center">
                        <p className="font-2">Dont have an account?</p>
                        <p></p>
                    </div> */}
                    
                </div>


            </div>

            
        </div>
        <Footer />
        




        </>
    )
}


