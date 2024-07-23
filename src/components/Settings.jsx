import React, {useContext} from "react"
import LogNav from "./LogNav"
import { UserContext } from "./Contexts"



export default function Settings(props) {
    const users = useContext(UserContext)



    return (

        <div className=" p-5 bg-base-200 w-full" data-theme="forest">
            <p className="font-2 font-bold text-2xl">Settings</p>
            <div className="p-4 rounded-lg bg-base-300 mt-2">
                <p className="font-1 font-semibold">Basic Info:</p>
                <div className="flex flex-col gap-2 mt-3">
                    <div className="p-3 bg-base-200 w-fit rounded-lg">
                        <p className="font-2 ml-2 font-bold text-lg">Name:</p>
                        <input disabled className="input input-disabled font-1 font-semibold"  value={users.name} />
                    </div>
                    <div className="p-3 bg-base-200 w-fit rounded-lg">
                        <p className="font-2 ml-2 font-bold text-lg">Email:</p>
                        <input disabled className="input input-disabled font-1 font-semibold"  value={users.email} />
                    </div>
                    <div className="p-3 bg-base-200 w-fit rounded-lg">
                        <p className="font-2 ml-2 font-bold text-lg">Email:</p>
                        <input disabled className="input input-disabled font-1 font-semibold"  value={users.email} />
                    </div>


                </div>

            </div>
                
            
            



        



        </div>
    )
}