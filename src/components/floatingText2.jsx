import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const FloatingText2 = ({ head1,head2,head3, desc }) => {
    const sectionRef = useRef(null);
    const { i18n } = useTranslation('common')
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
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
        <div ref={sectionRef} className='h-[50vh] w-screen bg-[#06141F] flex items-center flex-col justify-center'>
            <div className={`relative flex items-center justify-center h-20 ${i18n?.language == 'ar' ? 'font-[GSSMedium]' :'font-[InterBold]'}`} >
                <motion.p
                    initial={{ x: 0, opacity: 0, scale: 0.8 }}
                    whileInView={{ x: i18n?.language=='ar'?200: -200, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`absolute text-white text-4xl md:text-6xl whitespace-nowrap overflow-ellipsis `}
                    style={{
                        fontFamily: i18n?.language == ' ar' ? 'font-[GSSBold] !important' : 'font-[InterBold]'
                    }}
                >
                    {head1}
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ x: i18n?.language == 'ar' ? -25:'', opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`absolute text-white text-4xl md:text-6xl   `}

                    style={{
                        fontFamily: i18n?.language == ' ar' ? 'font-[GSSBold] !important' : 'font-[InterBold]'
                    }}
                >
                   {head2}
                </motion.p>
                <motion.p
                    initial={{ x: 0, opacity: 0, scale: 0.8 }}
                    whileInView={{ x: i18n?.language == 'ar' ? -195: 200, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`absolute text-white text-4xl md:text-6xl  `}
                    style={{
                        fontFamily: i18n?.language == ' ar' ? 'font-[GSSBold] !important' : 'font-[InterBold]'
                    }}
                >
                    {head3}
                </motion.p>
            </div>
            <div className={`w-full ${i18n?.language == ' ar' ? 'font-[InterRegular] !important' : 'font-[GSSMedium] !important'}`}
                style={{
                    fontFamily: i18n?.language == ' ar' ? 'font-[InterRegular] !important' : 'font-[GSSMedium] !important'

            }}>
                
            <motion.p
                style={{  y, opacity, }}
                className={`text-white text-sm md:text-xl px-5 md:px-0 leading-[30px] text-center max-w-[1330px] mx-auto`}>
                {desc}

            </motion.p>
         </div>
        </div>
    )
}