import React, {useState} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"


import { FaChild, FaGraduationCap} from "react-icons/fa";

const formQuantity = 5
export default function Signup(props) {



    const [currentInterest, setCurrentInterest] = useState("")
    const [interests, setInterests] = useState([])

    const [userType, setUserType] = useState("")


    const [currentSlide, setCurrentSlide] = useState(0)
    const nextSlide = () => {
        setCurrentSlide(prevSlide => prevSlide+1)
    }
    const prevSlide = () => {
        setCurrentSlide(prevSlide => prevSlide-1)
    }




    return (


        <>

        
        <Navbar />
        <div className="my-24 w-4/6 rounded-lg min-h-[40vh] bg-base-300 mx-auto p-10 text-center relative">
            {/* <div className="absolute top-2 right-4 p-4 rounded-full text-center bg-neutral">
                <p className="font-1 font-bold">{currentSlide+1}/{formQuantity}</p>
            </div> */}
            
            


        
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
                                <input type="text" className="input input-accent font-1 font-semibold" placeholder="John Doe" />
                            </div>

                            
                            
                        </div>
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">{userType==="student"? "Personal": "College"} Email: </p>
                            </div>
                            <div>
                                <input type="email" className="input input-accent font-1 font-semibold" placeholder="example@gmail.com" />
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
                            <div>
                            </div>
                            <div className="flex flex-wrap flex-row gap-2 p-5">
                                {interests.map((interest, i) => (
                                    <div key={i} className="p-4 rounded-lg bg-base-200">
                                        <p className="font-1 font-semibold">{interest}</p>

                                    </div>
                                ))}
                            </div>
                            
                            
                        </div>
                     
                        
                        

                    </div>



                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-neutral">
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">Password:</p>
                            </div>
                            <div>
                                <input type="text" className="input input-accent font-1 font-semibold" placeholder="**********" />
                            </div>

                            
                            
                        </div>
                        <div className="grid grid-col-2 items-center">
                            <div>
                                <p className="font-2 font-semibold">Grade:</p>
                            </div>
                            <div>
                                <select className="select select-primary font-1 font-semibold">
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
                                
                                <textarea className="textarea textarea-primary font-1 w-full textarea-lg" placeholder="Write your bio here (hobbies, about yourself)" />


                        </div>
                        )}
                        
                        <div className="grid grid-col-2 items-center">
                            <div className="btn btn-accent btn-wide">
                                <p className="font-1 font-semibold">Submit</p>

                            </div>

                            
                            
                        </div>


                    </div>



                    

                </div>



            </div>
        )}
        </div>

        <Footer />

        





        </>
    )
}