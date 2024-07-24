import React, {useState, useEffect} from "react";
import LogNav from "./LogNav"
import Dashboard from "./Dashboard"
import {UserContext, MenuContext} from "./Contexts"
import Loading from "./Loading"
import Messaging from "./Messaging"
import Settings from "./Settings"
import Pricing from "./Pricing"
const endpoint = "https://localhost:300"
export default function Main(props){
    const [contacts, setContacts] = useState([])
    const [search, setSearch] = useState("")
    const [user, setUser] = useState({
        uuid: null,
        name: null,
        student: null,
        uuid: null,
        tokens: null

    })

    const callSearch = () => {
        return new Promise (async(resolve) => {
            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: search
                })
            }

            const response = await fetch(endpoint + "/search", headers)
            resolve(response.json())
        })
    }


    const processSearch = () => {
        
        callSearch().then((res) => {
            if (res.code === "err") {
                window.location.replace("/login")
            } else if (res.code === "ok") {
                setSearchResults(res.message)
            } else {
                window.location.replace("/login")
            }
        })
    }

    useEffect(() => {
        processSearch()

    }, [search])



    const [searchResults, setSearchResults] = useState([])




    const [currentMenu, setCurrentMenu] = useState("Dashboard")
    const [matchSelected, setMatchSelected] = useState(false)
    const [schoolOpen, setSchoolOpen] = useState(null)






    useEffect(() => {
        setStudentList([])
    }, [schoolOpen])


    const [loading, setLoading] = useState(false)


    const [topSchool, setTopSchool] = useState([
        {
            name: "Harvard",
            // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "Stanford",
            // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "MIT",
            // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "UMD",
            // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
        {
            name: "HBA",
            // img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"
        },
    ])

   

    const [studentList, setStudentList] = useState([
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Engineering",
            college: "Harvard",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Biomedical",
            college: "Harvard",
            match: false
        },
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Mechanical Engineering",
            college: "Princeton",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Environmental Science",
            college: "Princeton",
            match: false
        },
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Raptor Biology",
            college: "Stanford",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Business",
            college: "Stanford",
            match: false
        },
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Finance",
            college: "UMich",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Chemical Engineering",
            college: "UMich",
            match: false
        },
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Business Administration",
            college: "UPenn",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Computer Science",
            college: "UPenn",
            match: false
        },
        {
            name: "John Doe",
            bio: "Ipsum",
            major: "Biotechnology",
            college: "Columbia",
            match: false
        },
        {
            name: "Jane Doe",
            bio: "Ipsum",
            major: "Music",
            college: "Columbia",
            match: false
        }
    ]);



    const callMatch = (uuid) => {
        return new Promise(async(resolve) => {
            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    receiver: uuid
                })
            }
            const response = await fetch(endpoint+'/match', headers)
            resolve(response.json())
        })
    }

    const processMatch = (uuid) => {


        setLoading(true)

        callMatch(uuid).then((res) => {
            if (res.code === "err") {
                window.location.replace("/login")
            } else if (res.code === "ok") {
                setLoading(false)
                // Heres the thing right.
            } else {
                window.location.replace("/login")
            }
        })
    }


    const callStudent = (i, search) => {
        return new Promise(async(resolve) => {
            let school;
            if (search === false) {
                school = topSchool[i].name
            } else {
                school = i
               
            }
            


            const headers = {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    school: school.toLowerCase()
                })
              }


            const response = await fetch(endpoint + "/getstudents", headers)
            resolve(response.json())
        })
    }
    const processStudents = async (i, search) => {
        setLoading(true)
        callStudent(i, search).then((res) => {
            console.log(res)
            if (res.code === "err") {
                window.location.replace("/login")
            } else if (res.code === "ok") {
                let newStudents =[ ]
                
                res.message.map((person) => {
                    let college
                    if (search === false) {
                       
                        college = topSchool[i].name
                       
                        
                    } else {
                        college = i
                       
                    }
                    
                    
                    let studentAdded = {
                        name: person.name,
                        bio: person.bio,
                        major: person.major,
                        img: person.img,
                        college: college.toLowerCase(),
                        match: false,
                        uuid: person.uuid
                    }
                    console.log("new student", studentAdded)
                    newStudents.push(studentAdded)
                    console.log(newStudents)
                    return newStudents

                })
                setStudentList(newStudents)
                setLoading(false)
                
               
             

                // all went well
            } else {
                window.location.replace("/login")
            }
        })
    }

    

    const callGetUser = () => {
        return new Promise(async(resolve) => {
            const headers = {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json"
                }
              }
            
            const response = await fetch(endpoint+"/getuser", headers)
            resolve(response.json())

        })
    }
    

   
    useEffect(() => {
        async function doEverything() {
            
            setLoading(true)
            await callGetUser().then((res) => {
            if (res.code === "err") {
                window.location.replace("/login")
            } else if (res.code === "ok") {
                setUser(res.message)
                setContacts(res.message["contacts"])
                setLoading(false)

            } else {
                window.location.replace("/login")
            }

        })


        
        }
        doEverything()
        
        



    },[])


    return (

        <>
        

            <UserContext.Provider value={user}>
            <MenuContext.Provider value={setCurrentMenu}>

            
            
            <div className="flex flex-row" data-theme="light">
                <LogNav />
                {(loading) && (
                    <Loading />
                )}
                {((currentMenu === "Dashboard") && (user.student)) && (
                    <>
                    {(schoolOpen !== null) && (
                        <div className="relative w-full h-full">
                            <div className="p-10 bg-base-200 w-full sticky top-0 left-0 flex flex-row gap-4 items-center justify-items-center">
                                <div className="btn btn-circle btn-primary btn-outline" onClick={() => {
                                    setSchoolOpen(null)

                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
  <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

                                </div>
                                <div>
                                    <p className="font-1 font-semibold text-2xl">{topSchool[schoolOpen].name}</p>
                                </div>
                            </div>
                            <div>

                            <div className="bg-base-300 w-5/6 mx-auto rounded-lg mb-2">
                             <p className="p-4 font-2 text-3xl font-bold">Students:</p>
                            </div>
                            {((studentList !== undefined) && (studentList.length === 0)) && (
                                <div className="text-center p-5 text-3xl w-fit mx-auto rounded-lg mt-24 font-1 font-bold">
                                    <p>No students found</p>
                                </div>
                            )}
                            
                            <div className="grid grid-cols-3 w-full h-full gap-4 p-4 overflow-y-auto max-h-[80vh]">
                            {((studentList !== undefined) && (studentList.length > 0)) && (
                                studentList.map((student, i) => (
                                
                                <div key={i} className="w-full h-full rounded-lg bg-base-300 p-4 select-none">
                                <dialog className="modal" id={"my_modal_"+i}>
                                        <div className="modal-box">
                                            <img src={"https://inceptaimg.s3.us-east-1.amazonaws.com/"+student.img} className="h-40 w-full rounded-lg object-cover" />
                                            <div className="p-2">
                                                <p className="font-1 font-bold text-2xl">{student.name}</p>
                                                
                                                <div className="flex flex-row gap-2">
                                                {student.major.split(",").map((major,i) => (
                                                    <p key={i} className="font-1 px-4 py-2 rounded-full font-bold w-fit bg-base-300">{major}</p>    
                                                ))}
                                                </div>
                                               
                                                
                                            </div>
                                            <hr className="border-2 rounded-full border-black my-1" />
                                            <div className="p-2">
                                                <p className="font-1 font-bold text-lg">Bio:</p>
                                                <p className="p-2 rounded-lg bg-base-300 font-1 font-semibold">{student.bio}</p>


                                            </div>
                                            <div className="grid grid-cols-2 gap-4 w-full">
                                            
                                            {(!student.match) && (
                                                <div className="btn btn-secondary font-2 font-bold text-lg" onClick={() => {
                                                setMatchSelected(true)
                                                setStudentList((prevList) => {
                                                    let newList = prevList
                                            
                                                    newList[i].match = true
                                                    return newList
                                                
                                                })


                                                processMatch(student.uuid)

                                            }}>
                                            
                                                <p>Match</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
</svg>



                                            </div>
                                            )}
                                            
                                            {(student.match) && (
                                                <div className="btn btn-secondary btn-disabled font-2 font-bold text-lg" onClick={() => {
                                                setMatchSelected(true)
                                                setStudentList((prevList) => {
                                                    let newList = prevList
                                            
                                                    newList[i].match = true
                                                    return newList
                                                
                                                })


                                                processMatch(student.uuid)

                                            }}>
                                            
                                                <p>Request sent</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
</svg>



                                            </div>
                                            )}

                                            
                                            <div className="btn btn-primary font-2 font-bold text-lg btn-outline" onClick={() => {
                                                document.getElementById("closeModal"+i).click()
                                            }}>
                                                    <p>Go back</p>
                                                </div>
                                            

                                            </div>

                                            <form method="dialog" className="hidden">
                                                <button id={"closeModal"+i} onClick={() => {
                                                    setMatchSelected(false)
                                                }}> 
                                                    x
                                                </button>
                                            </form>
                                            

                                        </div>



                                    </dialog>
                                    <img src={"https://inceptaimg.s3.us-east-1.amazonaws.com/"+student.img} className="h-40 mx-auto w-full object-cover rounded-lg" />
                                    <div className=" py-2 flex flex-col relative">
                                    <div className="flex flex-row items-center justify-between mb-2">
                                    <p className="font-1 font-bold text-2xl">{student.name.split(" ")[0] +" " + student.name.split(" ")[1].substring(0,1) + "."}</p>
                                    <div className="w-fit top-2 right-2 px-2 py-1 rounded-full  border-2 border-accent font-1 font-bold text-lg">
                                        <p>85 tokens</p>
                                    </div>
                                    </div>
                                    

                                    <div className="flex flex-row gap-3">
                                    {student.major.split(",").map((major,i) => (
                                        <p key={i} className="font-1 px-4 py-2 rounded-full font-bold w-fit bg-base-200">{major}</p>
                                    ))}
                                    </div>
                                    
                                        
                       
                                    
                                    <div className="btn btn-primary btn-outline mt-2 justify-right" onClick={() => {
                                        document.getElementById('my_modal_'+i).showModal()
                                    }}>
                                        <p className="font-1 text-lg">Learn more</p>
                                    </div>

                                    




                                    </div>
                                    
                                </div>
                               
))                            )}
                            
                            
                            </div>
                            </div>
                            
                            
                            
                            


</div>
                    )}
                    {(schoolOpen === null) && (
                        <div className="p-10 bg-base-200 w-full">

                    <p className="font-2 text-4xl font-bold mb-2">Dashboard:</p>
                    <div className="p-5 w-fit mx-auto mb-10 ">
                    <div className="w-fit mx-auto relative">
                        <div className="join">
                            <input value={search} onChange={(e) => setSearch(e.target.value)} className="input w-96 input-primary font-1 join-item" placeholder="Search for College..." />
                            <div className="join-item btn btn-primary font-1 btn-outline">
                                Search
                            </div>

                        </div>
                        {(searchResults.length > 0) && (
                            <div className="absolute p-2 bg-base-300 w-full mt-1 rounded-lg flex flex-col gap-2">
                            {searchResults.map((result,i) => (
                                <div onClick={() => {
                                    setSchoolOpen(i)
                                    processStudents(result.school, true)
                                }} key={i} className="flex relative flex-row select-none cursor-pointer group hover:bg-primary transition-all gap-4 items-center justify-items-center bg-base-100 rounded-lg p-2">
                                  
                                    <p className="font-1 font-semibold text-lg group-hover:text-white">{result.school}</p>
                                    <div className="absolute right-2 top-[50%] translate-y-[-50%] w-10 bg-base-300 text-center rounded-lg font-1 font-semibold">
                                        {result.mentors}+
                                    </div>
                                </div>
                    ))}
                            
                        </div>
                        )}
                        
                        
                    </div>
                    

                    </div>
                    <div className="grid grid-cols-3 items-center justify-items-center gap-4">

                        {topSchool.map((school,i) => (
                            <div key={i} className="bg-base-300 w-full h-full p-8 rounded-lg btn btn-base-200 flex flex-col" onClick={() => {


                                
                                setSchoolOpen(i)
                                processStudents(i, false)
                            }}>
                                {/* <img alt="schoolimage" src={school.img} className="p-2 bg-base-100 rounded-lg" /> */}
                                <p className="font-1 text-4xl text-center font-bold">{school.name}</p>
                        
                            </div>

                        ))}
                        
                        
                    </div>
                    

                </div>
                    )}
                    </>
                  
                    

                )}
                {((currentMenu === "Dashboard") && (!user.student)) && (
                    <Dashboard />
                )}
                {(currentMenu === "Messaging") && (
                    <Messaging contacts={contacts} />
                )}

                {(currentMenu === "Settings") && (
                    <Settings />
                )}
                {(currentMenu === "Pricing") && (
                    <div className="bg-base-300 w-full h-full p-10" data-theme="forest">
                    <Pricing />
                    </div>
                    
                )}
                

            </div>
            </MenuContext.Provider>
            </UserContext.Provider>



        </>
    )
}