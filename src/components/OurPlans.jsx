import React from 'react';
import './OurPlans.css'; // Optional: If you separate styles into a CSS file

const OurPlans =()=>{
    return(
        <div className='Our-Plans-area' id='Our-Plans-area'>
            <br />
            <br />
            <br />
            <br />
            <div className='Our-Plans-title' id='Our-Plans-title'> 
            OUR EDITING PLANS
            </div>
            <div className='Our-Plans'>
                <div className="plans">
                    <h2>🎬 REEL EDITs</h2>
                    <div className="plan-item">
                        <span className="label">Pricing:</span>
                        <span className="value">Starts from  <strong>₹549</strong></span><br />
                        < br /><span>For 30 second reel ₹549</span>
                        < br /><span>For 60 second reel ₹799</span>
                    </div>
                    <div className="plan-item">
                        <span className="label">Number of Changes:</span>
                        <span className="value">Up to 3 revisions included</span>
                    </div>
                    <div className="plan-item">
                        <span className="label">Features:</span>
                        <ul className="features">
                        <li>High-Quality 1080p/4K Output</li>
                        <li>Color Grading</li>
                        <li>Transitions & Effects</li>
                        <li>Background Music & Sync</li>
                        </ul>
                </div>
                </div>
                <div className="plans">
                    <h2>🎬 REEL/SHORT SHOOT+EDITs</h2>
                    <div className="plan-item">
                        <span className="label">Pricing:</span>
                        <span className="value">Starts from ₹1699</span>
                    </div>
                    <div className="plan-item">
                        <span className="label">Number of Changes:</span>
                        <span className="value">Up to 3 revisions included</span>
                    </div>
                    <div className="plan-item">
                        <span className="label">Features:</span>
                        <ul className="features">
                        <li>High-Quality 1080p/4K Output</li>
                        <li>Color Grading</li>
                        <li>Transitions & Effects</li>
                        <li>Background Music & Sync</li>
                        </ul>
                </div>
                </div>
                <div className="plans">
                    <h2>🎬 LONG CONTENT EDITs</h2>
                    <div className="plan-item">
                        <span className="label">Pricing:</span>
                        <span className="value">Starts from ₹2999</span>< br/>
                    </div>
                    <div className="plan-item">
                        <span className="label">Number of Changes:</span>
                        <span className="value">Up to 2 revisions included</span>
                    </div>
                    <div className="plan-item">
                        <span className="label">Features:</span>
                        <ul className="features">
                        <strong><li>MAX VIDEO LENGTH - 15 MINUTES</li></strong>
                        <li>High-Quality 1080p/4K Output</li>
                        <li>Color Grading</li>
                        <li>Transitions & Effects</li>
                        <li>Background Music & Sync</li>

                        </ul>
                </div>
                </div>
                

                
            </div>
        </div>
    );
};

export default OurPlans;
