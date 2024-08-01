import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"



export default function Privacy(props) {









    return (



        <div data-theme="forest">
            <Navbar />


            <div className="w-full h-full bg-base-100">



                <div className="w-4/6 mx-auto my-10 px-8 py-9 rounded-lg font-2 font-semibold bg-base-300">
                <p className="text-2xl font-bold">Privacy Policy</p>
                <p className="">Last Updated 7/31/24</p>

                <div className="flex flex-col gap-8 mt-8">

                <div className="">
                    <p className="text-lg font-bold">Introduction</p>
                    <p>Welcome to Incepta ("we", "our", "us"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="/" className="underline link">useincepta.com</a> and use our services.

By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this policy, please do not access the website or use our services.</p>
                </div>  
                <div>

                <p className="text-lg font-bold">Information we collect</p>

                <p className="font-bold">We collect the following information from you upon signup:</p>

                <ul className="ml-4 list-disc">
                    <li>Name</li>
                    <li>Email Address</li>
                    <li>Interests/Major</li>
                    <li>Password</li>
                    <li>Grade Level</li>
                    <li>Profile Picture</li>
                </ul>

                </div>


                <div>
                    <p className="text-lg font-bold">How we use your information</p>
                    <p>We use the information we collect in the following ways:</p>


                    <ul className="list-disc ml-4">
                        <li>To create and manage your account</li>
                        <li>To provide and maintain our services</li>
                        <li>To personalize your experience</li>
                        <li>To communicate with you, including sending you updates, promotional materials, and other information</li>
                        <li>To show your data to other users within the Incepta community</li>
                        <li>To improve our services and develop new features</li>
                        <li>For advertising purposes</li>

                    </ul>
                </div>

                <div>
                    <p className="text-lg font-bold">Data Sharing and Closure</p>
                    <p>We do not sell your personal data to third parties. We may share your information with:</p>
                    <ul className="list-disc ml-4">
                        <li>Other users within the Incepta community to enhance social interactions and academic networking</li>
                        <li>Service providers who assist us in operating our website and services, so long as they agree to keep this information confidential</li>

                    </ul>
                </div>

                <div>
                    <p className="text-lg font-bold">Data Security</p>
                    <p>We prioritize your data security. All personal information is encrypted and securely stored. We implement various security measures to ensure the protection of your information against unauthorized access, alteration, disclosure, or destruction.</p>
                </div>

                <div>
                    <p className="text-lg font-bold">Your Rights</p>
                    <p>You have the right to:</p>
                    <ul className="ml-4 list-disc">
                        <li>Access the personal information we hold about you</li>
                        <li>Request correction of any incorrect or incomplete information</li>
                        <li>Request deletion of your personal information</li>
                        <li>Object to the processing of your personal information</li>
                        <li>Request restriction of processing of your personal information</li>
                        <li>Withdraw your consent at any time</li>
                    </ul>
                    <p className="mt-2">To exercise these rights, please contact us at aaritpaliwal@useincepta.com</p>
                </div>




                </div>
                              

                </div>



            </div>

            <Footer />
        




        </div>
    )
}