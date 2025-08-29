import VRShowroom from '@src/modules/VRShowroom';
import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SwiperSection } from './SwiperSection';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

const ParallaxSectionSecond = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const { i18n } = useTranslation()
    const { locale } = useRouter()      

    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], [-window.innerWidth, window.innerWidth]);

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        setScrollPosition(currentScroll);

        // Check if this section is in view
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            setIsInView(isVisible);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <ParallaxProvider>
            <style>
                {`
              .parallax-container1 {
  position: relative;
  height: 200vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

.parallax-video1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  opacity:${isInView?'1':'0'}
  transition: z-index 0.3s ease;
}

.image-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content22 {
  position: relative;
  height: 100vh;
  z-index: 2;
  color: white;
 
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.content33 {
  position: relative;
  height: 100vh;
  z-index: 2;
  color: white;
  text-align: center;
  padding: 50px;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
                
                `}
            </style>

            <div className="parallax-container1" ref={sectionRef}  >
                <div className={`parallax-video1 ${isInView?'':'opacity-0'}`}>
                    <img src='https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/b90371ae-573e-45e4-ddbd-04f055cbdd00/semi' className="image-element ">

                    </img>
                </div>
                <div class="bg-gradient-to-b from-0% h-screen w-screen from-[#06141F]/50 to-100% to-[#00000000]" id="bg-section">
                    
                   
                  


                </div>
                <div className="content22 "
                    id='safety'
                    ref={textRef}>
                    <video src='/assets/videos/safety.webm' playsInline muted autoPlay loop  className='w-screen h-screen object-cover'/>
                    <div className='absolute w-full bottom-0 start-0 p-10 bg-gradient-to-t h-[50vh] from-white to-transparent flex flex-col justify-end items-center'>
                        <p className={`text-[42px] text-black ${locale == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}  text-center`}> {i18n?.language == 'ar' ?
                            <>
                                {`أنظمة مساعدة السائق `}
                                <span className='font-[InterBold]'>(ADAS)</span>
                                
                            </>
                        
                        : `Advanced Driver Assistance System (ADAS)`} </p>
                    </div>
                    </div>
                   
               
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxSectionSecond;
