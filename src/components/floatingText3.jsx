import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const FloatingTextThree = () => {
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation('common');

    const isArabic = i18n?.language == 'ar'; // Replace with your actual language detection logic

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    // Text starts from above viewport (300) and moves down to below viewport (-300)
    // Animation starts immediately when section comes into view and completes smoothly
    const y = useTransform(scrollYProgress, [0, 0.7], [-300, 300]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            },
            { threshold: 0.01 } // Trigger when 20% of the section is visible
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
        <div ref={sectionRef} className='bg-[#05141F] w-screen h-[80vh] relative overflow-hidden flex items-center justify-center'>
            <motion.p
                style={{ y }}
                className={`text-white text-4xl md:text-[72px] font-bold uppercase text-center whitespace-nowrap ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
                {isArabic ? "الدليل في المواصفات" : 'The proof in the specs'}
            </motion.p>
        </div>
    )
}