import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function KiaConnectEnhanced () {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const carouselRef = useRef(null);
    const { i18n } = useTranslation('common')
    const isArabic = i18n?.language == 'ar'
    const slides = [
        {
            title: isArabic ? "تشغيل/إيقاف المحرك عن بُعد" : "Remote Engine Start/Stop",
            description: isArabic ?`من خلال تطبيق Kia Connect ، يمكنك تشغيل أو إيقاف محرك سيارتك عن بُعد وأنت خارج المركبة`: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

        },
        {
            title: isArabic ?`التحكم في المناخ عن بُعد`: "Remote Climate Control",
            description: isArabic ?`تحكم في درجة حرارة سيارتك من المنزل أو المكتب. من خلال تطبيق Kia Connect.
يمكنك ضبط درجة الحرارة المطلوبة مسبقًا، وسيقوم نظام التكييف أو التدفئة في سيارتك بضبط درجة الحرارة تلقائيًا.`: "Control your Kia's temperature from your home or office. With the Kia Connect App, you can set the desired temperature in advance and your Kia's air conditioner or heater will adjust accordingly.",

        },
        {
            title: isArabic ?`تشخيص السيارة`: "Vehicle Diagnostics",
            description: isArabic ?`يقدم تطبيق Kia Connect تشخيصًا لحالة سيارتك لضمان سلامتك.`: "Kia Connect provides a diagnosis of your vehicle for your safety.",

        },

        {
            title: isArabic ?`إشعارات الصيانة`: "Maintenance Notification",
            description: isArabic ?`يقوم تطبيق Kia Connect بإشعارك عند اكتشاف أي خلل في المكونات الرئيسية.`: "Kia Connect notifies you if any major components malfunction is detected.",

        },
        {
            title: isArabic ?`تحديثات الملاحة عبر الهواء (OTA)`: "OTA Navigation Updates",
            description: isArabic ?`احصل على تحديثات تلقائية لاسلكية للبرمجيات للحفاظ على نظام الملاحة محدثًا دائمًا.`: "Get automatic wireless software updates to keep your navigation up to date.",

        },
        {
            title: isArabic ?`تحديد موقع سيارتي`: "Find My Vehicle",
            description: isArabic ?`هل تواجه صعوبة في العثور على سيارتك Kia في موقف سيارات كبير؟ يمكن لـ Kia Connect مساعدتك في تحديد موقع سيارتك بسهولة.`: "Are you having trouble finding your Kia in a large parking lot? Kia Connect can help you easily locate your parked vehicle.",

        },
        {
            title: isArabic ?`تشغيل/إيقاف المحرك عن بُعد`: "Remote Engine Start/Stop",
            description: isArabic ?`من خلال تطبيق Kia Connect ، يمكنك تشغيل أو إيقاف محرك سيارتك عن بُعد وأنت خارج المركبة`: "Using the Kia Connect App, you have the ability to remotely start or turn off your Kia from outside the vehicle.",

        },

    ];

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setTimeout(() => setIsAnimating(false), 300);
        }
    };

    return (
        <div className="container   relative z-10">
            <div className="grid grid-cols-1  gap-6 items-start ">

                {/* First Column - Carousel */}
                <div className={` w-full h-[25vh]`}>
                    <div
                        className="relative h-[25vh] flex items-start flex-row  justify-start"
                        ref={carouselRef}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                       
                        <AnimatePresence  mode="wait">
                            <div
                                
                                className='flex items-start justify-center w-[100%]'
                            >
                                <div className='flex-1  flex-col items-start justify-center'>
                                    <motion.p
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className={`text-white text-[22px] text-center ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'} `}>{slides[currentSlide]?.title}</motion.p>
                                    <div className='w-full flex items-center mt-5 '>
                                        <button
                                            onClick={prevSlide}
                                            className="w-[7%]  p-2 rounded-full cursor-pointer "
                                        >
                                            <ChevronLeft className="w-10 h-10 text-2xl text-[#FFFFFF4A] hover:text-white"  />
                                        </button>
                                        <motion.p
                                            key={currentSlide}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className={`text-white text-base ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}  w-[86%] min-w-[86%] max-w-[86%]  text-center`}>{slides[currentSlide]?.description}</motion.p>
                                        <button
                                            onClick={nextSlide}
                                            className=" w-[7%] p-2 rounded-full cursor-pointer "
                                        >
                                            <ChevronRight className="w-10 h-10 text-2xl text-[#FFFFFF4A] hover:text-white"  />
                                        </button>
                                    </div>
                                    </div>
                            </div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                      
                      

                        {/* Pagination Dots */}
                        <div className=" w-full absolute bottom-10 justify-center flex">
                            <div className='flex justify-center space-x-2'>
                                {slides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                            ? 'bg-white'
                                            : 'bg-[#FFFFFF38] hover:bg-white'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
