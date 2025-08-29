'use client'
import { useMemo, useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const SpecsCards = ({ model ,id}) => {
    const { t } = useTranslation('common');
    const { locale } = useRouter()      

    const modelData1 = [
        {
            title: t('sliding_sunroof'),
            description: t('sliding_sunroof_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/11dbe639-c504-4393-d2d8-7e795e08a800/public'
        },
        {
            title: t('heated_ventilated_seats'),
            description: t('heated_ventilated_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/771673fb-2154-4a14-df01-e5f5f46b7c00/public'
        },
        {
            title: t('harman_kardon'),
            description: t('harman_kardon_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/34d377d4-c837-4703-334b-962e8e1a2d00/public'
        },
        {
            title: t('ambient_lighting'),
            description: t('ambient_lighting_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/c0099b72-2a05-404a-de2a-610800fcf800/public'
        },
        {
            title: t('cupHolder'),
            description: t('cupHolder_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0edab1f9-bd4c-4288-9702-26fda32e2600/public'
        },
        {
            title: t('usb_ports'),
            description: t('usb_ports_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/efb4621e-df7d-4476-bc74-c0674d68f600/public'
        },




    ]

    const modelData2 = [
        {
            title: t('bca'),
            description: t('bca_description'),
            image: '/assets/new/KCL4-SFV-BCA.webm'
        },
        {
            title: t('pca_r'),
            description: t('pca_r_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/57833461-a123-4914-1bcb-eb3ad1050100/public'
        },
        {
            title: t('pdw'),
            description: t('pdw_description'),
            image: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/37fa3fff-a435-4121-1126-bd909d145400/public'
        },





    ]
    const [selectedCard, setSelectedCard] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = useRef(null);

    const selectedModel = useMemo(() => {
        if (model === 'K1') {
            return modelData1;
        } else {
            return modelData2;
        }
    }, [model]);
    // Add effect to measure and update content height
    useEffect(() => {
        if (contentRef.current) {
            if(window && window.innerWidth<768)
                setContentHeight(300)
            else
            setContentHeight(contentRef.current.offsetHeight);
        }
    }, [selectedModel]); // Re-measure when model changes


    const textVariants = {
        hidden: {
            opacity: 0,
            x: locale === 'ar' ? 100 : -100  // Right for Arabic, left for English
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeIn"
            }
        },
        exit: {
            opacity: 0,
            x: locale === 'ar' ? 100 : -100,  // Right for Arabic, left for English
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };



    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
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
        <div ref={sectionRef} id={id} className='min-h-screen cards2Container flex flex-col items-start justify-center px-4 md:px-10  gap-8 bg-[#05141F] '>
            {model === 'K2' ? (
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full overflow-hidden mt-15 mb-8">
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "exit"}
                        className={`text-white engine-desc text-2xl md:text-[40px] text-center md:text-center leading-[50px]  ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}
                    >
                        {t('safety_tech')}
                    </motion.p>
                   
                </div>
            ) : null}
            <div className="flex flex-col md:flex-row items-center justify-center px-0 md:px-0 gap-4 z-100 md:z-[200] pb-7">
                <div className={`${model == 'K2' ? 'min-w-full md:min-w-[70%] cards2Contain' : 'pt-[30px] md:pt-0 min-w-full md:min-w-[60%] cards2Contain'} flex flex-col gap-3 items-center xs:!h-[300px] min-h-[320px] lg:min-h-[700px]   `} style={{ height:  contentHeight  }}>
                    {model == 'K2' && selectedCard == 0 ?
                        <video
                            src={selectedModel[selectedCard == -1 ? 0 : selectedCard].image}
                            alt=""
                            autoPlay
                            muted
                            loop
                            playsInline
                            webkit-playsinline="true"
                            controls={false}
                            controlsList="noremoteplayback"
                            disablePictureInPicture
                            className='w-full h-full object-cover rounded-[25px] drop-shadow-lg'
                        /> : <img
                        src={selectedModel[selectedCard == -1 ? 0 : selectedCard].image}
                        alt=""
                            className='w-full h-full object-cover rounded-[25px] drop-shadow-lg'
                        />}
                    {model == 'K1' ? <div className="flex items-center w-full justify-center z-[200] ">
                        {modelData1?.map((item, index) => {
                            return <button  key={index} onClick={() => setSelectedCard(index)}
                                className={`cursor-pointer w-[12px] h-[12px] rounded-full  mx-2 ${selectedCard == index ? 'bg-white' : 'bg-[#A3A8AD59]'}`}></button>
                        })}
                    </div> :null}
                </div>
                <div ref={contentRef} className=" flex flex-col gap-2 md:gap-4">
                    {selectedModel?.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`px-4 border-s-[2px] p-2 md:p-4 hover:border-s-[6px] border-white cursor-pointer ${selectedCard === index ? 'bg-white' : ''}`}
                                onClick={() => setSelectedCard(index)}
                            >
                                <p className={`cardsFeat2Title2 ${selectedCard == index ? 'text-[#06141F]' : 'text-white opacity-60'}  ${locale == 'ar' ? 'font-[GSSBold] text-sm md:text-lg' : 'font-[InterBold] text-sm md:text-lg'} `}>
                                    
                                    {item.title?.includes('Harman Kardon') ?
                                        <>
                                        {item.title?.split('Harman Kardon')[0]}
                                        <span className="font-[InterBold] text-sm md:text-lg cardsFeat2Title2">Harman Kardon</span>
                                        {item.title?.split('Harman Kardon')[1]}
                                    
                                        </> : item?.title?.includes('USB') ?
                                            <>
                                            {item.title?.split('USB')[0]}
                                            <span className="font-[InterBold] text-sm md:text-lg cardsFeat2Title2">USB</span>
                                            {item.title?.split('USB')[1]}

                                            </> : item?.title?.includes('BCA') ?
                                                <>
                                                    {item.title?.split('BCA')[0]}
                                                    <span className="font-[InterBold] text-sm md:text-lg cardsFeat2Title2">BCA</span>
                                                    {item.title?.split('BCA')[1]}

                                                </>
                                        
                                                : item?.title?.includes('PCA-R') ? <>
                                                    {item.title?.split('PCA-R')[0]}
                                                    <span className="font-[InterBold] text-sm md:text-lg cardsFeat2Title2">PCA-R</span>
                                                    {item.title?.split('PCA-R')[1]}

                                                </> : item?.title?.includes('PDW') ?
                                                        <>
                                                            {item.title?.split('PDW')[0]}
                                                            <span className="font-[InterBold] text-sm md:text-lg cardsFeat2Title2">PDW</span>
                                                            {item.title?.split('PDW')[1]}

                                                        </> : item?.title}
                                    
                                    
                                 </p>
                                <p className={`cardsFeat2Desc ${selectedCard == index ? 'text-[#54595F]' : 'text-white opacity-60'}  ${locale == 'ar' ? 'font-[GSSLight] text-sm md:text-base' : 'font-[InterRegular] text-sm md:text-base'} `}>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};