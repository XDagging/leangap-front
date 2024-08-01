import React from "react"

import { FaInstagram, FaTwitter, FaTiktok} from "react-icons/fa";


export default function Footer(props) {




    return (


        <div className="footer bg-neutral p-12" data-theme="forest">
            <div>
                <p className="font-1 font-bold text-2xl">Incepta</p>
                <p className="font-2">A Hernandez Production</p>
            </div>
            <div className="font-2 underline-offset-4">
                <a href="/terms" className="underline link">Terms of Service</a>
                <a href="/privacy"  className="underline link">Privacy Policy</a>
                <a href="/signup" className="underline link">For College Students</a>
            </div>
            <div className="flex flex-row ">
                <a className="btn btn-neutral btn-outline btn-circle" href="https://www.instagram.com/getincepta/?hl=en">
                    <FaInstagram />
                </a>
                <a href="https://www.tiktok.com/@getincepta" className="btn btn-neutral btn-outline btn-circle">
                    <FaTiktok />

                </a>
                
            </div>
        



        </div>
    )
}