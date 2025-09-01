import { useEffect, useState, useRef, useCallback } from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import PanoramaViewer from '@src/components/ImageViewer360';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ParallaxFourSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isInView, setIsInView] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const textRef = useRef(null);
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation('common')
    const { locale } = useRouter()
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to scale and position values
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [2, 1, 0.2]);


    const handleScroll = useCallback(() => {
        const currentScroll = window.scrollY;
        const scrollDirection = currentScroll > prevScrollY ? 'down' : 'up';
        setScrollPosition(currentScroll);
        setPrevScrollY(currentScroll);

        // Check if this section is in view
        if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Section is in view when it's visible and not completely scrolled past
            // Use a threshold to ensure the parallax background is removed when section ends
            const threshold = 100; // pixels from the bottom
            const isVisible = rect.top < window.innerHeight && rect.bottom > threshold;

            // If scrolling down and section is completely out of view, ensure parallax is removed
            if (scrollDirection === 'down' && rect.bottom < 0) {
                setIsInView(false);
            } else if (rect.bottom < -50) {
                // Additional check: if section is completely scrolled past, remove parallax
                setIsInView(false);
            } else if (rect.top > window.innerHeight) {
                // If section is completely above the viewport, remove parallax
                setIsInView(false);
            } else if (rect.bottom < window.innerHeight * 0.1) {
                // If section is almost completely scrolled past (90% of viewport height), remove parallax
                setIsInView(false);
            } else {
                // Use a small delay to ensure smooth transitions
                if (!isVisible && isInView) {
                    // If section is going out of view, remove parallax immediately
                    setIsInView(false);
                } else {
                    setIsInView(isVisible);
                }
            }


        }
    }, [prevScrollY]);

    useEffect(() => {
        // Initial check
        handleScroll();

        let ticking = false;
        const optimizedScrollHandler = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScrollHandler);
        return () => {
            window.removeEventListener('scroll', optimizedScrollHandler);
            // Cleanup: ensure parallax is removed when component unmounts
            setIsInView(false);
        };
    }, [handleScroll]);

    return (
        <ParallaxProvider key={'px12'}>
            <style>
                {`
              .parallax-container3 {
  position: relative;
  height: 290vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

.parallax-video3 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  opacity: ${isInView ? '1' : '0'};
  transition: opacity 0.3s ease, z-index 0.3s ease;
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


            <div className="parallax-container3" ref={sectionRef}  >
                <div className={`parallax-video3 ${isInView ? '' : 'opacity-0'}`}>
                    <img src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/7f1345b3-1619-4d97-e64a-352b6db82000/semi" className="image-element" alt="Parallax background" />

                </div>


                {/* Safety Features Swiper Section */}
                <div className='w-screen p-10 h-[90vh] bg-[#05141f]'>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={false}
                        
                        loop={false}
                        className="h-full w-full"
                    >
                        {/* Slide 1 - Forward Collision Warning */}
                        <SwiperSlide className="flex w-full h-full">
                            <div className='flex items-start gap-4 w-full h-full'>
                                <div className="w-1/2 !h-full relative">
                                    <img
                                        src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/7f1345b3-1619-4d97-e64a-352b6db82000/semi"
                                        alt="Forward Collision Warning"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-1/2 h-full flex flex-col justify-start px-16 ">
                                    <h2 className={`text-5xl  font-bold text-white mb-6 ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                                        Forward Collision Warning
                                    </h2>
                                    <p className={`text-xl text-white/90 leading-relaxed max-w-lg ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterRegular]"}`}>
                                        Advanced sensors detect potential collisions ahead and provide early warnings to help prevent accidents. The system continuously monitors the road ahead, alerting you to potential hazards with visual and audio cues.
                                    </p>
                                </div>
                          </div>
                          
                        </SwiperSlide>

                        {/* Slide 2 - Lane Keeping Assist */}
                        <SwiperSlide className="flex w-full h-full">
                            <div className="w-1/2 h-full relative">
                                <img
                                    src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ca2d0f46-e8e9-4b5b-7573-2d5a0e2c3300/semi"
                                    alt="Lane Keeping Assist"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/80 to-black">
                                <h2 className={`text-5xl font-bold text-white mb-6 ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                                    Lane Keeping Assist
                                </h2>
                                <p className={`text-xl text-white/90 leading-relaxed max-w-lg ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterRegular]"}`}>
                                    Stay safely in your lane with intelligent assistance that gently guides your vehicle back to center when it detects unintended lane departure. Perfect for long highway drives and enhanced safety.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 3 - Blind Spot Detection */}
                        <SwiperSlide className="flex w-full h-full">
                            <div className="w-1/2 h-full relative">
                                <img
                                    src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/7f1345b3-1619-4d97-e64a-352b6db82000/semi"
                                    alt="Blind Spot Detection"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/80 to-black">
                                <h2 className={`text-5xl font-bold text-white mb-6 ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                                    Blind Spot Detection
                                </h2>
                                <p className={`text-xl text-white/90 leading-relaxed max-w-lg ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterRegular]"}`}>
                                    Advanced radar sensors monitor your blind spots and alert you to vehicles that may not be visible in your mirrors. Change lanes with confidence knowing you have complete awareness of your surroundings.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* Slide 4 - Adaptive Cruise Control */}
                        <SwiperSlide className="flex w-full h-full">
                            <div className="w-1/2 h-full relative">
                                <img
                                    src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ca2d0f46-e8e9-4b5b-7573-2d5a0e2c3300/semi"
                                    alt="Adaptive Cruise Control"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-1/2 h-full flex flex-col justify-center px-16 bg-gradient-to-r from-black/80 to-black">
                                <h2 className={`text-5xl font-bold text-white mb-6 ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                                    Adaptive Cruise Control
                                </h2>
                                <p className={`text-xl text-white/90 leading-relaxed max-w-lg ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterRegular]"}`}>
                                    Maintain a safe distance from the vehicle ahead while automatically adjusting your speed. Enjoy a more relaxed driving experience with intelligent cruise control that adapts to traffic conditions.
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <button className="absolute top-1/2 right-0 z-[1000] text-white bg-green w-10 h-10 left-4">
                        {' >'}
                    </button>
                    <button className="absolute z-[1000] right-4">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    
                </div>



                <div className='bg-black/50 w-screen h-screen flex flex-col justify-center gap-[200px] items-center'>
                    <motion.p
                        className={`text-3xl md:text-[100px] text-white text-center ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"} text-white uppercase font-[900]`}
                        style={{ scale }}
                    >
                        {t('performance')}
                    </motion.p>
                    <button className={`text-[20px] w-[190px] h-[67px] bg-white hover:bg-[#05141f] text-[#05141f] hover:text-white ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                        {t('explore')}
                    </button>
                </div>

                <div className='relative w-screen h-screen bg-[url(https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ca2d0f46-e8e9-4b5b-7573-2d5a0e2c3300/semi)] bg-cover bg-no-repeat'>
                    <div className='w-screen flex flex-col gap-6 items-center absolute left-0 bottom-[8%] '>
                        <p className={`z-[100] text-white w-full text-center text-[24px]  ${i18n?.language == 'en' ? 'font-[InterBold]' : 'font-[GSSMedium]'}`}>{t('driveMood')}</p>
                        <p className={`z-[100] text-white w-full text-center text-lg max-w-[70%]  ${i18n?.language == 'en' ? 'font-[InterRegular]' : 'font-[GSSMedium]'}`}>{t('driveMood1')}</p>

                    </div>


                </div>



            </div>

        </ParallaxProvider>
    );
};

export default ParallaxFourSection;


