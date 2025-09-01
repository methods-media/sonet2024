'use client';;
import { useEffect, useState, useRef } from 'react';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
import { CDN_THREE_SIX, FRAME_COUNT } from '@src/constants/imageSequence';
const ThreeSixty = ({ showControl = false }) => {
  const containerRef = useRef(null);
  const [view, setView] = useState('exterior')
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoRotateRef = useRef(null);
  const framePositionRef = useRef(0);
  const { t, i18n } = useTranslation('common');
  const { locale } = useRouter();
  const [isOn, setIsOn] = useState(false)



  const preloadColorImages = async () => {
    const urls = CDN_THREE_SIX


    const imageElements = urls.map(url => {
      const img = new Image();
      img.src = url;
      img.crossOrigin = 'anonymous';
      return img;
    });

    try {
      await Promise.all(
        imageElements.map(
          img =>
            new Promise((resolve, reject) => {
              if (img.complete) {
                resolve(img.src);
              } else {
                img.onload = () => resolve(img.src);
                img.onerror = () =>
                  reject(new Error(`Failed to load ${img.src}`));
              }
            }),
        ),
      );
      setLoadedImages(prev => ({
        ...prev,
        ...urls,
      }));

      return true;
    } catch (error) {
      console.error('Error loading images:', error);
      return false;
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoaded(false);

        const initialSuccess = await preloadColorImages();
        if (initialSuccess) {
          setIsLoaded(true);


        }
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, []);



  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      clearTimeout(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  const handleMouseDown = e => {
    isDragging.current = true;
    startX.current = e.pageX;
    stopAutoRotate();
  };

  const handleMouseMove = e => {
    if (!isDragging.current) return;

    const deltaX = e.pageX - startX.current;
    const sensitivity = 2;
    let frameDelta = deltaX / sensitivity;

    framePositionRef.current -= frameDelta;
    if (framePositionRef.current < 0) framePositionRef.current += FRAME_COUNT;
    if (framePositionRef.current >= FRAME_COUNT)
      framePositionRef.current -= FRAME_COUNT;

    setCurrentFrame(Math.floor(framePositionRef.current));
    startX.current = e.pageX;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = e => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    stopAutoRotate();
  };
  const handleTouchMove = e => {
    if (!isDragging.current) return;
    e.preventDefault();

    const deltaX = e.touches[0].pageX - startX.current;
    const sensitivity = 2;
    let frameDelta = deltaX / sensitivity;

    framePositionRef.current -= frameDelta;
    if (framePositionRef.current < 0) framePositionRef.current += FRAME_COUNT;
    if (framePositionRef.current >= FRAME_COUNT)
      framePositionRef.current -= FRAME_COUNT;

    setCurrentFrame(Math.floor(framePositionRef.current));
    startX.current = e.touches[0].pageX;
  };



  const handleImageError = e => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = e.target.src;
  };

  if (!isLoaded) {
    return (
      <div
        className="vr-container"
        style={{
          aspectRatio: '16/9',
          maxWidth: '100%',
          background: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ color: 'white' }}>{t('loading')}</div>
      </div>
    );
  }
  return (
    <div
      className={`vr-showroom h-[500px] showRoom-container lg:h-screen z-[110]`}
      style={{
        aspectRatio: '16/9',
        maxWidth: '100%',
        position: 'relative',
        background: 'black',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
      }}
    >

      <div
       
        className={isOn ? `mt-0 lg:mt-12.5 absolute top-0 right-0 text-white text-sm z-50  gap-2  items-center` : `absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center `}

      >

        <p className={`z-[100] text-white absolute top-[3%] w-full text-center text-[32px] [text-shadow:2px_2px_5px_rgba(0,0,0,0.45)] ${i18n?.language=='en'?'font-[InterBold]':'font-[GSSMedium]'}`}>{ t('discover')}</p>

        {view == 'exterior' ?
          isOn ? null :
            <div
              onClick={() => {
                setIsOn(true)
              }}
              className='flex flex-row justify-center z-[100]  items-center  bg-gray-300 cursor-pointer  rounded-full w-[120px] h-[120px]'>

              <img src='/assets/viewIcon.png' width={80} height={80} />


            </div>
          : <p className={`text-white text-lg md:text-xl btn-showRoom mt-2 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>        {t('colors.onyx_black')}</p>
        }
        {showControl ? <VRControls

          onViewChange={setView}
          view={view}

        /> : null}
      </div>


      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor: isOn ? isDragging.current ? 'grabbing' : 'grab' : 'cursor-pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => {
          if (!isOn)
          {
            setIsOn(true)

          }
        }}
        onMouseDown={isOn ? handleMouseDown : undefined}
        onMouseMove={isOn ? handleMouseMove : undefined}
        onMouseUp={isOn ? handleMouseUp : undefined}
        onMouseLeave={isOn ? handleMouseUp : undefined}
        onTouchStart={isOn ? handleTouchStart : undefined}
        onTouchMove={isOn ? handleTouchMove : undefined}
        onTouchEnd={isOn ? handleMouseUp : undefined}
      >

        {view == 'exterior' ? <img
          src={loadedImages[currentFrame]}
          alt={`360° View Frame ${currentFrame + 1}`}
          onError={handleImageError}
          style={{
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        /> :
          <PanoramaViewer
            imageUrl="/assets/ktk-int360-v2.png"

          />

        }
      </div>







    </div>
  );
};

export default ThreeSixty;
