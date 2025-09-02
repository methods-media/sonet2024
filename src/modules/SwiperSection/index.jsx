import { useState, useEffect, useMemo } from "react"
import { useTranslation } from "react-i18next";

export const SwiperSection = ({ id }) => {
    const [expanded, setExpanded] = useState('star')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const { t, i18n } = useTranslation('common');
    const ids = [
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6ef62e83-dbac-4d05-58b7-57c9890fe800/semi`,
            title: 'swiper1Title1',
            description: 'swiper1Desc1',
            id: `star`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9c4f2ca1-89f3-43b8-1673-f96d0f02b100/semi`,
            title: 'swiper1Title2',
            description: 'swiper1Desc2',
            id: `Crystal`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9873bc24-0dae-4fb5-a645-416b1d693400/semi`,
            title: 'swiper1Title3',
            description: 'swiper1Desc3',
            id: `Power`
        }
    ]


    const ids1 = [
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/45c663b5-a486-4fde-d811-4b8a6617e800/semi`,
            title: 'swiper2Title1',
            description: 'swiper2Desc1',
            id: `star`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/5e58da6b-3331-4769-b2e9-eb44fca73400/semi`,
            title: 'swiper2Title2',
            description: 'swiper2Desc2',
            id: `Crystal`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/443b77a8-d23c-4730-c4fb-87ba5021aa00/semi`,
            title: 'swiper2Title3',
            description: 'swiper2Desc3',
            id: `Power`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/f093d490-b252-4d14-ab9e-afae977c1600/semi`,
            title: 'swiper2Title4',
            description: 'swiper2Desc4',
            id: `Power1`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d5a65bf6-048a-4995-92ad-9f0a5318ef00/semi`,
            title: 'swiper2Title5',
            description: 'swiper2Desc5',
            id: `Power2`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0566524e-7213-47c9-2400-111d22c3ea00/semi`,
            title: 'swiper2Title6',
            description: 'swiper2Desc6',
            id: `Power3`
        },
        {
            image: `https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2eebb827-ba8c-4106-885a-2c82f5238300/semi`,
            title: 'swiper2Title7',
            description: 'swiper2Desc7',
            id: `Power4`
        }
    ]

    const data = useMemo(() => {
        if (id == 1)
            return ids1
        else
            return ids
    }, [id])



    const handleItemClick = (itemId) => {
        if (isTransitioning || expanded === itemId) return

        setIsTransitioning(true)
        setExpanded(itemId)

        // Reset transition state after animation completes
        setTimeout(() => {
            setIsTransitioning(false)
        }, 700)
    }

    const getItemWidth = (itemId) => {
        if (expanded === itemId) {
            return `calc(100vw - ${(data.length - 1) * 100}px)`
        }
        return `100px`
    }

    return (
        <div className="h-[83vh] w-screen flex items-center bg-amber-50 overflow-hidden  border-x-[5px] border-y-[10px] border-white">
            {data.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: getItemWidth(item.id),
                        minWidth: getItemWidth(item.id)
                    }}
                    className={`cursor-pointer relative !min-h-[83vh] border-[5px] border-white !h-[83vh] transition-all duration-700 ease-in-out ${expanded === item.id ? 'flex-shrink-0' : 'flex-shrink'
                        }`}
                >
                    {expanded == item?.id ? null : <div
                        style={{
                            backdropFilter: `blur(5px)`,
                            WebkitBackdropFilter: `blur(5px)`,
                            backgroundColor: `rgba(0, 0, 0, 0.1)`
                        }}
                        className="!min-w-full absolute top-0 left-0  !min-h-full  bg-gradient-to-b flex items-center justify-center from-transparent from-[75%] to-black to-[100%]">
                        <h3
                            style={{
                                writingMode: 'vertical-rl'
                            }}
                            className={`text-[24px] text-white ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} `}>
                            
                            {
                                t(item.title)?.includes('LED') ?

                                    <>
                                        {t(item.title)?.split('LED')?.[0]}
                                        <span className="font-[InterBold]">{'LED'}</span>
                                        {t(item.title)?.split('LED')?.[1]}
                                    </>
                                    : t(item.title)?.includes('16') ?

                                        <>
                                            {t(item.title)?.split('16')?.[0]}
                                            <span className="font-[InterBold]">{'16'}</span>
                                            {t(item.title)?.split('16')?.[1]}
                                        </>
                                        : t(item.title)?.includes('LCD') ?

                                            <>
                                                {t(item.title)?.split('LCD')?.[0]}
                                                <span className="font-[InterBold]">{'LCD'}</span>
                                                {t(item.title)?.split('LCD')?.[1]?.split('10.25')?.[0]}
                                                <span className="font-[InterBold]">{'10.25'}</span>
                                                {t(item.title)?.split('LCD')?.[1]?.split('10.25')?.[1]}


                                            </>
                                            :
                                            t(item.title)?.includes('10.25') ?

                                                <>
                                                    {t(item.title)?.split('10.25')?.[0]}
                                                    <span className="font-[InterBold]">{'10.25'}</span>
                                                    {t(item.title)?.split('10.25')?.[1]}
                                                </>
                                                : t(item.title)?.includes('6') ?

                                                    <>
                                                        {t(item.title)?.split('6')?.[0]}
                                                        <span className="font-[InterBold]">{'6'}</span>
                                                        {t(item.title)?.split('6')?.[1]}
                                                    </>
                                                    : t(item.title)}

                            </h3>

                    </div>
                    }
                    {/* Content overlay when expanded */}
                    {expanded === item.id && !isTransitioning && (
                        <div className="w-full bg-gradient-to-b from-transparent from-75% to-black to-100% flex flex-col h-full items-center justify-end gap-2 pb-5 animate-fadeIn">
                            <h3 className={`text-[24px] text-white ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} animate-slideUp`}>
                               
                                {
                                    t(item.title)?.includes('LED') ?

                                        <>
                                            {t(item.title)?.split('LED')?.[0]}
                                            <span className="font-[InterBold]">{'LED'}</span>
                                            {t(item.title)?.split('LED')?.[1]}
                                        </>
                                        : t(item.title)?.includes('16') ?

                                            <>
                                                {t(item.title)?.split('16')?.[0]}
                                                <span className="font-[InterBold]">{'16'}</span>
                                                {t(item.title)?.split('16')?.[1]}
                                            </>
                                            : t(item.title)?.includes('LCD') ?

                                                <>
                                                    {t(item.title)?.split('LCD')?.[0]}
                                                    <span className="font-[InterBold]">{'LCD'}</span>
                                                    {t(item.title)?.split('LCD')?.[1]?.split('10.25')?.[0]}
                                                    <span className="font-[InterBold]">{'10.25'}</span>
                                                    {t(item.title)?.split('LCD')?.[1]?.split('10.25')?.[1]}


                                                </>
                                                :
                                                t(item.title)?.includes('10.25') ?

                                                    <>
                                                        {t(item.title)?.split('10.25')?.[0]}
                                                        <span className="font-[InterBold]">{'10.25'}</span>
                                                        {t(item.title)?.split('10.25')?.[1]}
                                                    </>
                                                    : t(item.title)?.includes('6') ?

                                                        <>
                                                            {t(item.title)?.split('6')?.[0]}
                                                            <span className="font-[InterBold]">{'6'}</span>
                                                            {t(item.title)?.split('6')?.[1]}
                                                        </>
                                                        : t(item.title)}
                            
                            </h3>
                            <p className={`text-base text-white max-w-[70%] text-center ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'} animate-slideUp`}>
                                
                                
                                {t(item.description)?.includes('16') ?

                                <>
                                    {t(item.description)?.split('16')?.[0]}
                                    <span className="font-[InterBold]">{'16'}</span>
                                    {t(item.description)?.split('16')?.[1]}
                                </>
                                    : t(item.description)?.includes('2024') ?

                                        <>
                                            {t(item.description)?.split('2024')?.[0]}
                                            <span className="font-[InterBold]">{'2024'}</span>
                                            {t(item.description)?.split('2024')?.[1]}
                                        </>
                                        : t(item.description)}
                                
                                </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}