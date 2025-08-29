import { SpecsAccordion } from "@src/common/components/accordion/SpecsAccordion"
import { useState } from "react"
import { useRouter } from "next/router"
import { useTranslation } from 'next-i18next';
import { damp } from "three/src/math/MathUtils";

export const Trims = () => {
    const [activeTrim, setActiveTrim] = useState(0)
    const [activeSpecs, setActiveSpecs] = useState(0)
    const { t } = useTranslation('common');
    const { locale } = useRouter()

const carTypes=[
    {
        title:'1.6L MPI',
        specs: ['GL', 'GL+'],
      
    
    },
    {
        title:'2.0L MPI',
        specs: ['GL', 'GLS-Base', 'GLS-Mid', 'GLS-Top']

    },
    {
        title:'1.6L Turbo',
        specs: ['GT-Line Mid','GT-Line Top' ]

    }
]
    return (
        <>
            <div className="flex flex-col gap-4 w-full">
                <div className='flex items-start justify-start gap-3 w-full flex-row '>
                    {carTypes?.map((item, index) => <TrimButton key={`spc_${index}`} activeTrim={activeTrim} setActiveTrim={(index) => {
                        setActiveTrim(index)
                        setActiveSpecs(0)
                    }} title={item.title} trimIndex={index} />
               )}
                 
               
        
                </div>
                <div className='flex items-start justify-center gap-3 w-full flex-row '>
                    {carTypes?.[activeTrim]?.specs?.map((item, index) => <TrimButton key={`spcss_${index}`} activeTrim={activeSpecs} setActiveTrim={setActiveSpecs} title={item} trimIndex={index} />)}
                </div>

            </div>
            <SpecsAccordion activeTrim={activeTrim} activeSpecs={activeSpecs}  />
        </>

    )
}
const TrimButton = ({ activeTrim, setActiveTrim, title, trimIndex }) => {
  
    return (
        <>
            {activeTrim != trimIndex ?
                <button dir='ltr'  onClick={() => {
                    setActiveTrim(trimIndex)
                }} className={`rounded-[3px] cursor-pointer w-[40%] lg:min-w-[70px] h-10 text-center bg-white border border-[#05141F] text-[#05141F]   font-['InterBold'] text-[15px]`}>{title??"X"}</button>
                : <button dir='ltr' onClick={() => {
                    setActiveTrim(trimIndex)
                }} className={`rounded-[3px] cursor-pointer w-[40%] lg:min-w-[70px] h-10 text-center bg-[#05141F] text-white   font-['InterBold'] text-[15px]`}>{title??"X"}</button>
            }
        
        </>
  )
}