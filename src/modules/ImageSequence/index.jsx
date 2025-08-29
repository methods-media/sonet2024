'use client';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const ScrollSequence = ({ id, imagesUrl, totalFrames, startTextFrame2, startTextFrame = 10, endTextFrame, text, text2, description, description2, endTextFrame2 }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedImagesCount = useRef(0);
  const scrollTriggerRef = useRef(null);
  const timelineRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const { locale } = useRouter();
  useLayoutEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    let ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        defaults: { duration: 1 },
        paused: true,
      });

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: '+=200%',
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        fastScrollEnd: true,
        animation: timelineRef.current,
        onUpdate: self => {
          if (!imagesRef.current.length) return;

          const frameIndex = Math.floor(
            gsap.utils.clamp(
              0,
              imagesRef.current.length - 1,
              self.progress * (imagesRef.current.length - 1),
            ),
          );
          setShowText(frameIndex >= startTextFrame && frameIndex <= endTextFrame);
          setShowText2(frameIndex >= startTextFrame2 && frameIndex <= endTextFrame2);
          if (imagesRef.current[frameIndex]) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(imagesRef.current[frameIndex], 0, 0);
          }
        },
        onEnter: () => {
          setIsVisible(true);
          gsap.set(container, { zIndex: 10, immediateRender: false });
        },
        onLeave: () => {
          const lastImage = imagesRef.current[imagesRef.current.length - 1];
          if (lastImage) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(lastImage, 0, 0);
          }
          gsap.timeline().to(container, {
            zIndex: 1,
            duration: 0.1,
            onComplete: () => setIsVisible(false),
          });
        },
        onEnterBack: () => {
          setIsVisible(true);
          gsap.set(container, { zIndex: 10, immediateRender: false });
        },
        onLeaveBack: () => {
          const firstImage = imagesRef.current[0];
          if (firstImage) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(firstImage, 0, 0);
          }
          gsap.timeline().to(container, {
            zIndex: 1,
            duration: 0.1,
            onComplete: () => setIsVisible(false),
          });
        },
      });
    }, container);

    const loadImages = async () => {
      setIsLoading(true);
      imagesRef.current = [];
      loadedImagesCount.current = 0;

      const loadImage = src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            loadedImagesCount.current += 1;
            resolve(img);
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        const loadedImages = await Promise.all(
          imagesUrl.map(url => loadImage(url)),
        );
        imagesRef.current = loadedImages;

        if (loadedImages[0]) {
          canvas.width = loadedImages[0].width;
          canvas.height = loadedImages[0].height;
          context.drawImage(loadedImages[0], 0, 0);
        }

        setIsLoading(false);
      } catch (error) {
        console.error(`Error loading images for sequence ${id}:`, error);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ctx.revert();
      if (contextRef.current) {
        contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
      }
      imagesRef.current = [];
      loadedImagesCount.current = 0;
      gsap.set(container, { clearProps: 'all' });
    };
  }, [id, imagesUrl, totalFrames, startTextFrame]);
  return (
    <div
      ref={containerRef}
      className="w-screen h-screen relative"
      style={{
        position: 'relative',
        zIndex: isVisible ? 10 : 1,
        backgroundColor: '#000',
        willChange: 'transform, z-index',
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        transition: 'opacity 0.3s ease-out',
        opacity: isVisible ? 1 : 0.99,
      }}
    >
      <AnimatePresence>
        {showText && (
          <motion.div
            className='absolute bottom-[10%] w-full left-0 text-white text-2xl z-[300] flex items-center justify-center flex-col gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className='w-full px-2 md:px-0 md:w-[50%] sequenceTextID' > 
              <p id='sequenceText' className={`text-center text-lg md:text-[28px] leading-[25px] mb-1 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>{
                text?.includes('LED') ? <>
                  {text.split('LED')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>LED</span>
                  {text.split('LED')[1]}
                </> : text?.includes('29.9') ? <>
                    {text.split('29.9')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>29.9</span>
                    {text.split('29.9')[1]}
                  </> : (text?.includes('D') && locale=='ar') ? <>
                    {text.split('D')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>D</span>
                    {text.split('D')[1]}
                    </> : text?.includes('8') ? <>
                      {text.split('8')[0]}
                      <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>8</span>
                      {text.split('8')[1]}
                    </> :text
                
                }</p>
              <p id='sequenceDesc' className={`text-center text-sm md:text-base leading-[25px]   ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
                {description?.includes('LED') ?
                <>
                  {description.split('LED')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>LED</span>
                    {description.split('LED')[1]?.includes('DRLs') ?
                      <>
                    {description.split('LED')[1]?.split('DRLs')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>DRLs</span>
                        {description.split('LED')[1]?.split('DRLs')[1]?.split('K4')[0]}
                        {description.split('LED')[1]?.split('DRLs')[1]?.includes('K4') ?
                          <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                        : null}
                    {description.split('LED')[1]?.split('DRLs')[1]?.split('K4')[1]}

                  
                  </> : <>
                    {(description.split('LED')[1])?.split('K4')[0]}
                        {(description.split('LED')[1])?.includes('K4') ?
                          <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                        : null}
                    {(description.split('LED')[1])?.split('K4')[1]}
                  </>}
                 

              
                </> 
                : description?.includes('K4') ? <>
                  {(description)?.split('K4')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                  {(description)?.split('K4')[1]}
                </> :description}</p>
            </div>
          </motion.div>
        )}
        {showText2 && (
          <motion.div
            className='absolute bottom-[10%] w-full left-0 text-white text-2xl z-[300] flex items-center justify-center flex-col gap-2'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className='w-full px-2 md:px-0 md:w-[50%]  sequenceTextID'>
              <p id='sequenceText2' className={`text-center text-lg md:text-[28px] leading-[25px] mb-1 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>{
                text2?.includes('LED') ? <>
                  {text2.split('LED')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>LED</span>
                  {text2.split('LED')[1]}
                </> : text2?.includes('29.9') ? <>
                  {text2.split('29.9')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>29.9</span>
                  {text2.split('29.9')[1]}
                </> : (text2?.includes('D') && locale == 'ar') ? <>
                  {text2.split('D')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>D</span>
                  {text2.split('D')[1]}
                </> : text2?.includes('8') ? <>
                  {text2.split('8')[0]}
                  <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>8</span>
                  {text2.split('8')[1]}
                </> : text2

              }</p>
              <p id='sequenceDesc2' className={`text-center text-sm md:text-base leading-[25px]  ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
                {description2?.includes('LED') ?
                <>
                  {description2.split('LED')[0]}
                  {description2?.includes('LED')
                    ?
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>LED</span> : null}
                  {description2.split('LED')[1]?.includes('DRLs') ? <>
                    {description2.split('LED')[1]?.split('DRLs')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>DRLs</span>
                    {description2.split('LED')[1]?.split('DRLs')[1]?.split('K4')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                    {description2.split('LED')[1]?.split('DRLs')[1]?.split('K4')[1]}


                  </> : <>
                    {(description2.split('LED')[1])?.split('K4')[0]}
                      {(description2.split('LED')[1])?.includes('K4') ?
                        <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                        : null}
                      {(description2.split('LED')[1])?.split('K4')[1]}
                  </>}



                </>
                : description2?.includes('K4') ? <>
                  {(description2)?.split('K4')[0]}
                  {(description2.split('LED')[1])?.includes('K4') ?
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                    : null}  
                  {(description2)?.split('K4')[1]}
                </> : description2?.includes("K4") ?
                    <>
                    {description2?.split('K4')[0]}
                    <span style={{ fontFamily: 'InterBold', fontWeight: 700 }}>K4</span>
                    {description2?.split('K4')[1]}
                    </>
                
                : description2}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <canvas
        ref={canvasRef}
        id={id}
        className="w-full h-full object-cover"
        style={{
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default ScrollSequence;
