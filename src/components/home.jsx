import React from 'react';
import './home.css'; // 
// Optional: If you separate styles into a CSS file\
import EditorImg from '../assets/editorAman.png';
import capcut from '../assets/capcutLogo.png';
import AdobePPLogo from '../assets/Adobe_Premiere_.png';
import DavinciLogo from '../assets/DavinciLogo.png';

const Home = () => {
  return (
    <div className='Home-class' id='Home'>
      <div className='Home-nonText-box'>
        <div className='editor-pic-box'>
          <img src={EditorImg} className="main-editor-img" alt="Editor" />
        </div>

        <div className='Editing-Software-div'>
          <h1>SOFTWARE</h1>
          <div className='software-logo'>
            <button><img src={capcut} alt="CapCut" /></button>
            <button><img src={AdobePPLogo} alt="Adobe Premiere Pro" /></button>
            <button><img src={DavinciLogo} alt="DaVinci Resolve" /></button>
          </div>
        </div>
      </div>

        <div className='editor-info-box' id='AboutUs'>
            <div className='AboutBox'>
                    <h1 className='editor-name'>🧑‍💼 About Me</h1>
        <div className='AboutBox'>
          <strong><strong>Hi, I'm Aman Tekam</strong></strong> <strong>— a creative and detail-driven video editor with a strong passion for storytelling through visuals.
          I blend technical precision with a deep understanding of pacing, rhythm, and emotion to craft engaging, polished videos that resonate with audiences.<br />Every frame I cut is focused on enhancing the story and elevating the final product.

          With </strong><strong><strong>1 year of experience in post-production</strong></strong>, <strong> I specialize in editing content for:<br /><br />

          🎬 <strong>YouTube</strong><br />
          📱 <strong>Social Media</strong><br />
          🏷️ <strong>Branded Campaigns</strong><br />
          🎥 <strong>Short Films</strong><br /><br /></strong>

          
        </div>    
            </div>
            {/* <div className='infoBox'> <nav>
          Proficient in tools like <strong>Adobe Premiere Pro</strong>, 
          <strong> After Effects</strong>, and <strong>DaVinci Resolve</strong>, CapCut as well.  
          I bring ideas to life frame by frame—always focused on enhancing the story and elevating the final product.<br /><br />
          With <strong>1 year of experience in post-production</strong>, 
          I specialize in editing content for <strong>YouTube</strong>, <strong>social media</strong>, 
          <strong>branded campaigns</strong>, <strong>short films</strong>, and more.
        </nav></div> */}
            <div className='skillsBox'><h1 className="editor-skills">🛠️ Skills</h1>
        <div >
          

            <div className="skills-info">
            <div>
                <strong>
                🎞️ <strong></strong><strong>Post-Production:</strong><br /><br />
                    - Cutting and trimming footage with precision<br />
                    - Adding transitions, visual effects, and color correction<br /><br /></strong>
            </div>

            <div>
                <strong>
                🎵 <strong>Sound Design & Syncing:</strong><br /><br />
                    - Matching audio with visuals for a seamless experience<br /><br />
                    </strong>
            </div>
            <div>
                <strong>
                🎯 <strong>Creative Storytelling:</strong><br /><br />
                    - Turning raw footage into emotionally powerful stories<br />
                    - Maintaining a strong sense of visual,flow and narrative pacing<br /></strong>
            </div>
            </div>
        </div>
        </div>
        </div>

      {/* <div className='editor-info-box'>
        <h1 className='editor-name'>🧑‍💼 About Me</h1>
        <div className='AboutBox'>
          Hi, I'm <strong>Aman Tekam</strong> — a creative and detail-driven video editor with a strong passion for storytelling through visuals.<br />
          I blend technical precision with a deep understanding of pacing, rhythm, and emotion to craft engaging, polished videos that resonate with audiences.<br /><br />

          With <strong>1 year of experience in post-production</strong>, I specialize in editing content for:<br /><br />

          🎬 <strong>YouTube</strong><br />
          📱 <strong>Social Media</strong><br />
          🏷️ <strong>Branded Campaigns</strong><br />
          🎥 <strong>Short Films</strong><br /><br />

          Every frame I cut is focused on enhancing the story and elevating the final product.
        </div>

        <nav>
          Proficient in tools like <strong>Adobe Premiere Pro</strong>, 
          <strong> After Effects</strong>, and <strong>DaVinci Resolve</strong>, CapCut as well.  
          I bring ideas to life frame by frame—always focused on enhancing the story and elevating the final product.<br /><br />
          With <strong>1 year of experience in post-production</strong>, 
          I specialize in editing content for <strong>YouTube</strong>, <strong>social media</strong>, 
          <strong>branded campaigns</strong>, <strong>short films</strong>, and more.
        </nav>

        <h1 className="editor-skills">🛠️ Skills</h1>
        <div className="skills-info">
          💻 <strong>Video Editing Software:</strong><br /><br />
          - Adobe Premiere Pro<br />
          - After Effects<br />
          - DaVinci Resolve<br />
          - CapCut<br /><br />

          🎞️ <strong>Post-Production:</strong><br /><br />
          - Cutting and trimming footage with precision<br />
          - Adding transitions, visual effects, and color correction<br /><br />

          🎵 <strong>Sound Design & Syncing:</strong><br /><br />
          - Matching audio with visuals for a seamless experience<br /><br />
          
          🎯 <strong>Creative Storytelling:</strong><br /><br />
          - Turning raw footage into emotionally powerful stories<br />
          - Maintaining a strong sense of visual flow and narrative pacing<br />
          </div>
      </div> */}
      
    </div>
  );
};

export default Home;
