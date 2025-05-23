import React from 'react';
import './Contactus.css'; // Optional: If you separate styles into a CSS file
import instaQR from './../assets/instaqr.png'
import whatsappQR from './../assets/whatsappqr.png'
const Contactus =()=>{
    return(
        
        <div className='Contactus-class' id='contactus'>
            <br />
            <span className='contact-us-top'>CONTACT US</span>
            <h2 >EMAIL-amantekam53@gmail.com</h2>
            <div className='social-handles-box'>
                <div className='Editor-insta-details'>
                <h1>INSTAGRAM HANDLES</h1>
                <img src={instaQR} alt="" />
            </div>
            <div className='Editor-whatsapp-details'>
                <h1>WHATSAPP HANDLES</h1>
                <img src={whatsappQR} alt="" />
            </div>
            </div>
            <br></br>
        </div>
    );
};

export default Contactus;
