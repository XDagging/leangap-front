import React from "react"

import { FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";


export default function Footer(props) {




    return (


        <div className="footer bg-neutral p-12">
            <div>
                <p className="font-1 font-bold text-2xl">Incepta</p>
                <p className="font-2">A Hernandez Production</p>
            </div>
            <div className="font-2 underline-offset-4">
                <p className="underline link">Privacy Policy</p>
                <p  className="underline link">Cookie Policy</p>
                <p  className="underline link">Legal</p>
                <p  className="underline link">For College Students</p>
            </div>
            <div className="flex flex-row ">
                <div className="btn btn-neutral btn-outline btn-circle">
                    <FaInstagram />

                </div>
                <div className="btn btn-neutral btn-outline btn-circle">
                    <FaTwitter />

                </div>
                <div className="btn btn-neutral btn-outline btn-circle">
                    <FaTiktok />

                </div>
                
            </div>
        



        </div>
    )
}