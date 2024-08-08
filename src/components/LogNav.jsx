import React, {useContext} from "react"
import {UserContext, MenuContext} from "./Contexts"

import { FaChalkboard } from "react-icons/fa";

export default function LogNav(props) {
    const user = useContext(UserContext)
    
    const changeNav = useContext(MenuContext)







    return (

        <div className="p-4 bg-base-300 min-w-[25vw] h-screen sticky top-0 left-0" data-theme="forest">
            <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-0 w-full p-2 py-5 bg-base-100">
                {(user.student) && (
                    <div className="">
                    <div>
                        <a href="/" className="btn btn-ghost text-2xl font-1 font-bold">Incepta</a>
                    </div>
                    <div className="ml-4">
                    <div className="tooltip tooltip-right font-2">
                        <p className="font-1 font-bold text-lg">Credits Remaining: <span className="p-2 rounded-full bg-base-300 ml-2">{user.tokens}</span></p>
                

                </div>
                <div className="flex flex-row gap-2 tooltip tooltip-right font-2 text-left"  data-tip="Credits are used to purchase connections with college students.">
                    <p className="font-1 link" onClick={() => {
                        changeNav("Pricing")
                    }}>Buy more</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                    </svg>
                </div>


                    </div>
                    
                    
                    </div>
                )}
                {(!user.student) && (
                    <>
                    <a href="/" className="font-1 font-semibold btn btn-ghost text-2xl">Incepta</a>
                    <p className="font-2 ml-4 font-semibold">Copyright 2024</p>
                    </>
                    
                )}
                
                

            </div>
            <div className="p-2 flex flex-col gap-2">
            {(user.name !== null) && (
                <div className="bg-base-100 p-4 rounded-lg">
            {(user.student) && (
                <div onClick={() => changeNav("Settings")} className="avatar select-none cursor-pointer placeholder">
    <div className="bg-base-300 w-16 rounded-full">
        <p className="text-3xl font-2 font-bold">{user.name.substring(0,1)}</p>
    </div>

</div>
            )}
            {(!user.student) && (
                <div className="avatar w-24 h-24 rounded-full" onClick={() => changeNav("Settings")}>
                    <img alt="profilePic" src={"https://inceptaimg.s3.amazonaws.com/" + user.img} className="w-full h-full rounded-full object-cover" />


                </div>
            )}

<p className="font-1 text-lg font-bold p-2">{user.name}</p>

</div>
            )}
                
                <div className="p-4 bg-base-100 rounded-lg">
                    <div className="p-2 bg-base-300 rounded-lg">
                    <p className="font-2 font-bold p-2 text-lg">Quick Actions:</p>

                    <div className=" flex flex-col gap-2 p-4">
                    <div className="btn btn-secondary font-1" onClick={() => changeNav("Dashboard")}>
                        <p className="font-2 font-bold text-lg">Dashboard</p>
                        <FaChalkboard className="size-6" />


                    </div>
                    <a className="btn btn-secondary font-1" onClick={() => changeNav("Messaging")}>
                        <p className="font-2 font-bold text-lg">Messages</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
</svg>


                    </a>
                    <div className="btn btn-secondary font-1" onClick={() => changeNav("Settings")}>
                        <p className="font-2 font-bold text-lg">Profile Settings</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
</svg>



                    </div>
                    <a className="btn btn-accent font-1 btn-outline" onClick={() => changeNav("Pricing")}>
                        <p className="font-2 font-bold text-lg">Credits</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
</svg>



                    </a>



                    



                </div>

                    </div>
                    

                </div>
                
                

            </div>

            </div>

            





        </div>
    )
}