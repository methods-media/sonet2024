import { Linkedin, Facebook, Network, Youtube, Instagram, TwitterIcon, } from "lucide-react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
export default function Footer () {
    const { locale, pathname } = useRouter()
    const { t, i18n } = useTranslation('common')
    const isArabic=i18n?.language=='ar'
    return (
        <>
          
{pathname.includes('configurator')?null:
<>
                    <div className="w-screen bg-[url('https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ff405cbc-5555-4b50-4e1d-1ba45e99d800/public')] footer-img  bg-no-repeat flex flex-col justify-start items-start bg-cover bg-center h-[40vh] md:h-screen bg-[#05141F]">
                        <div className={`${locale == 'ar' ? 'min-h-[8vh] md:min-h-[25vh]' : 'min-h-[8vh] md:min-h-[40vh]'}  footer-img-text md:mt-0   flex w-full flex-col justify-center `}
                 dir="ltr" >
                            <div className="bg-gradient-to-b from-white to-transparent w-full flex flex-col justify-between   h-[40vh]">
                                <div className={`w-full px-12 flex flex-col gap-5 mx-auto  ${isArabic ?'items-end':''}`}>
                                    <p className={`text-xl lg:text-[40px] text-start ${isArabic ?'font-[GSSMedium]':'font-[InterBold]'}`}>{isArabic ?`أينما تأخذك الحياة`:`Wherever life takes you`}</p>
                                    <p className={`text-sm lg:text-lg text-black text-start ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>
                                        {isArabic ? `سواء كنت تتجول في شوارع المدينة أو تتحدى أصعب الطرق. عِش الحرية الحقيقية وجرّب مزيج القوة والأناقة الذي لا تقدمه سوى كيا تاسمان.` : <>
                                        
                                            Whether navigating city streets or conquering the toughest trails. Embrace the freedom <br />
                                            to go further and experience the perfect blend of capability and style<br />
                                            that only Kia Tasman can deliver.</>}
                                      

                                    </p>
                                </div>
                           </div>
                   
                         

                </div>
                    </div>
                    <div dir={'ltr'} className='!bg-[#05141F] w-full  flex  flex-col lg:flex-row  items-center h-[260px] py-10 lg:py-0 lg:h-[120px] justify-between  px-10 relative  '>

                        <div className="flex flex-col gap-2 items-start">
                            <img src='/assets/images/logoWhite.png' width={100} height={37} />
                            <div className='flex justify-center gap-4  items-start   ' style={{ direction: 'ltr' }}>

                                <p><span style={{ fontSize: '11px', color: '#A3A8AD' }} className=" font-['InterRegular']">© 2025 All Right Reserved. Kia Middle East</span></p>

                            </div>
                        </div>

                        <div className=' flex flex-wrap justify-center  gap-4 items-center   '>
                            <a href='https://worldwide.kia.com/int/kia-global-websites' target="_blank" rel="noopener">
                            <img src='/assets/world.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://www.facebook.com/KiaMiddleEastandAfrica/' target="_blank" rel="noopener">
                            <img src='/assets/fb.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://x.com/KIA__MEA' target="_blank" rel="noopener"> 
                            <img src='/assets/x.png' className='w-[24px] h-[24px]' />
                            </a>

                            <a href='https://www.instagram.com/kia_mea/' target="_blank" rel="noopener">
                                <Instagram className='text-white' width={24} height={24} />
                            </a>
                            <a href="https://www.linkedin.com/company/kia-middle-east-africa/" target="_blank" rel="noopener">
                                <img src='/assets/link.png' className='w-[24px] h-[24px]' />
                            </a>
                            <a href='https://www.youtube.com/channel/UClAYWjFznLNw3saZHA5OkNw' target="_blank" rel="noopener">
                            <Youtube className='text-white' width={24} height={24} />
                            </a>
                            <a href='https://www.tiktok.com/@kia.mea' target="_blank" rel="noopener">
                                <img src='/assets/tiktok.png' className='w-[24px] h-[24px]' />
                            </a>
                                
                            <a href='https://www.snapchat.com/add/kia-mea' target="_blank" rel="noopener">
                                <img src='/assets/snap.png' className='w-[24px] h-[24px]' />
                               </a>
                          


                        </div>

                        <div className="opacity-0">
                            <img src='/assets/images/logoWhite.png' width={100} height={37} />
                            <div className='flex justify-center gap-4  items-center   ' style={{ direction: 'ltr' }}>

                                <p><span style={{ fontSize: '11px', color: '#A3A8AD' }} className=" font-['InterRegular']">© 2025 All Right Reserved. Kia Middle East</span></p>

                            </div>
                        </div>

                    </div></>
              
}
</>


       )
}

const SvgDivider = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ zIndex: '150' }} height={250} viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path fill="white" d="M0,6V0h1000v100L0,6z"></path>
    </svg>
);
