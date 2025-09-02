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
import SpecificationsSection from '@src/components/SpecificationsSection';

const ParallaxFiveSection = () => {
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
              .parallax-container4 {
  position: relative;
  height: 300vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

.parallax-video4 {
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


            <div className="parallax-container4" ref={sectionRef}  >
                <div className={`parallax-video4 ${isInView ? '' : 'opacity-0'}`}>
                    <img src="https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/36284883-f348-4fa7-7586-49113ebc0800/semi" className="image-element" alt="Parallax background" />

                </div>
            
                <div className='relative w-screen h-screen bg-[url(https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c4dc0962-e3d1-4c3d-30d7-a7ce96dbe800/semi)] bg-cover bg-no-repeat'>
                    <div className='w-screen flex flex-col gap-6 items-center absolute left-0 bottom-0 bg-gradient-to-b from-transparent  to-black '>
                        <p className={`z-[100] text-white w-full text-center text-[24px]  ${i18n?.language == 'en' ? 'font-[InterBold]' : 'font-[GSSMedium]'} `} style={{
                            textShadow: `2px 2px 5px #000000`

                        }}>{t('powerOfBeast')}</p>
                        <p className={`z-[100] text-white w-full text-center   text-lg max-w-[70%]  ${i18n?.language == 'en' ? 'font-[InterRegular]' : 'font-[GSSMedium]'}`}

                        >{t('powerOfBeast1')}</p>
                        <div className='flex items-start w-full justify-around pb-12 '>
                            <div className='flex flex-col'>
                                <p className='text-base text-[#BDBDBD]'>{t('hp')}</p>
                                <p className='text-xl font-[InterBold] text-white'>{115}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-base text-[#BDBDBD]'>{t('torque')}</p>
                                <p className='text-xl font-[InterBold] text-white'>{14.7}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-base text-[#BDBDBD]'>{t('trans')}</p>
                                <p className='text-xl font-bold text-white'>{t('speed')}</p>
                            </div>
                        </div>
                    </div>


                </div>
                <div></div>
                <SpecificationsSection />


                <div className='w-screen h-screen '>
                    <div className='h-[30vh] p-10 bg-gradient-to-b from-black from-0% to-transparent to-[90%]'>
                        <h2 className={`text-[36px] text-white ${locale == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`} style={{
                            textShadow:'2px 2px 10px #000000',
                        }}>{t('att')}
</h2>
                        <p className={`text-lg text-white max-w-[50%] ${locale == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`} style={{
                            textShadow: '2px 2px 10px #000000',
                        }}>{t('att1')}</p>
                    </div>
                    <div className='px-10'>
                        <button className={`text-[20px] w-[190px] h-[67px] bg-white hover:bg-[#05141f] text-[#05141f] hover:text-white ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                            {t('explore')}
                        </button>
                 </div>
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

export default ParallaxFiveSection;


