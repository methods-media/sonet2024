import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Engine } from 'public/assets/svg/engine';
import { Terrain } from 'public/assets/svg/otain';
import { Treck } from 'public/assets/svg/treck';
import { WarrantySVG } from 'public/assets/svg/warranty';
import { useRef, useState } from 'react';
const Banner = () => {
  const { t ,i18n} = useTranslation('common');
  const { locale, query } = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  
  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoEnded(true); // Show content even if video fails
  };

  return (
    <div id='highlights' className={`w-screen h-[90vh] md:h-screen ${videoEnded ? ' z-[200]' :' z-[200000]'}  bg-black bg-cover bg-center bg-no-repeat   relative flex items-center justify-end overflow-hidden`}>
      {!videoError && (
        <video
          ref={videoRef}
          onEnded={handleVideoEnd}
          onError={(error) => {
            console.log('error', error)
            handleVideoError(error)
          }}
          controls={false}
          autoPlay
          playsInline
          muted
          className='w-full h-full object-cover'
        >
          <source src="/assets/videos/cover.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {(videoEnded || videoError) ? <>
        <div className="absolute justify-center  inset-0 z-40  text-white md:start-[70px]  start-5 top-[100px]">
          <motion.h1
            className={`     sm:text-6xl text-2xl  ${locale == 'ar' ? "md:text-[52px] font-['GSSBold']" : " md:text-[72px] font-['InterBold']"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {locale == 'ar' ? (
              <>
                {t('kia_Tasman')}
              
              </>
            ) : t('kia_Tasman')}
          </motion.h1>
          <motion.p
            className={`md:text-[34px] ${locale == 'ar' ? "font-['GSSMedium']" : "font-['InterRegular']"} sm:text-3xl text-2xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('push_beyond_ordinary')}
          </motion.p>

        </div>
      
      
      </> : null}
      {/* bg-gradient-to-b from-transparent to-[#06141F] */}
      {(videoEnded || videoError) ? <motion.div
        className='absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#06141F] from-0% to-100% flex-wrap md:flex-nowrap  h-auto md:h-[90px] py-2.5   flex items-center mb-5 md:mb-0 justify-around md:justify-center gap-5 md:gap-[50px]'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className='flex items-center justify-center  gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Engine />
        </div>
         <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? "محرك 2.5 لتر تيربو":'2.5L T-GDI'}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `277 حصان \ ناقل حركة 8 سرعات`:`277HP / 8-Speed SBW`}</p>
         </div>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Treck />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? `نظام قيادة الصحراء`:`Desert Mode`}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ? `32.2° Approach Angle`:'32-degree Approach Angle'}</p>
          </div>
        </div>
        <div className='flex items-center justify-center gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <Terrain />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{'Kia Connect'}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ?`مع مفتاح الرقمي`:'With Digital Key'}</p>
          </div>
        </div>
        <div className='flex items-center justify-center  gap-1 md:gap-[10px]'>
          <div className='w-8 md:w-[50px] h-8 md:h-[50px]'>
            <WarrantySVG />
          </div>
          <div className='flex flex-col '>
            <p className='text-white text-sm md:text-lg'>{i18n?.language == 'ar' ? `ضمان 5 سنوات`:'5 Years Warranty'}</p>
            <p className='text-[#A3A8AD] text-xs md:text-sm'>{i18n?.language == 'ar' ?`أو 100 ألف كيلومتر (أيهما أقرب)` :'Or 100,000 Km W.C.F'}</p>
          </div>
        </div>
      </motion.div> : null}
     
    </div>
  );
};

export default Banner;
