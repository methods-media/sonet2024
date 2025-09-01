import { useState } from "react"
import { useTranslation } from "react-i18next";

export const Light = () => {
    const [on, setOn] = useState(false)
    const { t,i18n } = useTranslation('common');

    return (
        <div className={`w-screen h-screen ${on ? 'bg-[url("https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/f0068d71-99a5-4dcb-fe18-28b048b95300/semi")]' :'bg-[url("https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/27e0552b-08ca-48c6-8555-ce8c2d875300/semi")]'} flex flex-col justify-end bg-cover bg-center bg-no-repeat py-[30px]`}>


            <div className="w-full flex flex-col items-center justify-center">
                <div className="flex items-center justify-center gap-4">
                    <p className={`text-lg ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'} ${!on?'opacity-100':'opacity-0'} text-white`}>{t('day')}</p>
                    <div className="h-[50px] max-w-[120px] flex items-center justify-center bg-[#05141f]/50">
                        <div className="w-[60px] flex items-center justify-center">
                            <img src={`/assets/${on ? 'sunOff' : 'sunOn'}.png`} width={30} height={30} className="cursor-pointer" onClick={() => {
                                if (on)
                                    setOn(false)
                            }} />
                        </div>
                        <div className="w-[60px] flex items-center justify-center">
                            <img src={`/assets/${on ? 'moonOn' : 'moonOff'}.png`} width={30} height={30} className="cursor-pointer" onClick={() => {
                                if (!on)
                                    setOn(true)

                            }} />
                        </div>
                    </div>
                    <p className={`text-lg ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterRegular]'} ${on ? 'opacity-100' : 'opacity-0'} text-white`}>{t('night')}</p>
</div>
                <p className={`text-[26px] ${i18n?.language=='ar'?'font-[GSSMedium]':'font-[InterRegular]'}  text-white`}>{t('switch')}</p>
            </div>
        </div>
    )
}