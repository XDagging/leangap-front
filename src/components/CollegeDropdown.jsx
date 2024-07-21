import {useState} from "react";
import NavbarLoggedIn from "./NavbarLoggedIn";
import Footer from "./Footer";

export default function CollegeDropdown(props) {
    const [colleges, setColleges] = useState(["Harvard", "Princeton", "Stanford", "UMich", "Columbia", "UPenn"]);
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
    const [collegeSelected, setCollegeSelected] = useState(false);
    const [matchRequestPlaced, setMatchRequestPlaced] = useState(false);
    const [currentCollege, setCurrentCollege] = useState("");

    function handleCollegeSelection(college) {
        setCollegeSelected(!collegeSelected);
        setCurrentCollege(college);
    }

    function handleMatchRequest(student) {
        setMatchRequestPlaced(true);
    }

    function handleModalExit() {
        setMatchRequestPlaced(false);
    }

    return (
        <>
            <NavbarLoggedIn />

            {/* Body of Webpage */}
            <div> 
                <div className="w-full min-h-[60vh] bg-base-200">
                    {!collegeSelected ? <p className="font-1 text-3xl font-bold py-2 text-center bg-base-300 rounded-lg">Top Schools</p> : <p className="font-1 text-3xl font-bold py-3 text-center bg-base-300 rounded-lg">{currentCollege} students</p>}
                    <div className="w-5/6 mx-auto mt-2">
                        {(collegeSelected) ? (/* College Student List */
                            <> 
                                <div className="grid grid-cols-3 items-center justify-items-center gap-5 " id={currentCollege}>
                                    {
                                        studentList.map((student, i) => (
                                            (student.college == currentCollege) && ( /* Student Info Card*/
                                                <div key={i} className="card bg-base-100 flex p-5 flex-col w-full">
                                                    <figure>
                                                        <img src="data:image/png;base64,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" />
                                                    </figure>
                                                    <div className="card-body">
                                                        <h2 className="card-title font-1 text-2xl">{student.name}</h2>
                                                        <p className="font-2"><span className="underline">{student.major}</span></p>
                                                        <div className="card-actions">
                                                            <button className="btn btn-primary font-2" onClick={() => document.getElementById('my_modal_1').showModal()}>Learn More</button>
                                                            <dialog id="my_modal_1" className="modal">
                                                                <div className="modal-box flex flex-col space-x-10 l-1/2">
                                                                    <div className="flex flex-row gap-3">
                                                                        <div id="basicInformation">
                                                                            <h3 className="font-2 text-5xl">{student.name}</h3>
                                                                            <p className="font-2 text-xl">{student.major}</p>
                                                                        </div>
                                                                        <div id="bioInformation">
                                                                            <p>{student.bio}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="modal-action">
                                                                        {(!matchRequestPlaced || student.match !== false) ? <button className="btn btn-accent font-2 font-bold" onClick={() => handleMatchRequest(student)}>Match</button> : <button className="btn btn-secondary btn-disabled font-2 font-bold">Match Requested</button>}
                                                                        <form method="dialog">
                                                                            <button className="btn" onClick={() => handleModalExit()}>Return</button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </dialog>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ))   
                                    }
                                </div>
                            </> 
                        ) : ( /* College List */
                            <div className="grid grid-cols-3 gap-5">
                                {colleges.map((college, i) => (
                                <div key={i}>
                                    {/* College Icon */}
                                    <>
                                        <button className="btn btn-lg btn-accent btn-outline bg-base-100 flex p-5 flex-col w-full h-full" onClick={() => handleCollegeSelection(college)}>
                                            <h1 className="text-xl">{college}</h1>
                                        </button>
                                    </>  
                                </div>                                                
                            ))}  
                            </div>
                             
                        )}      
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    )
}

