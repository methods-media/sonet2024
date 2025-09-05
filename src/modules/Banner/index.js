import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
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
    <div id='highlights'
      
      
      className={`w-screen h-[50vh] md:h-screen   bg-[url("https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/1e1b3f25-0f74-4e66-6f5a-f58994c15a00/public")] bg-cover bg-center bg-no-repeat   relative flex items-start justify-start overflow-hidden pt-[76px]`}>
     

      <motion.h1
        className={` p-6 md:p-[60px] text-2xl w-full text-start text-white  ${locale == 'ar' ? "md:text-[52px] font-['GSSBold']" : " md:text-[56px] font-['InterBold']"}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t('sonetTitle')?.includes?.('2024') ?
          <>
            {t('sonetTitle')?.split?.('2024')?.[0]}
            <span className={`font-['InterBold']`}>2024</span>
            {t('sonetTitle')?.split?.('2024')?.[1]}
          </>
          : t('sonetTitle')}
      </motion.h1>
   
     
    </div>
  );
};

export default Banner;
