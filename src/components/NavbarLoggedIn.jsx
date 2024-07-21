import React from "react"




export default function Navbar(props) {





    return (
        
        <>


        <div className="navbar sticky top-0 left-0 w-full p-5 bg-base-300 z-10">
            <div className="flex-1">
                <div className="btn btn-primary btn-ghost btn-lg">
                <p className="font-1 text-4xl font-bold">Incepta</p>
                </div>
               
            </div>

            <div className="flex-0">
                <div className="w-full font-2 text-2xl flex flex-row gap-4 items-center justify-items-center"> 
                    <div className="btn btn-ghost">
                        <p>About us</p>
                    </div>
                    <div className="btn btn-ghost">
                        <p>What we do</p>
                    </div>
                    <div className="btn btn-ghost">
                        <p>About us</p>
                    </div>
                    <a href="">
                    <div className="btn btn-accent font-1 text-xl grid grid-cols-2">
                        <img className="size-9" src="data:image/png;base64,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" />
                        /Profile/
                    </div>
                    </a>
                </div>
            </div>
        </div>



        




        </>
    )
}


