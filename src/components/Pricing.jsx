import React from "react"

import { FaPeopleCarry } from "react-icons/fa";



export default function Pricing(props) {

    // accepts prop.signup

    // true = redirects to /signup
    // false = goes to stripe




    return (


        <div className=" p-10 rounded-lg mx-auto w-4/6 mt-24" data-theme="forest">
            <p className="text-center font-1 text-3xl font-bold">Pricing:</p>

            <div className="w-4/6 mx-auto">
                <div className="w-full h-full p-4">
                    <div className="p-2 bg-base-300 rounded-lg w-4/6 mx-auto">
                        <div className="p-2">
                        <div className="w-4/6 mx-auto p-2 rounded-lg">
                            <FaPeopleCarry className="size-12 mx-auto" />
                            <p className="text-center font-1 font-bold text-2xl mt-2">Our Standard Plan</p>
                            <p className="text-center font-2">Quickly and efficiently connect with people from up to 3 different colleges.</p>
                        </div>
                        <div>
                            <ul className="list-disc w-4/6 mx-auto mt-4 p-2 bg-base-300 font-1 flex flex-col gap-2">
                                <li>Up to 3 student connections per month</li>
                                <li>Guaranteed 72+ hours of messaging time.</li>
                                <li>Guaranteed real conversations.</li>
                            </ul>
                        </div>

                        </div>
                        
                        
                        

                        <div className="w-full mx-auto p-4 bg-base-100 mt-6 rounded-b-lg">
                            <p className="text-center font-2 text-3xl font-bold">$39.99</p>   
                            <div className="w-fit mx-auto mt-4">
                                {(props.signup) && (
                                    <a href="/signup" className="btn btn-wide text-lg btn-accent font-1">
                                        <p>Buy now</p>
                                    </a>
                                )}
                                {(!props.signup) && (
                                    <a href="#" className="btn btn-wide text-lg btn-accent font-1">
                                        <p>Buy now</p>
                                    </a>
                                )}
                                      
                            </div>
                            
                        </div>
                         
                    </div>
                    
                    
                


                </div>


            </div>






        </div>
    )
}