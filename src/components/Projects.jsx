import React, { useEffect, useRef, useState } from 'react';
import './Projects.css';

import P1 from './../assets/Projects/P1.mp4';
import P2 from './../assets/Projects/P2.mp4';
import P3 from './../assets/Projects/P3.mp4';
import P4 from './../assets/Projects/P4.mp4';
import P5 from './../assets/Projects/P5.mp4';
import P6 from './../assets/Projects/P6.mp4';

const videos = [P2, P3, P5, P1, P4, P6];

const Project = () => {
    const videoRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Track played videos to ensure each plays only once
    const playedVideos = useRef(new Set());

    // Detect if the Project section is in view
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (!video) return;
            if (index === currentIndex && inView) {
                if (!playedVideos.current.has(index)) {
                    video.play();
                    playedVideos.current.add(index);
                }
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, [currentIndex, inView]);

    const handleArrowClick = (direction) => {
        let newIndex = currentIndex;
        if (direction === 'left' && currentIndex > 0) {
            newIndex--;
        } else if (direction === 'right' && currentIndex < videos.length - 1) {
            newIndex++;
        }
        setCurrentIndex(newIndex);
    };

    return (
        <div className="Project-area" id="Project-area" ref={sectionRef}>
            <div className="Project-title">OUR PROJECTS</div>

            <div className="carousel-container">
                <button className="arrow left" onClick={() => handleArrowClick('left')}>
                    &#8249;
                </button>

                <div className="carousel-track">
                    <div
                        className="carousel-inner"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {videos.map((videoSrc, index) => (
                            <div className="carousel-card" key={index}>
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    src={videoSrc}
                                    className="carousel-video"
                                    controls
                                    playsInline
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button className="arrow right" onClick={() => handleArrowClick('right')}>
                    &#8250;
                </button>
            </div>

            <div className="instagram-link">
                For more do visit our{' '}
                <a
                    href="https://www.instagram.com/_aman_edits_05"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>{' '}page
            </div>
        </div>
    );
};

export default Project;