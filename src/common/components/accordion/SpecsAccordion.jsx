'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const SpecsAccordion = ({activeTrim,activeSpecs}) => {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const toggleAccordion = index => {
    setOpenIndex(index);
  };

  const accordionData = [
    {
      title: t('spec_ext'),
      content: {
        '00': ["exterior_features.wheels", "exterior_features.headlamps", "exterior_features.mud_guard", "exterior_features.aero_blades"],
        '01': ["exterior_features.wheels", "exterior_features.headlamps", "exterior_features.mud_guard", "exterior_features.aero_blades"],
        '10': ["exterior.steelWheels", "exterior.headlamps", "exterior.mudGuard", "exterior.aeroBlades"],
        '11': ["exterior.alloyWheels", "exterior.headlamps", "exterior.rearLight", "exterior.sunroof", "exterior.mudGuard", "exterior.aeroBlades"],
        '12': ["exterior_features.alloy_wheels", "exterior_features.headlamp", "exterior_features.rear_light", "exterior_features.sunroof", "exterior_features.mud_guard", "exterior_features.aero_blades"],
        '13': ["exterior.alloyWheels", "exterior.headlamps", "exterior.rearLight", "exterior.sunroof", "exterior.mudGuard", "exterior.aeroBlades"],
        '20': ["exterior.gtLineDesign", "exterior.alloyWheels", "exterior.headLamp", "exterior.runningLights", "exterior.rearLights", "exterior.sunroof", "exterior.mudGuard", "exterior.aeroBlades"],
        '21': ["exterior.gtLineDesign", "exterior.alloyWheels", "exterior.ledHeadLamp", "exterior.ledRunLight", "exterior.rearCombiLight", "exterior.sunroof", "exterior.mudGuard", "exterior.aeroBlades"],

        
      },
    },
    {
      title: t('spec_int'),
      content: {
        '00': ["interior_features.seats",
          "interior_features.digital_cluster",
          "interior_features.central_display",
          "interior_features.overhead_lamp",
        ],
        '01': ["interior_features.seats",
          "interior_features.digital_cluster",
          "interior_features.central_display",
          "interior_features.overhead_lamp",
          "interior_features.smart_key"],
        "10": ["interior.seats",
          "interior.digitalCluster",
          "interior.centralDisplay",
          "interior.overheadLamp",
        ],
        "11": ["interior.seats",
          "interior.display",
          "interior.steeringWheel",
          "interior.smartKey",
          "interior.overheadLamp",
        ],
        "12": ["interior_features.seats",
          "interior_features.display",
          "interior_features.steering",
          "interior_features.smart_key",
          "interior_features.overhead_lamp",
          "interior_features.mood_lamp",
        ],
        "13": ["interior.seats",
          "interior.display",
          "interior.steeringWheel",
          "interior.smartKey",
          "interior.overheadLamp",
          "interior.moodLamp",
          "interior.audio",
        ],
        "20": ["interior.seats",
          "interior.display",
          "interior.steeringWheel",
          "interior.smartKey",
          "interior.moodLamp",
         
        ],
        "21": ["interior.leatherSeats",
          "interior.digitalCluster",
          "interior.steeringWheel",
          "interior.smartKey",
          "interior.moodLamp",
          "interior.harmanKardon",
          "interior.overheadLamp",
          "interior.paddleShifters",
        ],


      },
    },
     
    {
      title: t('safetyFeatures'),
      content: {
        '00': ["safety_features.pdw", "safety_features.rvm", "safety_features.front_airbags", "safety_features.brake_system"],
        '01': ["safety_features.pdw", "safety_features.rvm", "safety_features.front_airbags", "safety_features.brake_system"],
        '10': ["safety.pdw", "safety.rvm", "safety.frontAirbags", "safety.brakeSystem"],
        '11': ["safety.pdw", "safety.rvm", "safety.airbags", "safety.brakeSystem"],
        '12': ["safety_features.pdw", "safety_features.bca", "safety_features.airbags", "safety_features.brake_systems","safety_features.rvm"],
        '13': ["safety.pdw", "safety.svm", "safety.airbags", "safety.scc", "safety.lfa", "safety.lka", "safety.bca", "safety.fca", "safety.bvm","safety.brakeSystem"],
        '20': ["safety.parkingWarning", "safety.airbags", "safety.brakingSystem", "safety.bca", "safety.rvm"],
        '21': ["safety.pdw", "safety.svm", "safety.airbags", "safety.scc", "safety.lfa", "safety.lka", "safety.bca", "safety.fca", "safety.bvm", "safety.brakeSystem"],



      },
    },
    {
      title: t('convenience'),
      content: {
        '00': [
          "convenience.ac",
          "convenience.auto_light",
          "convenience.rear_seat",
          "convenience.armrest",
          "convenience.head_rest",
        
        ],
        '01': [
          "convenience.ac",
          "convenience.auto_light",
          "convenience.rear_seat",
          "convenience.armrest",
          "convenience.head_rest",
          "convenience.steering",
          "convenience.mirrors"
        ],
        '10': ["convenience.ac", "convenience.autoLight","convenience.rear_seat","convenience.armrest"],
        '11': ["convenience.ac", "convenience.driverSeat", "convenience.mirrors", "convenience.parkingBrake",],
        '12': ["convenience.ac", "convenience.driver_seat", "convenience.mirrors", "convenience.parking_brake", "convenience.wireless_charger", "convenience.ecm"],
        '13': ["convenience.ac", "convenience.driverSeat", "convenience.mirrors", "convenience.parkingBrake", "convenience.wirelessCharger", "convenience.ecm", "convenience.tailgate"],
        '20': ["convenience.ac", "convenience.driverSeat", "convenience.mirrors", "convenience.parkingBrake", "convenience.wirelessCharger", "convenience.chromicMirror", "convenience.tailgate"],
        '21': ["convenience.ac", "convenience.driverSeat", "convenience.mirrors", "convenience.parkingBrake", "convenience.wirelessCharger", "convenience.chromicMirror", "convenience.tailgate"],



      },
    },
  ];

  return (
    <div className="w-full h-full  space-y-4 my-4">
      {accordionData.map((item, index) => (
        <div
          key={`Footer${index}`}
          className=" w-full  rounded-[4px] cursor-pointer"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className={`w-full flex justify-between items-center h-[60px] py-2 px-4 text-[sm] md:text-[17px]  ${
              openIndex === index
                ? `rounded-t-[4px] text-white bg-[#05141F] ${
                    locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"
                  } `
                : `rounded-lg text-[#A3A8AD] bg-[#05141F] ${
                    locale == 'ar'
                      ? "font-['GSSMedium'] hover:font-['GSSBold']"
                      : "font-['InterRegular']  hover:font-['InterBold']"
                  } hover:bg-[#05141F]`
            } 
                               rounded-t-[4px] cursor-pointer`}
          >
            {item.title}
            {openIndex === index ? <img src='/assets/plus.png' height={20} width={20} />
              : <img src='/assets/minus.png' height={20} width={20} />}
          </button>
          <div
            className={`overflow-hidden ${
              locale == 'ar' ? "font-['GSSMedium']" : "font-['InterRegular']"
            }  transition-all duration-300 ${
              openIndex === index ? 'max-h-[430px] overflow-y-auto p-4' : 'max-h-0 p-0'
            }`}
          >
            <ol className="space-y-2 list-disc px-4">
              {item.content?.[`${activeTrim}${activeSpecs}`]?.map((itemss) => {
                return (
                  <li key={itemss} className="text-[#05141F] text-lg">
                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('16') ?
                      <>
                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('16')[0]}
                        <span className='font-[InterRegular]'>16</span>
                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('16')[1]}
                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('16')[2] ?<span className='font-[InterRegular]'>16</span>:''}
                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('16')[2]?(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('16')[2]:''}
                      </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('17') ?
                        <>
                          {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('17')[0]}
                          <span className='font-[InterRegular]'>17</span>
                          {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('17')[1]}
                        </>
                        : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('18') ?
                          <>
                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('18')[0]}
                            <span className='font-[InterRegular]'>18</span>
                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('18')[1]}
                          </>
                          : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('LED') ?
                            <>
                              {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LED')[0]}
                              <span className='font-[InterRegular]'>LED</span>
                              {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LED')[1]}
                            </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('4') ?
                              <>
                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('4')[0]}
                                <span className='font-[InterRegular]'>4</span>
                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('4')[1]}
                              </>
                              : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('12.3') ?
                                <>
                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('12.3')[0]}
                                  <span className='font-[InterRegular]'>12.3</span>
                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('12.3')[1]}
                                </>
                              : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('12') ?
                                <>
                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('12')[0]}
                                  <span className='font-[InterRegular]'>12</span>
                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('12')[1]}
                                </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('PDW') ?
                                  <>
                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('PDW')[0]}
                                    <span className='font-[InterRegular]'>PDW</span>
                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('PDW')[1]}
                                  </> :
                                  (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('RVM') ?
                                    <>
                                      {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('RVM')[0]}
                                      <span className='font-[InterRegular]'>RVM</span>
                                      {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('RVM')[1]}
                                    </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('ABS+ ESC+ HAC+ MCB') ?
                                      <>
                                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ABS+ ESC+ HAC+ MCB')[0]}
                                        <span className='font-[InterRegular]'>ABS+ ESC+ HAC+ MCB</span>
                                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ABS+ ESC+ HAC+ MCB')[1]}
                                        </> :
                                        (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('axjx') ?
                                        <>
                                          {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('axjx')[0]}
                                          <span className='font-[InterRegular]'>60:40</span>
                                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('axjx')[1]}
                                          </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('ECM') ?
                                            <>
                                              {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ECM')[0]}
                                              <span className='font-[InterRegular]'>ECM</span>
                                              {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ECM')[1]}
                                            </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('Harman / Kardon') ?
                                              <>
                                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('Harman / Kardon')[0]}
                                                <span className='font-[InterRegular]'>Harman / Kardon</span>
                                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('Harman / Kardon')[1]}
                                              </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('SVM') ?
                                                <>
                                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('SVM')[0]}
                                                  <span className='font-[InterRegular]'>SVM</span>
                                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('SVM')[1]}
                                                </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('SCC') ?
                                                  <>
                                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('SCC')[0]}
                                                    <span className='font-[InterRegular]'>SCC</span>
                                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('SCC')[1]}
                                                  </> :
                                                  (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('LFA') ?
                                                    <>
                                                      {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LFA')[0]}
                                                      <span className='font-[InterRegular]'>LFA</span>
                                                      {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LFA')[1]}
                                                    </> :
                                                    (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('LKA') ?
                                                      <>
                                                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LKA')[0]}
                                                        <span className='font-[InterRegular]'>LKA</span>
                                                        {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('LKA')[1]}
                                                      </> :
                                                      (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('BCA') ?
                                                        <>
                                                          {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('BCA')[0]}
                                                          <span className='font-[InterRegular]'>BCA</span>
                                                          {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('BCA')[1]}
                                                        </> : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('FCA2') ?
                                                          <>
                                                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('FCA2')[0]}
                                                            <span className='font-[InterRegular]'>FCA 2</span>
                                                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('FCA2')[1]}
                                                          </>:
                                                        (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('FCA') ?
                                                          <>
                                                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('FCA')[0]}
                                                            <span className='font-[InterRegular]'>FCA 1.5</span>
                                                            {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('FCA')[1]}
                                                          </>  :
                                                            (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('BVM') ?
                                                              <>
                                                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('BVM')[0]}
                                                                <span className='font-[InterRegular]'>BVM</span>
                                                                {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('BVM')[1]}
                                                              </> :
                                                              (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('ECM') ?
                                                                <>
                                                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ECM')[0]}
                                                                  <span className='font-[InterRegular]'>ECM</span>
                                                                  {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('ECM')[1]}
                                                                </> :
                                                                (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.includes('GT-Line') ?
                                                                  <>
                                                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('GT-Line')[0]}
                                                                    <span className='font-[InterRegular]'>GT-Line</span>
                                                                    {(t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))?.split('GT-Line')[1]}
                                                                  </>
                    : (t(`specTrimsSpecs.${activeTrim}${activeSpecs}.${itemss}`))}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};
