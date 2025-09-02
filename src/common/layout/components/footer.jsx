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
            
                    <div dir={'ltr'} className='!bg-[#05141F] w-full h-[50vh]  flex  flex-col justify-between gap-8   items-center py-10  px-10 relative  '>
                     
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
                        <p className="text-xs text-[#828692] text-center max-w-[70%]">
                            All information contained in this catalog is based on data available at the time of publication. Descriptions are correct; Kia Corporation strives to maintain accuracy; however, accuracy cannot be guaranteed at all times. Occasionally, Kia Corporation needs to update or modify vehicle features and information already shown in this catalog. All photos and displays are simulated. Kia Corporation, through publication and distribution of this material, makes no warranty, express or implied, for any Kia products. Contact your nearest Authorized Kia Dealer for updated information. Some features shown may not be available in some regions. Consult your Authorized Kia Dealer for equipment. “Trademark”/”M.R.”/”®”. All rights reserved. The text, images, and graphics included in the catalog are protected by copyright and industrial property rights. Content may not be copied, disseminated, altered, or made commercially available to third parties. Unless otherwise specified, all trademarks, trade names, and trade notices in this catalog are protected under industrial property law. This applies to Kia trademarks, trade names, logos, and emblems. The trademarks, trade names, trade dress and design elements used in this catalog are the industrial property of Kia Corporation. 2023 Kia Corporation. Reproduction of the contents of this material without permission of Kia Corporation is prohibited.


                        </p>
                      

                     
                        <div className="flex flex-col gap-2 items-center">
                            <img src='/assets/images/logoWhite.png' width={150} height={50} />
                            <div className='flex justify-center gap-4  items-start   ' style={{ direction: 'ltr' }}>

                                <p><span style={{ fontSize: '11px', color: '#A3A8AD' }} className=" font-['InterRegular']">Copyright (C) 2023 Kia Corporation. All Rights Reserved.
</span></p>

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
