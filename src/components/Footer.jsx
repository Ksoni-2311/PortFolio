import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h3>Let’s Create Something Amazing</h3>
                <p>Available for freelance projects, collaborations, and editing gigs.</p>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/_aman_edits_05?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="mailto:amantekam53@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                    <a href="https://wa.me/918821811285 ?text=Hello%20there!
" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                </div>
                <br />

                    {/* for copyrightsign and current year 
                    &copy; {new Date().getFullYear()}  */}
                <p className="footer-copy"><strong>DEVELOPED AND MANAGED BY KESHAV </strong></p>
            </div>
        </footer>
    );
};

export default Footer;
