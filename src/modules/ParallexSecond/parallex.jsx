import { useEffect, useState, useRef, useCallback } from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import ThreeSixty from '../ThreeSixty';
import { SwiperSection } from '../SwiperSection';

const ParallaxSecondSection = () => {
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
             
              .parallax-container1 {
  position: relative;
  height: 283vh; /* Make the container tall enough to allow scrolling */
  overflow: hidden;
}

@media (max-width: 768px) {
  .parallax-container1 {
    height: 183vh !important;
  }
}

.parallax-video1 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: ${isInView ? '-1' : '-10'};
  transition: z-index 0.3s ease;
 
}

.video-element1 {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


             `}
            </style>


            <div className="parallax-container1" ref={sectionRef}  >
                <div className={`parallax-video1 ${isInView ? '' : 'opacity-0'}`}>
                    <img src='https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/e83bb693-560b-4ea6-6fec-3bae2eac2400/semi' className="video-element1" alt="Parallax background" />

                </div>



                <ThreeSixty />

                <div className='bg-black/50 w-screen h-[50vh] md:h-screen flex flex-col justify-center gap-[70px] md:gap-[200px] items-center'>
                    <motion.p
                        className={`text-3xl md:text-[100px] text-white text-center ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"} text-white uppercase font-[900]`}
                        style={{ scale }}
                    >
                        {t('interior')}
                    </motion.p>
                    <a href='https://www.kia-uae.com/promotion/' target='_blank' className={"cursor-pointer"}>
                        <button className={`text-base md:text-[20px] w-[165px] cursor-pointer  md:w-[190px] h-[50px] md:h-[67px] bg-white hover:bg-[#05141f] text-[#05141f] hover:text-white ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"}`}>
                        {t('explore')}
                    </button>
                    </a>
                </div>

                <SwiperSection  id={1} />


            </div>

        </ParallaxProvider>
    );
};

export default ParallaxSecondSection;


