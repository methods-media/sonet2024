import { useTranslation } from "react-i18next";
import KiaConnectEnhanced from "./KiaConnectEnhanced";

export default function KiaConnect () {
const {i18n}=useTranslation('common')
    const isArabic=i18n?.language=='ar'
    return (
        <div className="min-h-screen min-w-screen" dir="ltr">

        <div className='min-h-[73vh] w-screen relative bg-white' style={{
            backgroundImage: `url('https://methods.ae/wp-content/uploads/connect-remote-control-pt.jpg')`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'

        }} id="kiaConnect">
            <div class="bg-gradient-to-b flex flex-col items-start   justify-center from-0% h-[75vh] w-screen  to-[#06141F] to-100% from-transparent" id="bg-section">
                    <div className="max-w-[80%] min-w-[80%] mx-auto flex items-start">
                        <img src='/assets/ktk-kiaconnectlogo.png' className="max-w-[500px]" />
                  </div>
            </div>

                
           
           
            </div>
            <div className="bg-[#06141F]   h-[25vh]">

                <div className="h-[25vh] max-w-[80%] mx-auto flex items-start   ">
                <div className="flex-1">
                    <div className='flex flex-col w-[100%] gap-5 items-center lg:items-start '>
                        <p className='text-white text-3xl lg:text-[40px] font-[InterBold]'>Kia Connect</p>
                            <p className={`text-white text-base text-center lg:text-start leading-[25px] lg:text-[20px] ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{isArabic ?
                            <>
                                {`بوابتك لرحلة أذكى وأكثر اتصالاً، تربط سيارتك كيا بهاتفك الذكي بكل سلاسة`}
                            </> : `Kia Connect is your gateway to a smarter, more connected drive, seamlessly linking your Kia to your smartphone.`}</p>
                            <button className={`text-sm hover:bg-[#06141F] cursor-pointer py-3 px-6 hover:text-white text-[#06141F] bg-white hover:border hover:border-[#06141F] rounded-[5px] w-fit ${isArabic ? 'font-[GSSMedium]' : 'font-[InterRegular]'}`}>{isArabic ? `إعرف المزيد` : `Learn More`}</button>
                    </div>
                </div>
                <div className="flex-1">
                    <KiaConnectEnhanced />

                </div>
            </div>
            </div>

        </div>
    )
}