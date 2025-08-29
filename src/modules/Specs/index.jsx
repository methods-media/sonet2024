import { SpecsAccordion } from "@src/common/components/accordion/SpecsAccordion"
import { useState } from "react"
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next';
import { Trims } from "./trims";

export const SpecsSection = () => {
  const [activeTrim, setActiveTrim] = useState(0)
  const [activeSpecs, setActiveSpecs] = useState(0)
  const { t } = useTranslation('common');
  const { locale } = useRouter()

   
  return (
    <div className='bg-white w-full p-6  lg:ps-[105px] lg:pt-12.5 flex flex-col  px-4 md:px-[80px]' id={'specs'}>
      <div className={`w-full items-start flex flex-col lg:flex-row ${locale == 'ar' ? "gap-5" : "gap-5"} lg:gap-7`}>
        <div className=' flex flex-col flex-1'>

          {/* <h1 className={`text-2xl text-[#05141F] leading-[50px] ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"} mb-5`}> {t('Highlights')}</h1> */}

       
       
          <h1 className={`text-2xl text-[#05141F]  ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"}`}>{t('dimensions')}

          </h1>
          <div className='flex flex-col  gap-6 items-center   md:w-full md:max-w-[800px] '>
            <img className='h-[500px] w-[90%] md:w-[100%]  rounded-lg  object-contain' src={activeSpecs == 0 ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d30a435e-d756-4056-c8ae-09be726e2a00/public' : activeSpecs == 1 ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/7f8fdcd2-f31a-4a67-6d35-2e00f61b6c00/public' : activeSpecs == 2 ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/bc2920c1-a5e1-45e7-c044-21b719a95e00/public' : activeSpecs == 3 ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d3aee7b0-0262-40af-17b7-cd27d4592800/public' : 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/061e3741-54e4-4b56-d0cd-cf3ab4c17500/public'} />
            <div className="flex flex-row flex-wrap items-center justify-center max-w-[100%] gap-2.5 md:gap-2.5">
              <p className={`tex-[11px] md:text-lg ${locale == 'ar' ? " font-['GSSBold']" : " font-['InterBold']"} p-1 md:p-2.5 cursor-pointer  ${activeSpecs == 0 ? 'text-[#06141F]' : 'text-[#A3A8AD] hover:text-[#06141F]'}`} onClick={() => setActiveSpecs(0)}>{t('length')} </p>
              <p className={`tex-[11px] md:text-lg ${locale == 'ar' ? " font-['GSSBold']" : " font-['InterBold']"} p-1 md:p-2.5 cursor-pointer ${activeSpecs == 1 ? 'text-[#06141F]' : 'text-[#A3A8AD] hover:text-[#06141F]'}`} onClick={() => setActiveSpecs(1)}  >{t('width')} </p>
              <p className={`tex-[11px] md:text-lg ${locale == 'ar' ? " font-['GSSBold']" : " font-['InterBold']"} p-1 md:p-2.5 cursor-pointer ${activeSpecs == 2 ? 'text-[#06141F]' : 'text-[#A3A8AD] hover:text-[#06141F]'}`} onClick={() => setActiveSpecs(2)}>{t('height')} </p>
              <p className={`tex-[11px] md:text-lg ${locale == 'ar' ? " font-['GSSBold']" : " font-['InterBold']"} p-1 md:p-2.5 cursor-pointer ${activeSpecs == 3 ? 'text-[#06141F]' : 'text-[#A3A8AD] hover:text-[#06141F]'}`} onClick={() => setActiveSpecs(3)}>{t('wheelbase')} </p>
              <p className={`tex-[11px] md:text-lg ${locale == 'ar' ? " font-['GSSBold']" : " font-['InterBold']"} p-1 md:p-2.5 cursor-pointer ${activeSpecs == 4 ? 'text-[#06141F]' : 'text-[#A3A8AD] hover:text-[#06141F]'}`} onClick={() => setActiveSpecs(4)}> {t('Ground_Clearance')} </p>

            </div>
          </div>
        </div>
        <div className='w-full flex flex-1 flex-col gap-4 items-start '>

          <h1 className={`text-2xl text-[#05141F]  ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"}`}>{t('trimSpecs')?.split('Kia K4')[0]}<span className='font-["InterBold"]'>Kia K4</span>{t('trimSpecs')?.split('Kia K4')[1]}
          </h1>
          <Trims/>
        </div>
      </div>


    </div>
  )
}