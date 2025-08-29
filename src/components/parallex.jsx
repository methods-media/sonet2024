import VRShowroom from '@src/modules/VRShowroom';
import React, { useEffect, useState, useRef } from 'react';
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { SwiperSection } from './SwiperSection';
import { useTranslation } from 'react-i18next';

const ParallaxSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const {i18n}=useTranslation('common')
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
        <ParallaxProvider key={'px11'}>
            <style>
                {`
              .parallax-container {
  position: relative;
  height: 200vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

.parallax-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  transition: z-index 0.3s ease;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content2 {
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

.content3 {
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

            <div className="parallax-container" ref={sectionRef} id='performance'>
                <div className={`parallax-video ${isInView ? '' : 'opacity-0'}`}>
                    <video autoPlay muted loop className="video-element">
                        <source
                            src="/assets/videos/ktk-performance.webm"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="content2" ref={textRef}>
                    {/* <motion.span
                        className='text-[56px] font-[InterBold] font-extrabold  uppercase'
                        style={{
                            x: xTransform
                        }}
                    >
                        {`It's for those who aren't`}<br />{`afraid to get`}
                        <span className='ms-3'>
                            {['B', 'U', 'M', 'P', 'Y']?.map((item, index) => (
                                <motion.span
                                    key={index}
                                    className='text-[56px] font-[InterBold] font-extrabold uppercase inline-block'
                                    animate={{
                                        y: [0, -20, 0],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </span>

                    </motion.span> */}
                    <span
                        className={` ${i18n?.language == 'ar' ? 'font-[GSSMedium] text-[100px]' :'font-[InterBold] text-[40px]'} font-extrabold  uppercase`}
                        
                    >
                        {i18n?.language == 'ar' ? `للذين لا يخشون ` : `It's for those who aren't afraid to get`}
                        <br/>
                        {i18n?.language == 'ar' ?`الطرق الوعرة`:''}
                        <br/>
                        <span className={`ms-3 ${i18n?.language=='ar'?'hidden':''}`}>
                            {['B', 'U', 'M', 'P', 'Y']?.map((item, index) => (
                                <span
                                    key={index}
                                    className={`text-[120px] ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} font-extrabold uppercase inline-block`}
                                    // animate={{
                                    //     y: [0, -20, 0],
                                    // }}
                                    // transition={{
                                    //     duration: 1.5,
                                    //     repeat: Infinity,
                                    //     delay: index * 0.2,
                                    //     ease: "easeInOut"
                                    // }}
                                >
                                    {item}
                                </span>
                            ))}
                        </span>

                    </span>
                </div>
                <div className="content3 bg- bg-[linear-gradient(180deg,_#06141F00_0%,_#06141F00_20%,_#06141F_80%)]  ">
                    <SwiperSection id={2} noBg={true} />
                </div>
            </div>
        </ParallaxProvider>
    );
};

export default ParallaxSection;
