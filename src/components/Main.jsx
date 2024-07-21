import React, {useState} from "react";
import LogNav from "./LogNav"



export default function Main(props){

    const [currentMenu, setCurrentMenu] = useState("Dashboard")
    const [topSchool, setTopSchool] = useState([
        {
            name: "Havard",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "Stanford",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "MIT",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "UMD",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "HBA",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
    ])


    return (

        <>
        


            <div className="flex flex-row" data-theme="light">
                <LogNav />
                {(currentMenu === "Dashboard") && (
                    <div className="p-10 bg-base-200 w-full">
                    <p className="font-2 text-4xl font-bold mb-10">Dashboard:</p>
                    <div className="grid grid-cols-3 items-center justify-items-center gap-4">

                        {topSchool.map((school,i) => (
                            <div className="bg-base-300 w-full h-full p-8 rounded-lg btn btn-base-200">
                                <img src={school.img} className="p-2 bg-base-100 rounded-lg" />
                                <p className="font-1 text-4xl text-center font-bold pt-4">{school.name}</p>
                        
                            </div>

                        ))}
                        
                        
                    </div>
                    

                </div>

                )}
                

            </div>



        </>
    )
}