import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const EngineSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const { locale } = useRouter()
    const { t ,i18n} = useTranslation('common');
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to scale and position values
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.6, 1, 0.4]);
    const y = useTransform(scrollYProgress, [0, 0.5], [-300, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Transform scroll progress for "COME TOGETHER" animation
    const comeX = useTransform(scrollYProgress, [0, 0.5], [-500, 10]);
    const togetherX = useTransform(scrollYProgress, [0, 0.5], [500, 10]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    // Transform scroll progress for "A NEW DIMENSION UNFOLDS" animation
    const dimensionY = useTransform(scrollYProgress, [0.2, 0.5], [300, 0]);
    const dimensionScale = useTransform(scrollYProgress, [0.5, 0.8], [1, 1.4]);
    const dimensionBlur = useTransform(scrollYProgress, [0.2, 0.5], [10, 0]);
    const blurFilter = useTransform(dimensionBlur, (value) => `blur(${value}px)`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
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


    return (
        <div ref={sectionRef} className='bg-[#06141F] flex flex-col items-center justify-end pb-[15%] w-full min-h-[100vh] h-[100vh] gap-10 rtl:gap-10 md:h-[100vh]'>
            <motion.p
                className={`text-3xl md:text-[52px] ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"} text-white uppercase font-[900]`}
                style={{ scale, y, opacity }}
            >
                {i18n?.language == 'ar' ? `حينما تلتقي   ` : ` Where your bold spirit and true practicality`}
            </motion.p>
            <div className={`flex gap-2 ${i18n?.language == 'ar' ? '' : 'gap-2'}`}>
                <motion.p 
                    className={`text-4xl md:text-[84px]  ${i18n?.language == 'ar' ? "font-['GSSMedium']" : 'font-[InterBold]'} text-white uppercase font-[900]`}
                    style={{ x: i18n?.language == 'ar' ? togetherX : comeX, opacity: textOpacity }}
                >
                    {i18n?.language == 'ar' ? `  الجرأة` : `COME `}
                </motion.p>
                <motion.p
                    className={`text-4xl md:text-[84px] text-white uppercase font-[900] ps-8 ${i18n?.language == 'ar' ? "font-['GSSMedium']" : 'font-[InterBold]'}`}
                    style={{ x: i18n?.language == 'ar' ? comeX : togetherX, opacity: textOpacity }}
                >
                    {i18n?.language == 'ar' ? `مع العملية` : ` TOGETHER`}
                </motion.p>
            </div>
            <motion.p
                className={`text-3xl md:text-[62px] ${locale == 'ar' ? "font-['GSSMedium']" : "font-[InterBold]"} text-white text-center   uppercase font-[900]`}
                style={{
                    y: dimensionY,
                    scale: dimensionScale,
                    filter: blurFilter
                }}
            >
                {i18n?.language == 'ar' ?` يبدأ بُعدٌ جديد`:`A NEW DIMENSSION UNFOLDS`}
            </motion.p>
        </div>
    )
};


 const SvgDivider = () => (
     <svg xmlns="http://www.w3.org/2000/svg" height={'300px'} className='w-[500px] h-[300px] md:w-full' viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="#05141F" d="M0,6V0h1000v100L0,6z"></path>
    </svg>
);

