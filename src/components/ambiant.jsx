import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next";

export default function AmbiantLight ({ isModalOpen, setIsModalOpen }) {
    const [isAmbiant, setIsAmbiant] = useState(false)
    const { t, i18n } = useTranslation('common');

    return (
        <>
        <div className='relative'>
            <div className="absolute z-[90] left-0 w-full justify-center items-center bottom-6 gap-2  flex flex-col">
                    <p className={`text-sm ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-white`}>{i18n?.language == 'ar' ? `إضاءة داخلية متغيرة` : 'Switch Ambient Light'}</p>
                <div className="flex items-center gap-2">
                        <p className={`text-xs ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-white`}>
                            {i18n?.language == 'ar' ? 'إيقاف' : `Off`}
                        </p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" value={isAmbiant} checked={isAmbiant} onChange={() => { setIsAmbiant(!isAmbiant) }} />
                        <div className="relative w-12 h-6 rounded-full bg-neutral-800 peer-checked:bg-green-400 transition-colors duration-300">
                            <div
                                    className={`absolute top-0.5 h-5 w-5 bg-white rounded-full transition-transform duration-300 shadow transform ${i18n?.language === 'ar'
                                        ? (isAmbiant ? '-translate-x-6.5' : '-translate-x-0.5')
                                        : (isAmbiant ? 'translate-x-6.5' : 'translate-x-0.5')
                                        }`}
                            ></div>
                        </div>
                    </label>
                        <p className={`text-xs ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'} text-white`}>{i18n?.language == 'ar' ? 'تشغيل' : `On`}</p>
                </div>
            </div>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={isAmbiant ? 'ambientOn' : 'ambientOff'}
                        src={isAmbiant ? 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/01306e78-7370-4716-0019-5b03b0c1d100/semi' : 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/27149298-f163-4478-c461-b7c77fd23e00/tv'}
                        width={'100vw'}
                        height={'100vh'}
                        className='h-[60vh] !w-[100vw] md:!h-[100vh] !object-cover'
                        initial={{ opacity: 0.9 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "linear" }}
                    />
                </AnimatePresence>
            <>
                {isAmbiant ? null : <>
                        {/* First interactive point - largest circle */}
                        <motion.div
                            onClick={() => setIsModalOpen(1)}
                            className='absolute top-1/2 left-[42%] z-[90] cursor-pointer'
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className='w-8 h-8  rounded-full border-2 border-white/40'></div>
                            <div className='w-6 h-6  rounded-full border-2 border-white/60 absolute top-1 left-1'></div>
                            <div className='w-4 h-4  rounded-full border-2 border-white absolute top-2 left-2'></div>
                            <div className='w-2 h-2  rounded-full absolute top-3 left-3'></div>
                        </motion.div>

                        {/* Second interactive point */}
                        <motion.div
                            onClick={() => setIsModalOpen(2)}
                            className='absolute top-[67%] left-[43.5%] z-[90] cursor-pointer'
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        >
                            <div className='w-8 h-8  rounded-full border-2 border-white/40'></div>
                            <div className='w-6 h-6  rounded-full border-2 border-white/60 absolute top-1 left-1'></div>
                            <div className='w-4 h-4  rounded-full border-2 border-white absolute top-2 left-2'></div>
                            <div className='w-2 h-2  rounded-full absolute top-3 left-3'></div>
                        </motion.div>

                        {/* Third interactive point */}
                        <motion.div
                            onClick={() => setIsModalOpen(3)}
                            className='absolute top-[72%] left-[54%] z-[90] cursor-pointer'
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <div className='w-8 h-8  rounded-full border-2 border-white/40'></div>
                            <div className='w-6 h-6  rounded-full border-2 border-white/60 absolute top-1 left-1'></div>
                            <div className='w-4 h-4  rounded-full border-2 border-white absolute top-2 left-2'></div>
                            <div className='w-2 h-2  rounded-full absolute top-3 left-3'></div>
                        </motion.div>

                        {/* Fourth interactive point */}
                        <motion.div
                            onClick={() => setIsModalOpen(4)}
                            className='absolute top-[73%] left-[65%] z-[90] cursor-pointer'
                            whileHover={{ scale: 1.2 }}
                            animate={{
                                scale: [1, 1.3, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        >
                            <div className='w-8 h-8  rounded-full border-2 border-white/40'></div>
                            <div className='w-6 h-6  rounded-full border-2 border-white/60 absolute top-1 left-1'></div>
                            <div className='w-4 h-4  rounded-full border-2 border-white absolute top-2 left-2'></div>
                            <div className='w-2 h-2  rounded-full absolute top-3 left-3'></div>
                        </motion.div>
                </>}
            </>


         
            </div>
           
        </>
    )
}