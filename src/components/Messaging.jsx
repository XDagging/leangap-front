import React, {useState, useEffect} from "react"
import LogNav from "./LogNav"




export default function Messaging(props) {
    const [contacts, setContacts] = useState(
        [
            {
                name: "Sam",
                uuid: "1",

            }, 
            {
                name: "John",
                uuid: "2",

            }, 
            {
                name: "Anthony",
                uuid: "3",

            },
            {
                name: "Alexander",
                uuid: "4",

            }]
    )


    const [messageText, setMessageText] = useState("")




    const [messages, setMessages] = useState([
        {
            uuid: "1",
            message: "hello world",
            timestamp: 1000


        },
        {
            uuid: "me",
            message: "hello world",
            timestamp: 1001


        },
        {
            uuid: "1",
            message: "everything u bitch",
            timestamp: 1002


        },
        {
            uuid: "me",
            message: "imagine not working rn wowzers",
            timestamp: 1003


        },
        {
            uuid: "1",
            message: "type shit",
            timestamp: 1004
        },
        {
            uuid: "1",
            message: "hello world",
            timestamp: 1005


        },
    ])


    const sendMessage = () => {

        // send via ws
        
        if ((messageText.length > 0) && (messageText.length < 1000)) {
            setMessages((prevMessages) => {
                let newMessages = prevMessages
                
                    return [{
                        uuid: "me",
                        message: messageText,
                        timestamp: Date.now()
                    },...newMessages]
        
                
                
    
    
                
    
            })
        }
        
        setMessageText("")

    }

    useEffect(() => {
        setMessages((prevMessages) => {
            let newMessages = prevMessages

            newMessages.sort((a, b) => b.timestamp - a.timestamp);
            console.log(newMessages)
            return newMessages

            
        })


    },[messages])


    const [activeContact, setActiveContact] = useState(null)

    return (


        <>
    
            <div className="flex flex-row min-w-screen min-h-screen" data-theme="dark">

                <LogNav />

                <div className="w-full  min-h-screen flex flex-row">
                    <div className="w-2/6 flex-col flex gap-2 bg-base-200 h-full p-4">
                        <p className="font-2 text-2xl font-bold">Contacts</p>
                        {contacts.map((contact,i) => (
                            <div className="p-4 bg-base-300 flex flex-row items-center justify-items-center gap-4 rounded-lg cursor-pointer hover:bg-base-100 select-none" key={i} onClick={(e) => {
                                setActiveContact(i)
                            }}>
                                <div className="avatar placeholder">
                                    <div className="w-12 rounded-full bg-neutral ">
                                    <p className="text-2xl font-2">{contact["name"].substring(0,1)}</p>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-1 text-lg font-semibold ">{contact.name}</p>   
                                    <p className="font-1 font-bold">2+ messaging</p>
                                </div>
                                
                                
                                
                            </div>

                        ))}
                        <div>
                      

                        </div>
                        
                    </div>


                    <div className="relative w-full h-full">
                        {(activeContact === null) && (
                            <div className=" w-4/6 p-5 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-24 mx-auto">
  <path d="m20.798 11.012-3.188 3.416L9.462 6.28l4.24-4.542a.75.75 0 0 1 1.272.71L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262ZM3.202 12.988 6.39 9.572l8.148 8.148-4.24 4.542a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262ZM3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18Z" />
</svg>

                                <p className="font-1 text-2xl font-bold">No Contact Selected</p>


                            </div>
                        )}
                        {(activeContact !== null) && (
                            <div className="">

                            
                            <div className="w-full h-full min-h-screen relative">
                                <div className="p-10 bg-base-300 relative">
                                <p className="font-2 font-bold text-2xl">{contacts[activeContact].name.split(" ")[0]}</p>
                                <div className="absolute top-[50%] translate-y-[-50%] right-4 bg-base-100 btn btn-circle" onClick={() => {
                                    setActiveContact(null)
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>

                                </div>

                                </div>


                                <div className="pb-10 w-full ">
                                   
                                    <div className="w-full flex flex-col gap-4 py-10 px-4 chat max-h-[80vh] overflow-y-auto flex-col-reverse">
                                        {messages.map((message,i) => (
                                            <div key={i} className="w-full">
                                                {(message.uuid !== "me") && (
                                                    <div className="chat chat-start">
                                                    <div className="chat-header">
                                                    <p className="font-1">{new Date(message.timestamp).toLocaleDateString("en-US")}</p>
                                                    </div>
                                                    <div className="chat-bubble chat-bubble-primary">
                                                        <p className="font-2 font-semibold">{message.message}</p>
                                                    </div>
                                                        
                                                    </div>
                                                    
                                        
                                                )}
                                                {(message.uuid === "me") && (
                                                    <div className="chat chat-end">
                                                    <div className="chat-header">
                                                    <p className="font-1">{new Date(message.timestamp).toLocaleDateString("en-US")}</p>
                                                    </div>
                                                        <div className="chat-bubble chat-bubble-base-300">
                                                            <p className="font-2 font-semibold">{message.message}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            
                                                </div>

                                            ))}
                                        
                                    
                                    

                                
                                    
                                </div>
                                
                                
                                
                            </div>

                       
                                

                                <div className="w-full flex flex-row bg-base-300 p-5 gap-4 absolute bottom-0 left-0">
                                    <input type="text" className="input w-full font-2x" placeholder="Type your message here..." value={messageText} onChange={(e) => {setMessageText(e.target.value)}}></input>
                                    <button className="btn font-2 font-bold" onClick={sendMessage}>
                                        <p>Send Message</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
</svg>

                                    </button>

                                </div>
                                


                            
                                



                            </div>
                            
                            
                            
                            
                            
                            
                            
                            </div>
                            
                        )}
                        
                    
                        
                    </div>


                    
                </div>


            </div>


        </>
    )
}