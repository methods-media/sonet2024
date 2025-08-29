import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/router';

const SwipeableCards = ({ cards, center }) => {
  const { locale } = useRouter();
  const [activeIndex, setActiveIndex] = useState(
    locale === 'ar' ? cards.length - 1 : 0,
  );

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    if (Math.abs(offset) > threshold || Math.abs(velocity) > 500) {
      if (offset > 0 || velocity > 0) {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
      } else {
        if (activeIndex < cards.length - 1) setActiveIndex(activeIndex + 1);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#05141F] flex flex-col items-center justify-center py-8 cardsFeat">
      {/* Responsive toolbar */}
      <div className="w-full px-4 md:px-8 2xl:flex 2xl:justify-center ">
        {/* Mobile Select */}
        <div className="md:hidden mb-8">
          <select
            value={activeIndex}
            onChange={e => setActiveIndex(Number(e.target.value))}
            className="w-full px-4 py-2 rounded bg-white text-black text-sm"
          >
            {cards.map((card, index) => (
              <option key={index} value={index}>
                {card?.title?.includes('18') ?
                  <>
                    {card.title?.split('18')[0]}
                    <span className='font-["InterRegular"]'>18</span>
                    {card.title?.split('18')[1]}

                  </> : card.title?.includes('BVM') ? <>
                    {card.title?.split('BVM')[0]}
                    <span className='font-["InterRegular"]'>BVM</span>
                    {card.title?.split('BVM')[1]}

                  </> :
                    card?.title?.includes('HUD') ?
                      locale == 'ar' ?
                        <>
                          {card.title?.split('HUD')[0]}
                          <span className='font-["InterRegular"]'>HUD</span>
                          {card.title?.split('HUD')[1]?.split('12')[0]}
                          <span className='font-["InterRegular"]'>12</span>
                          {card.title?.split('HUD')[1]?.split('12')[1]}
                        </> : <>
                          {card.title?.split('HUD')[0]?.split('12')[0]}
                          <span className='font-["InterRegular"]'>12</span>
                          {card.title?.split('HUD')[0]?.split('12')[1]}
                          <span className='font-["InterRegular"]'>HUD</span>
                          {card.title?.split('HUD')[1]}
                        </>

                      : card?.title?.includes('EPB') ?
                        <>
                          {card.title?.split('EPB')[0]}
                          <span className='font-["InterRegular"]'>EPB</span>
                          {card.title?.split('EPB')[1]}
                        </>

                        : card?.title?.includes('EPB') ?
                          <>
                            {card.title?.split('EPB')[0]}
                            <span className='font-["InterRegular"]'>EPB</span>
                            {card.title?.split('EPB')[1]}
                          </> :
                          card?.title?.includes('SVM') ?
                            <>
                              {card.title?.split('SVM')[0]}
                              <span className='font-["InterRegular"]'>SVM</span>
                              {card.title?.split('SVM')[1]}
                            </>
                            : card?.title?.includes('USB') ?
                              <>
                                {card.title?.split('USB')[0]}
                                <span className='font-["InterRegular"]'>USB</span>
                                {card.title?.split('USB')[1]}
                              </> : card?.title?.includes('Harman / Kardon') ?
                                <>
                                  {card.title?.split('Harman / Kardon')[0]}
                                  <span className='font-["InterRegular"]'>Harman / Kardon</span>
                                  {card.title?.split('Harman / Kardon')[1]}
                                </> : card?.title}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-8 2xl:max-w-[1400px] cards-feat-buttons">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 flex-1 h-auto rounded text-base  max-w[220px] button-feat-cards transition-all ${
                activeIndex === index
                  ? `text-black bg-white ${
                      locale == 'ar' ? 'font-[GSSBold]' : 'font-["InterBold"]'
                    }`
                  : `text-[#7A7A7A] hover:text-white ${
                      locale == 'ar' ? 'font-[GSSBold]' : 'font-["InterBold"]'
                    }`
              }`}
            >
              {card?.title?.includes('18') ?
                <>
                  {card.title?.split('18')[0]}
                  <span className='font-["InterBold"]'>18</span>
                  {card.title?.split('18')[1]}

                </> : card.title?.includes('BVM') ? <>
                  {card.title?.split('BVM')[0]}
                  <span className='font-["InterBold"]'>BVM</span>
                  {card.title?.split('BVM')[1]}

                </> :
                  card?.title?.includes('HUD') ?
                    locale == 'ar' ?
                      <>
                        {card.title?.split('HUD')[0]}
                        <span className='font-["InterBold"]'>HUD</span>
                        {card.title?.split('HUD')[1]?.split('12')[0]}
                        <span className='font-["InterBold"]'>12</span>
                        {card.title?.split('HUD')[1]?.split('12')[1]}
                      </> : <>
                        {card.title?.split('HUD')[0]?.split('12')[0]}
                        <span className='font-["InterBold"]'>12</span>
                        {card.title?.split('HUD')[0]?.split('12')[1]}
                        <span className='font-["InterBold"]'>HUD</span>
                        {card.title?.split('HUD')[1]}
                      </>

                    : card?.title?.includes('EPB') ?
                      <>
                        {card.title?.split('EPB')[0]}
                        <span className='font-["InterBold"]'>EPB</span>
                        {card.title?.split('EPB')[1]}
                      </>

                      : card?.title?.includes('EPB') ?
                        <>
                          {card.title?.split('EPB')[0]}
                          <span className='font-["InterBold"]'>EPB</span>
                          {card.title?.split('EPB')[1]}
                        </>
                        : card?.title?.includes('USB') ?
                          <>
                            {card.title?.split('USB')[0]}
                            <span className='font-["InterBold"]'>USB</span>
                            {card.title?.split('USB')[1]}
                          </> : card?.title?.includes('Harman / Kardon') ?
                            <>
                              {card.title?.split('Harman / Kardon')[0]}
                              <span className='font-["InterBold"]'>Harman / Kardon</span>
                              {card.title?.split('Harman / Kardon')[1]}
                            </> : card?.title}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Container */}
      <div className="relative w-screen overflow-hidden">
        <div className="relative flex items-center justify-center min-h-[70vh] w-full cardsFeat">
          <AnimatePresence mode="popLayout">
            {cards.map((card, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === activeIndex - 1;
              const isNext = index === activeIndex + 1;

              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={index}
                  className={`absolute rounded-2xl overflow-hidden shadow-lg cursor-pointer
                    ${
                      isActive
                        ? 'w-[85vw] md:w-[60vw] h-[60vh] md:h-[55vh] lg:h-[50vh] xl:h-[70vh] z-30 cardsFeat2'
                    : 'w-[30vw] h-[50vh] md:h-[55vh] lg:h-[50vh] xl:h-[60vh] z-20 hidden md:block cardsFeat2InActive'
                    }`}
                  initial={{
                    x: isNext ? '100vw' : isPrev ? '-100vw' : 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: isNext ? '35vw' : isPrev ? '-35vw' : 0,
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.85,
                  }}
                  exit={{
                    x: isNext ? '100vw' : '-100vw',
                    opacity: 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (isPrev && activeIndex > 0) {
                      setActiveIndex(activeIndex - 1);
                    } else if (isNext && activeIndex < cards.length - 1) {
                      setActiveIndex(activeIndex + 1);
                    }
                  }}
                >
                  <div className="relative w-full h-full bg-white">
                    <div className="w-full h-[70%] sm:h-[60%] lg:h-[70%] xl:h-[75%] overflow-hidden cardsFeat2Img">
                      <img
                        src={card.image}
                        alt={card.title}
                        className={`w-full h-full object-cover ${
                          center && index === 0 ? 'object-top' : 'object-center'
                        }`}
                      />
                    </div>
                    <div className="p-4 md:p-6 flex flex-col items-center gap-0  xl:gap-4 justify-start h-[30%] sm:h-[40%] lg:h-[30%]">
                      <h2
                        dir={locale == 'ar' ? 'rtl' : 'ltr'}
                        className={`text-black sm:text-lg md:text-lg md:leading-normal lg:text-xl  xl:text-2xl ${
                          locale == 'ar'
                            ? 'font-["GSSMedium"]'
                            : 'font-["InterRegular"]'
                        } mb-2 w-full text-center cardsFeat2Title`}
                      >
                        {card?.title?.includes('18') ?
                          <>
                            {card.title?.split('18')[0]}
                            <span className='font-["InterRegular"]'>18</span>
                            {card.title?.split('18')[1]}

                          </> : card.title?.includes('BVM') ? <>
                            {card.title?.split('BVM')[0]}
                            <span className='font-["InterRegular"]'>BVM</span>
                            {card.title?.split('BVM')[1]}

                          </> :
                            card?.title?.includes('HUD') ?
                              locale == 'ar' ?
                                <>
                                  {card.title?.split('HUD')[0]}
                                  <span className='font-["InterRegular"]'>HUD</span>
                                  {card.title?.split('HUD')[1]?.split('12')[0]}
                                  <span className='font-["InterRegular"]'>12</span>
                                  {card.title?.split('HUD')[1]?.split('12')[1]}
                                </> : <>
                                  {card.title?.split('HUD')[0]?.split('12')[0]}
                                  <span className='font-["InterRegular"]'>12</span>
                                  {card.title?.split('HUD')[0]?.split('12')[1]}
                                  <span className='font-["InterRegular"]'>HUD</span>
                                  {card.title?.split('HUD')[1]}
                                </>

                              : card?.title?.includes('EPB') ?
                                <>
                                  {card.title?.split('EPB')[0]}
                                  <span className='font-["InterRegular"]'>EPB</span>
                                  {card.title?.split('EPB')[1]}
                                </>

                                : card?.title?.includes('EPB') ?
                                  <>
                                    {card.title?.split('EPB')[0]}
                                    <span className='font-["InterRegular"]'>EPB</span>
                                    {card.title?.split('EPB')[1]}
                                  </> :
                                  card?.title?.includes('SVM') ?
                                    <>
                                      {card.title?.split('SVM')[0]}
                                      <span className='font-["InterRegular"]'>SVM</span>
                                      {card.title?.split('SVM')[1]}
                                    </>
                                    : card?.title?.includes('USB') ?
                                      <>
                                        {card.title?.split('USB')[0]}
                                        <span className='font-["InterRegular"]'>USB</span>
                                        {card.title?.split('USB')[1]}
                                      </> : card?.title?.includes('Harman / Kardon') ?
                                        <>
                                          {card.title?.split('Harman / Kardon')[0]}
                                          <span className='font-["InterRegular"]'>Harman / Kardon</span>
                                          {card.title?.split('Harman / Kardon')[1]}
                                        </> : card?.title}
                      </h2>
                      <p
                        // className="text-gray-600 text-sm md:text-base line-clamp-2"
                        className={`text-xs ${
                          !activeIndex ? 'max-h-[150px]' : ''
                        } sm:text-sm md:text-sm md:leading-normal lg:text-base xl:text-lg text-[#7A7A7A] ${
                          locale == 'ar'
                            ? 'font-["GSSMedium"]'
                            : 'font-["InterRegular"]'
                        } w-full text-center cardsFeat2Desc`}
                      >
                        {card?.description?.includes('18') ? <>
                          {card.description?.split('18')[0]}
                          <span className='font-["InterRegular"]'>18</span>
                          {card.description?.split('18')[1]}

                        </> : card.description?.includes('LED') ?
                          <>
                            {card.description?.split('LED')[0]}
                            <span className='font-["InterRegular"]'>LED</span>
                            {card.description?.split('LED')[1]}
                          </>
                          :
                          card.description?.includes('K4') ?
                            <>
                              {card.description?.split('K4')[0]}
                              <span className='font-["InterRegular"]'>K4</span>
                              {card.description?.split('K4')[1]}
                            </>
                            : card.description?.includes('USB') ?
                              <>
                                {card.description?.split('USB')[0]}
                                <span className='font-["InterRegular"]'>USB</span>
                                {card.description?.split('USB')[1]}
                              </>
                              : card.description?.includes('4') ?
                                <>
                                  {card.description?.split('4')[0]}
                                  <span className='font-["InterRegular"]'>4</span>
                                  {card.description?.split('4')[1]?.split('360')[0]}
                                  <span className='font-["InterRegular"]'>360</span>
                                  {card.description?.split('4')[1]?.split('360')[1]}
                                </>
                                : card?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-8 bullets">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
              activeIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SwipeableCards;
