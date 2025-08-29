import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSpecs } from './useSpecs';

const Specs = () => {
    const { t ,i18n} = useTranslation('common');
    const isArabic=i18n?.language=='ar'
    const [openCategories, setOpenCategories] = useState({});
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next'); // 'next' or 'prev'
    const {
        featureCategories,
        featureCategories1,
        featureCategories2,
        featureCategories3,
        featureCategories4,
        featureCategories5,
    } = useSpecs()
  


    const trimLevels = [
        { id: 'LX', name: 'LX', features: featureCategories },
        { id: 'EX', name: 'EX', features: featureCategories1 },
        { id: 'EX-Top', name: 'EX-Top', features: featureCategories2 },
        { id: 'X-Line', name: 'X-Line', features: featureCategories3 },
        { id: 'X-Pro', name: 'X-Pro', features: featureCategories4 },
        { id: 'X-Pro+', name: 'X-Pro+', features: featureCategories5 }
    ];
    const toggleCategory = (categoryKey) => {
        setOpenCategories(prev => ({
            ...prev,
            [categoryKey]: !prev[categoryKey]
        }));
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('next');
        setCurrentSlide((prev) => {
            const next = prev + 1;
            // Loop back to the beginning when reaching the end
            return next >= trimLevels.length - 2 ? 0 : next;
        });
        setTimeout(() => setIsAnimating(false), 300);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection('prev');
        setCurrentSlide((prev) => {
            const next = prev - 1;
            // Loop to the end when going before the beginning
            return next < 0 ? trimLevels.length - 3 : next;
        });
        setTimeout(() => setIsAnimating(false), 300);
    };

    const goToSlide = (index) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSlideDirection(index > currentSlide ? 'next' : 'prev');
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    // Get the 3 visible trim cards
    const getVisibleTrims = () => {
        const visibleTrims = [];
        for (let i = 0; i < 3; i++) {
            const index = currentSlide + i;
            if (index < trimLevels.length) {
                visibleTrims.push(trimLevels[index] );
            }
        }
        return visibleTrims;
    };

    const visibleTrims = getVisibleTrims();

    const TrimCard = ({ trim, index, isEntering }) => (
        <div
            className={`bg-[#E7EBF0] rounded-[10px] p-6 h-full transition-all duration-300 transform `}

        >
            {/* Trim Name */}
            <h2 className="text-6xl text-center font-bold text-[#06141F] mb-4">{trim.name}</h2>

            {/* Technical Specifications Section */}
            <div className="mb-6" dir={ isArabic?'rtl':'ltr'}>
                <h3 className={`text-lg font-medium text-start text-black mb-3 ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'}`} dir={isArabic?'rtl':'ltr' }>{isArabic ? "المواصفات" :"Technical Specifications"}</h3>
                <div className="space-y-0">
                    {trim?.features?.map((category, catIndex) => (
                        <div key={category.title} className="w-full">
                            <button
                                onClick={() => toggleCategory(`${trim.id}${category?.title}`)}
                                className={`w-full flex justify-between items-center p-3 text-sm font-medium  cursor-pointer transition-all duration-300 ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'} ${openCategories[`${trim.id}${category?.title}`]
                                    ? 'bg-[#06141F] text-white'
                                    : 'bg-[#7b848c] text-white '
                                    }`}
                            >
                                {category.title}
                                <span className="text-lg">
                                    {openCategories[`${trim.id}${category?.title}`] ? '−' : '+'}
                                </span>
                            </button>
                            {openCategories[`${trim.id}${category?.title}`] && (
                                <div className="mt-2 ml-3 space-y-1" dir={isArabic?'rtl':'ltr'}>
                                    {category.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className={`text-sm flex-wrap text-gray-600 flex items-start ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}>
                                            <span className="text-[#06141F] me-2 mt-1">•</span>
                                            {feature?.toString()?.includes('LED MFR') ?
                                                <>
                                                    {feature?.split('LED MFR')?.[0]}
                                                    <span className='font-[InterBold] mx-[2px]'>LED MFR</span>
                                                    {feature?.split('LED MFR')?.[1]}
                                                </> : feature?.toString()?.includes('28') ?
                                                    <>
                                                        {feature?.split('28')?.[0]}
                                                        <span className='font-[InterBold] mx-[2px]'>28</span>
                                                        {feature?.split('28')?.[1]}
                                                    </>
                                                :
                                                feature?.includes('17') ?
                                                    <>
                                                        <span className='overflow-hidden text-nowrap text-ellipsis'>{feature?.split('17')?.[0]}</span>
                                                        <span className='font-[InterBold] mx-0.5'>17</span>
                                                        {feature?.split('17')?.[1]}
                                                    </> : feature?.includes('18') ?
                                                        <>
                                                            {feature?.split('18')?.[0]}
                                                            <span className='font-[InterBold] mx-0.5'>18</span>
                                                            {feature?.split('18')?.[1]}
                                                        </>
                                                        :
                                                        feature?.includes('X-TREK') ?
                                                            <>
                                                                {feature?.split('X-TREK')?.[0]}
                                                                <span className='font-[InterBold] mx-0.5'>X-TREK</span>
                                                                {feature?.split('X-TREK')?.[1]}
                                                            </>:
                                                        feature?.includes('2.0') ?
                                                            <>
                                                                {feature?.split('2.0')?.[0]}
                                                                <span className='font-[InterBold] mx-0.5'>2.0</span>
                                                                {feature?.split('2.0')?.[1]}
                                                            </> : feature?.includes('ITBC') ?
                                                                <>
                                                                    {feature?.split('ITBC')?.[0]}
                                                                    <span className='font-[InterBold] mx-0.5'>ITBC</span>
                                                                    {feature?.split('ITBC')?.[1]?.includes('ctr') ? <>
                                                                        {feature?.split('ITBC')?.[1]?.split('ctr')?.[0]}
                                                                        <span className='font-[InterBold]'>ctr</span>
                                                                        {feature?.split('ITBC')?.[1]?.split('ctr')?.[1]}
                                                                    </> : feature?.split('ITBC')?.[1]}
                                                                </> :
                                                        feature?.includes('LED') ?
                                                        <>
                                                            {feature?.split('LED')?.[0]}
                                                            <span className='font-[InterBold] mx-[2px]'>LED</span>
                                                            {feature?.split('LED')?.[1]}
                                                        </>
                                                            :
                                                            feature?.includes('Harman / Kardon') ?
                                                                <>
                                                                    {feature?.split('Harman / Kardon')?.[0]}
                                                                    <span className='font-[InterBold] mx-[2px]'>Harman / Kardon</span>
                                                                    {feature?.split('Harman / Kardon')?.[1]}
                                                                </>
                                                                :
                                                        
                                                        feature?.includes('12') ?
                                                            <>
                                                                {feature?.split('12')?.[0]}
                                                                <span className='font-[InterBold] mx-0.5'>12</span>
                                                                {feature?.split('12')?.[1]}
                                                            </>
                                                            : feature?.includes('1.5') ?
                                                                <>
                                                                    {feature?.split('1.5')?.[0]}
                                                                    <span className='font-[InterBold] mx-0.5'>1.5</span>
                                                                    {feature?.split('1.5')?.[1]}
                                                                </>
                                                                : feature?.includes('onee') ?
                                                                    <>
                                                                        {feature?.split('onee')?.[0]}
                                                                        <span className='font-[InterBold] mx-0.5'>1</span>
                                                                        {feature?.split('onee')?.[1]}
                                                                    </>:
                                                            
                                            
                                                                                            feature?.includes(`fours`) ?
                                                                <>
                                                                                                    {feature?.split(`fours`)?.[0]}
                                                                                                    <span className='font-[InterBold] mx-0.5'>4</span>
                                                                                                    {feature?.split(`fours`)?.[1]}
                                                                </>
                                            :
                                            feature?.includes('twlevee') ?
                                            <>
                                                {feature?.split('twlevee')?.[0]}
                                                <span className='font-[InterBold] mx-0.5'>12.3</span>
                                                                        {feature?.split('twlevee')?.[1]?.includes('DAB') ?
                                                                            <>
                                                                                {feature?.split('twlevee')?.[1]?.split('DAB')[0]}
                                                                                <span className='font-[InterBold] '>DAB</span>
                                                                                {feature?.split('twlevee')?.[1]?.split('DAB')[1]}
                                                                            </>
                                                                        : feature?.split('twlevee')?.[1]}
                                            </>
                                                                    : feature?.includes('USB') ?
                                                                        <>
                                                                            {feature?.split('USB')?.[0]}
                                                                            <span className='font-[InterBold] mx-0.5'>USB</span>
                                                                            {feature?.split('USB')?.[1]}
                                                                        </>
                                                                        :
                                                                feature?.includes('6') ?
                                                                    <>
                                                                        {feature?.split('6')?.[0]}
                                                                        <span className='font-[InterBold] mx-0.5'>6</span>
                                                                        {feature?.split('6')?.[1]}
                                                                    </>
                                                                    :
                                                                    feature?.includes('twoo') ?
                                                                        <>
                                                                            {feature?.split('twoo')?.[0]}
                                                                            <span className='font-[InterBold]'>2</span>
                                                                            {feature?.split('twoo')?.[1]}
                                                                        </>
                                                                        :
                                                                        feature?.includes('xl1') ?
                                                                            <>
                                                                                {feature?.split('xl1')?.[0]}
                                                                                <span className='font-[InterBold]'>1</span>
                                                                                {feature?.split('xl1')?.[1]}
                                                                            </>
                                                                            :
                                                                    feature?.includes('AT') ?
                                                                        <>
                                                                            {feature?.split('AT')?.[0]}
                                                                            <span className='font-[InterBold] mx-[2px]'>AT</span>
                                                                            {feature?.split('AT')?.[1]}
                                                                        </>
                                                                        : feature?.includes("ABS + ESC + DBC + HAC + TSA") ?
                                                                            <>
                                                                                {feature?.split("ABS + ESC + DBC + HAC + TSA")?.[0]}
                                                                                <span className='font-[InterBold] mx-0.5'>ABS + ESC + DBC + HAC + TSA</span>
                                                                                {feature?.split("ABS + ESC + DBC + HAC + TSA")?.[1]}
                                                                            </>
                                                                            :
                                                                            feature?.includes("xx") ?
                                                                                <>
                                                                                    {feature?.split("xx")?.[0]}
                                                                                    <span className='font-[InterBold] mx-0.5'>60:40</span>
                                                                                    {feature?.split("xx")?.[1]}
                                                                                </>
                                                                                : feature?.includes("220") ?
                                                                                    <>
                                                                                        {feature?.split("220")?.[0]}
                                                                                        <span className='font-[InterBold] mx-0.25'>220</span>
                                                                                        {feature?.split("220")?.[1]}
                                                                                    </>
                                                                                    :
                                                        
                                                        
                                                        feature}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

         
        </div>
    );

    return (
        <section className="min-h-screen bg-white w-full relative overflow-hidden">
            <div className='max-w-[1400px] mx-auto px-4 py-8'>
                {/* Header Section */}
                <div className="text-start mb-8">
                    <h1 className={`text-[40px] ${isArabic ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-[#06141F] mb-5`}>
                        {isArabic ?`أختر الفئة التي تناسبك`:`  Find the perfect trim for you`}
                    </h1>
                    <p className={`text-lg text-[#06141F] text-start ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>
                        {isArabic ?`من الأداء القوي إلى التفاصيل الفاخرة، توفر لك تاسمان الخيار الذي يعكس شخصيتك ويُعبّر عن أسلوب قيادتك`:`  From rugged to refined, choose the Tasman trim that matches your drive and your style.`}
                    </p>
                </div>

                {/* Trim Cards Slider - Show 3 cards at once */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        disabled={isAnimating}
                        className={`absolute cursor-pointer left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full text-[#06141F] flex items-center justify-center transition-colors z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                    >
                        <ChevronLeft className="w-10 h-10 text-[#06141F]" />
                    </button>

                    {/* Three Trim Cards Container */}
                    <div className="flex justify-center gap-6 " dir='ltr'
>
                        {visibleTrims.map((trim, index) => (
                            <div key={trim.id} className="w-[30%]">
                                <TrimCard
                                    trim={trim}
                                    index={index}
                                    isEntering={
                                        (slideDirection === 'next' &&index === 2 && isAnimating) || // Next: animate rightmost card
                                        (slideDirection === 'prev' && index === 0 && isAnimating)    // Prev: animate leftmost card
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        disabled={isAnimating}
                        className={`absolute cursor-pointer right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full text-[#06141F] flex items-center justify-center transition-colors z-10 ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100'
                            }`}
                    >
                        <ChevronRight className="w-10 h-10 text-[#06141F]" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-8" dir={'ltr'}>
                    {Array.from({ length: Math.max(1, trimLevels.length - 2) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            disabled={isAnimating}
                            className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#06141F]' : 'bg-gray-300'
                                } ${isAnimating ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Custom CSS for bounce animation */}
            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 53%, 80%, 100% {
                        transform: translate3d(0,0,0);
                    }
                    40%, 43% {
                        transform: translate3d(0,-8px,0);
                    }
                    70% {
                        transform: translate3d(0,-4px,0);
                    }
                    90% {
                        transform: translate3d(0,-2px,0);
                    }
                }
            `}</style>
        </section>
    );
};

export default Specs;
