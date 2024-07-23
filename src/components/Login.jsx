import React, {useState} from "react"
import Navbar from "./Navbar"
import FormError from "./FormError"

import Footer from "./Footer"
const endpoint = "https://localhost:300"
export default function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const callLogin = () => {
        return new Promise(async(resolve) => {
            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
              }

              const response = await fetch(endpoint + "/login", headers)


              resolve(response.json())
        })
    }

    const processLogin = () => {
        callLogin().then((res) => {
            if (res.code === "err") {
                setErrorMessage("Invalid Request")

            } else if (res.code === 'ok') {
                window.location.replace("/main")
            } else {
                setErrorMessage("Invalid Request")
            }
        })
    }





    return (

        <>

        <div className="" data-theme="forest">
            <Navbar />
            <div className="bg-base-100 pb-56">

            
            <div className="bg-base-200 p-10 rounded-lg mt-24 mx-auto w-fit relative">
                <FormError error={errorMessage} />
                <p className="text-3xl font-bold font-2 mb-4 text-center">Login</p>
                <div className=" ">
                    <div className="p-10 flex flex-col gap-4 font-2 bg-base-300 rounded-lg">
                        <input type="email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="input w-full input-lg" placeholder="Email" />
                        <input type="password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} className="input w-full input-lg" placeholder="Password" />
                        <div>
                        <button className="w-full btn btn-accent btn-lg" onClick={() => {
                            processLogin()
                        }}>
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
            
        </div>
        <Footer />
        




        </>
    )
}


