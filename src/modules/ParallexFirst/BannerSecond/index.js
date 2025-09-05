import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
const BannerSecond = () => {
  const { t} = useTranslation('common');
  const { locale } = useRouter();
  


  return (
    <div id='highlights'
      
      
      className={`w-screen h-[65vh] md:h-screen   bg-[url("https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/5f7ee53a-27a0-41c3-f1fc-da1e316cea00/semi")] bg-cover bg-center bg-no-repeat   relative flex items-start justify-start overflow-hidden `}>
     

      <div className='flex flex-col  gap-2 md:gap-5 pt-[50px] pe-6 md:pe-0 ps-6 md:ps-[60px] min-h-[30vh] bg-[linear-gradient(180deg,#000000_0%,#00000000_90%)]'>
        <motion.h1
          className={`text-lg md:text-[42px] w-full text-start text-white  ${locale == 'ar' ? " font-['GSSBold']" : "font-['InterBold']"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('insect')}
        </motion.h1>
        <motion.p
          className={`text-sm md:text-lg w-full text-start text-white  ${locale == 'ar' ? "font-[GSSMedium] md:font-['GSSBold']" : "font-[InterRegular] md:font-['InterBold']"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('insect_desc')}
          <br />
          {t('insect_desc1')}
          <br />
          {t('insect_desc2')}
        </motion.p>
     </div>
   
     
    </div>
  );
};

export default BannerSecond;
