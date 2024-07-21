import React, {useState} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import FormError from "./FormError"


import { FaChild, FaGraduationCap} from "react-icons/fa";

const formQuantity = 5
const endpoint = "https://localhost:300"
export default function Signup(props) {
    const [code, setCode] = useState("")
    const [bio, setBio] = useState("")
    const [grade, setGrade] = useState(9)
    const [password, setPassword] = useState("")
    const [currentInterest, setCurrentInterest] = useState("")
    const [interests, setInterests] = useState([])
    const [email, setEmail] = useState("")
    const [userType, setUserType] = useState("")
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide(prevSlide => prevSlide+1)
    }
    const prevSlide = () => {
        setCurrentSlide(prevSlide => prevSlide-1)
    }

    const processForm = () => {
        let student;
        if (userType === "student") {
            student = false
        } else {
            student = true
        }

        return new Promise(async(resolve) => {
            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    student: student,
                    name: name,
                    interests: interests,
                    password: password,
                    grade: grade,
                    bio: bio,
                    email: email
                })
              }
            const response = await fetch(endpoint + "/signup", headers)

            resolve(response.json())
            
        })
    }
    
    const processVerify = () => {
        return new Promise(async(resolve) => {

            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: code
                })
              }

            const response = await fetch(endpoint + "/verify", headers)
            resolve(response.json())
        })
        


          
    }



    const submitVerify = () => {
        processVerify().then((res) => {
            if (res.code === "err") {
                setErrorMessage("Invalid Code")
                console.log("Something went wrong")



            } else if (res.code === "ok") {
                window.location.replace("/main")

            } else {
                setErrorMessage("Something went wrong") 
            }
        })

    }


    const submitForm = () => {

        // Form validation frontend
        let passedValidation = true
        
        if (name.length < 2) {
            setErrorMessage("Enter your name")
            passedValidation = false
        } else if (email.split("@").length !== 2) {
            setErrorMessage("Enter a valid email")
            passedValidation = false
        } else if (interests.length < 1) {
            setErrorMessage("Enter an interest")
            passedValidation = false
        } else if (password.length < 8) {
            setErrorMessage("Password must be at least 8-19 characters")
            passedValidation = false
        } 

        if (userType === "college") {
            if (bio.length < 20) {
                setErrorMessage("Bio must be at least 20 characters")
                passedValidation = false
            } else if (bio.length > 150) {
                setErrorMessage("Bio cannot be more than 150 characters")
                passedValidation = false
            }
        }





        if (passedValidation) {
            processForm().then((res) => {
                if (res.message === "invalid email") {
                    setErrorMessage("Please use your .edu account")
        
                } else if (res.code === "err") {
                    setErrorMessage("Invalid request")
                    console.log("invalid request")
                } else if (res.code === 'ok') {
                    // 
                    console.log("all went well")
                    nextSlide()
                } else {
                    setErrorMessage("Invalid request")
                    console.log("something went wrong")
                }
            })


        }
        

    }




    return (


        <section data-theme="forest">

        
        <Navbar />
        <div className="my-24 mb-40 w-4/6 rounded-lg min-h-[40vh] bg-base-300 mx-auto p-10 text-center relative">
            <FormError error={errorMessage} />



            
            


        
        {(currentSlide ===0) && (
            <div className="grid grid-cols-2 items-center justify-items-center p-4 select-none gap-4">
                <div className="w-full h-full bg-base-200 p-10 hover:bg-base-100 transition-all rounded-lg cursor-pointer" onClick={(e) => {
                    setUserType("student")
                    nextSlide()
                    
                }}>
                    <div className="w-fit mx-auto p-4 bg-neutral rounded-full">
                        <FaChild className="size-24" />
                        
                    </div>
                    <p className="   font-1 text-lg font-semibold mt-4">I am a High School student</p>


                </div>
                <div className="w-full h-full bg-base-200 p-10 hover:bg-base-100 transition-all rounded-lg cursor-pointer" onClick={(e) => {
                    setUserType("college")
                    nextSlide()
                }}>
                    <div className="w-fit mx-auto p-4 bg-neutral rounded-full">
                        <FaGraduationCap className="size-24" />
                        
                    </div>
                    <p className="font-1 text-lg font-semibold mt-4">I am a College Student</p>


                </div>
            </div>

        )}
        {(currentSlide === 1) && (
            <div className="text-left">
                <p className="font-2 text-2xl font-bold">Basic Information</p>
                
                <div className="p-4 rounded-lg bg-base-100 grid grid-cols-2  gap-4">

                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-neutral">
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">Name:</p>
                            </div>
                            <div>
                                <input type="text" className="input input-accent font-1 font-semibold" value={name} placeholder="John Doe" onChange={(e) => {
                                    setName(e.target.value)
                                }} />
                            </div>

                            
                            
                        </div>
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">{userType==="student"? "Personal": "College"} Email: </p>
                            </div>
                            <div>
                                <input type="email" className="input input-accent font-1 font-semibold" placeholder="example@gmail.com" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>

                            
                            
                        </div>
                        
                            <div className="grid grid-col-2  items-center">
                            <div>
                            {(userType === "student") && (
                                <p className="font-2 font-semibold">Interests:</p>
                            )}
                            {(userType === "college") && (
                                <p className="font-2 font-semibold">Major(s):</p>
                            )}
                                
                            </div>
                            <div className="join">
                                <select className="select select-accent font-1 font-semibold join-item" value={currentInterest} onChange={(e) => {
                                    setCurrentInterest(e.target.value)
                                }}>
                                    <option value="business">Business</option>
                                    <option value="nursing">Nursing</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="biology">Biology</option>
                                    <option value="education">Education</option>
                                    <option value="engineering">Engineering</option>
                                    <option value="comp sci">Computer Science</option>
                                    <option value="communications">Communications</option>
                                    <option value="criminal">Criminal Justice</option>
                                    <option value="political">Political Science</option>
                                    <option value="economics">Economics</option>
                                    <option value="english">English</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="environmental">Environmental Science</option>
                                    <option value="history">History</option>
                                    <option value="social">Social Work</option>
                                    <option value="math">Mathematics</option>
                                

                                
                                </select>
                                <div className="join-item btn btn-accent" onClick={(e) => {
                                    if ((currentInterest !== "") && (!interests.includes(currentInterest)) && (interests.length < 6)) {
                                        setInterests((prevInterests) => {
                                            return [...prevInterests, currentInterest]
                                        })
                                        setCurrentInterest("")
                                    }
                                    
                                }}>
                                    <p className="font-1 font-semibold">Add {userType==="student"? "Interest": "Major"}</p>
                                </div>
                                {/* <input type="text" className="input input-accent font-1 font-semibold" placeholder="" /> */}
                            </div>
                            <p className="font-1 text-sm">Up to 6 Add {userType==="student"? "Interests": "Majors"}</p>
                            
                            <div className="flex flex-wrap flex-row gap-2 p-5">
                                {interests.map((interest, i) => (
                                    <div key={i} className="p-4 rounded-lg bg-base-200">
                                        <p className="font-1 font-semibold">{interest}</p>

                                    </div>
                                ))}
                            </div>
                            <div className="">
                                <p className=""></p>
                            </div>
                           
                            
                            
                            
                        </div>
                     
                        
                        

                    </div>



                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-neutral">
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">Password:</p>
                            </div>
                            <div>
                                <input type="password" className="input input-accent font-1 font-semibold" placeholder="**********" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>

                            
                            
                        </div>
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">Grade:</p>
                            </div>
                            <div>
                                <select className="select select-primary font-1 font-semibold" value={grade} onChange={(e) => {
                                    setGrade(e.target.value)
                                }}>
                                    <option value="9">Freshman</option>
                                    <option value="10">Sophomore</option>
                                    <option value="11">Junior</option>
                                    <option value="12">Senior</option>
                                </select>
                                {/* <input type="email" className="input input-accent font-1 font-semibold" placeholder="example@gmail.com" /> */}
                            </div>

                            
                            
                        </div>
                        {(userType === "college") && (
                            <div className="relative">
                                
                                <textarea onChange={(e) => {
                                    setBio(e.target.value)
                                }} className="textarea textarea-primary font-1 w-full textarea-lg" placeholder="Write your bio here (hobbies, about yourself)" />


                        </div>
                        )}
                        
                        <div className="grid grid-col-2 items-center">
                            <div className="btn btn-accent btn-wide" onClick={() => {
                                submitForm()
                        
                            }}>
                                <p className="font-1 font-semibold">Submit</p>

                            </div>

                            
                            
                        </div>


                    </div>



                    

                </div>



            </div>
        )}

        {(currentSlide === 2) && (
            <div className="p-2 rounded-lg bg-base-200 w-fit mx-auto">


                <div className="p-10 pb-8 bg-base-100 w-fit mx-auto">
                    <p className="text-center font-1 text-2xl font-bold">Verify your email</p>
                    <p className="font-2 font-semibold">A verification code was sent to <i>{email}</i><br/>Check your spam if not found</p>
                </div>
                <div className="p-2 rounded-b-lg bg-base-300 flex flex-col items-center gap-2">
                    <input value={code} onChange={(e) => {setCode(e.target.value)}} className="input input-primary text-center font-2" placeholder="*******" />
                    <button onClick={() => submitVerify()} className="btn btn-accent font-1 font-bold">
                        <p>Verify Code</p>
                    </button>
                </div>
                
            </div>
            
        )}
        
        </div>
        <Footer />

        

        





        </section>
    )
}