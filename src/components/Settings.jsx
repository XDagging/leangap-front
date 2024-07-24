import React, {useContext} from "react"
import LogNav from "./LogNav"
import { UserContext } from "./Contexts"


let grade;
export default function Settings(props) {
    const users = useContext(UserContext)

    if (grade === "9") {
        grade = "Freshman"
    } else if (grade === "10") {
        grade = "Sophomore"
    } else if (grade === "11") {
        grade = "Junior"
    } else {
        grade = "Senior"
    }

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
                        <p className="font-2 ml-2 font-bold text-lg">Grade:</p>
                        <input disabled className="input input-disabled font-1 font-semibold"  value={grade} />
                    </div>


                </div>

            </div>
            {(!users.student) && (
                
                <div className="p-4 rounded-lg bg-base-300 mt-2">
                <p className="font-1 font-semibold text-xl">Payout Info:</p>


                <div className="mt-2 flex flex-row p-10 gap-2 ">
                    <div className="bg-base-100 w-full p-8 rounded-lg">
                        <p className="font-2 text-lg font-semibold">Amount Earned</p>
                        <div className="p-4 bg-base-300 rounded-lg mb-2">
                        <p className="font-1 p-2 bg-neutral w-fit rounded-lg font-bold text-lg mb-2">${users.amountEarned.toFixed(2)}</p>
                        <div className="flex flex-row items-center justify-items-center gap-2 font-1">
                            <p>$0.00</p>
                        <progress class="progress w-56 progress-primary" value={users.amountEarned} max="50"></progress>
                            <p>$50.00</p>
                        </div>
                        </div>
                        
                        {(users.amountEarned < 50) && (
                            <>
                            <p className="font-1 text-sm text-error">You can't cashout until you have earned $50</p>
                            <div className="btn btn-primary btn-disabled ml-2 mt-2 btn-outline font-1">
                            Cashout
                        </div>
                            </>
                            
                        )}
                        {(users.amountEarned > 50) && (
                            <div className="btn btn-primary ml-2 mt-2 btn-outline font-1">
                            Cashout
                        </div>
                        )}
                        
                        
                        

                    </div>
                    <div className="bg-base-100 w-full p-8 rounded-lg">
                        <p className="font-2 text-lg font-semibold">Account Termination</p>
                        <p className="font-1 text-sm">This action is <b>permanent </b>and is <b>irreversible</b></p>
                        <div className="btn btn-error font-1 btn-outline mt-2">
                            <p>Delete Account</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
</svg>

                        </div>
                    </div>

                </div>
            </div>
            )}
            
                
            
            



        



        </div>
    )
}