import React, {useState, useEffect} from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

let carouselElement

let interval;
let currentScroll = 0;

export default function Index(props) {
    
    



    const [elements, setElements] = useState([
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png",
        "https://www.logo.wine/a/logo/University_of_California%2C_Berkeley/University_of_California%2C_Berkeley-Logo.wine.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e08531feacf20031197_mit.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e09a5b30c5830a69924_georgia.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e095101bd1692a70bcd_yale.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e095b19974829e972fe_cmu.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e0910343e6436e8cb50_cornell.svg",
        "https://cdn.prod.website-files.com/5e90432bd516144ac7ddcb90/5e997e09a5b30c5830a69924_georgia.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png"])
    const [counter, setCounter] = useState(0);

    

    useEffect(() => {
        const carouselElement = document.getElementById("carousel");
        let carouselWidth = carouselElement.scrollWidth - carouselElement.clientWidth;
        
        const scrollCarousel = () => {
            currentScroll += 10; // Adjust the scroll speed as needed
            console.log("current scroll" , currentScroll)
            console.log("carousel scrollwidth",carouselElement.scrollWidth)
        console.log("carousel client", carouselElement.clientWidth)
            if (currentScroll >= carouselWidth) {
                console.log("current scroll reset!")
                currentScroll = 11; // Reset the scroll position
                carouselElement.scrollTo({ left: 0, behavior: 'auto' });
            } else {
                carouselElement.scrollTo({ left: currentScroll + carouselElement.clientWidth, behavior: 'smooth' });
            }
        };

        interval = setInterval(scrollCarousel, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);
    



    return (


        <>

        <Navbar />

        <div className="hero w-full min-h-[60vh] bg-base-200">

            <div className="hero-content">
                <div className="w-full h-full flex flex-col gap-2 p-2">
                <p className="font-1 font-bold text-6xl">Connect to your <span className="p-4 bg-base-300 rounded-lg">dream college</span></p>
                <p className="text-lg font-2 font-semibold">Over 100+ mentors from top universities</p>
                <div className="btn  btn-outline btn-secondary w-fit">
                <p className="font-2 font-bold text-2xl">Sign up</p>
                

                </div>
                
                </div>
                
            </div>

        </div>
        <div className="relative">
        <div class="custom-shape-divider-top-1721341747">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

        </div>
        <div className="mb-48 mt-40">
            <p className="font-2 font-bold text-4xl text-center my-10">Why Choose Incepta?</p>
        
        
            <div className="w-4/6 text-center mx-auto p-4 rounded-lg bg-base-200 my-10">
            


            <div className="grid grid-cols-2 items-center justify-items-center p-4 rounded-lg w-full">
           
                <div className="flex flex-col gap-4 w-5/6">
                    <div>
                    <p className="font-2 font-bold">1000+ students</p>
                    </div>

                    <div>
                        <p className="font-1 font-bold text-3xl">For Ambitious Highschoolers</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-2 font-semibold">Students are using our platform to secure<br/> seats at top schools.</p>
                    </div>
                    
                    
                    
                   


                       
                </div>
                                     
            
                <div className="flex flex-col gap-4 w-5/6">
                    <div>
                    <p className="font-2 font-bold">300+ college students</p>
                    </div>

                    <div>
                        <p className="font-1 font-bold text-3xl">For college students</p>
                    </div>
                    <div className="mt-8">
                        <p className="font-2 font-semibold">College students earn money per conversation<br/>or engagement</p>
                    </div>
                    
                    
                    
                   


                       
                </div>
            </div>
            
            
        </div>
        </div>

        {/* <div className="relative">

        <div class="custom-shape-divider-bottom-1721342335">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
            
        </div> */}

        <div className="bg-base-100">

        <div className="carousel carousel-end max-h-[10vh] bg-secondary p-5 w-full gap-24" id="carousel">
        {elements.map((element, i) => (
            <div className="carousel-item w-80 " key={i}>
                <img src={element} alt="Drink" />
            </div>

        ))}
 
  
</div>

        </div>
        <Footer />
        

        



        </>
    )
}