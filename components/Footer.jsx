import React from 'react'

export const Footer = () => {
    return (
        <>
        <div>
            <footer className='footer'>
                <div className='footer-left'>
                    <h2>
                        <b>Contact Us</b><br /><br />
                    </h2>
                    <p>
                        <b>Prakash & Rajaguru</b><br />
                        185/7, 2nd Floor, Chandra Plaza<br />
                        8th F Main Road, 26th Cross<br />
                        Chandra Plaza, Jayanagar 3rd Block<br />
                        Bangalore – 560011, Karnataka, India<br />
                        Phone: 91-80-26538257<br />
                        Email: start@pandr.in<br />
                    </p>
                </div>
          
                <ul className='footer-right'>
                    <li>
                       <h2>
                        <b>Home</b></h2>

                        <ul className='footer-box'>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Work With Us</li>
                        </ul>
                    </li>

                    <li >
                        <h2>
                            <b>Services</b>
                            
                            
                            </h2>

                        <ul className='footer-box '>
                            <li>Consulting</li>
                            <li>Accounting</li>
                            <li>Assurance</li>
                            <li>Tax</li>
                        </ul>
                    </li>

                    <li>
                        <h2>
                            <b>Others</b>
                            
                            </h2>

                        <ul className='footer-box'>
                            <li>Disclaimer</li>
                            <li>Privacy Policy</li>
                           
                        </ul>
                    </li>
                </ul>
            
                </footer>
                <div className='footer-bottom'>
                   <p>Copyright (c) 2023 Prakash and Rajaguru, Bangalore, India. All Rights Reserved.</p>
                </div>
            
            </div>
            
        </>
    )
}
