'use client';;
import { useEffect, useState, useRef } from 'react';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
import { CDN_BEIGE_FENDER, CDN_BEIGE_STATIC, CDN_BLACK, CDN_BLUE, CDN_GREEN, CDN_INTERSTELLAR, CDN_RED, CDN_SNOW, CDN_STEEL_GRAY, CDN_TAN_BEIGE, CDN_WHITE, CDN_WHITE_FENDER, FRAME_COUNT } from '@src/constants/imageSequence';
const VRShowroom = ({ showControl=false }) => {
  const containerRef = useRef(null);
  const [view, setView] = useState('exterior')

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const autoRotateRef = useRef(null);
  const lastTimeRef = useRef(0);
  const [currentColor, setCurrentColor] = useState('beige');
  const [isOn, setIsOn] = useState(showControl ?showControl:false)
  const framePositionRef = useRef(0);
  const [colorTextKey, setColorTextKey] = useState(0);
  const { t ,i18n} = useTranslation('common');
  const { locale } = useRouter();

  const onChange = () => {
    setIsOn((prev) => !prev)
    setCurrentFrame(0)
  }
  const COLORS = [
    { id: 'beige', name: t('colors.beige'), hex: '#939393', chip: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/08342870-b29c-4b1c-8e32-796b0139d200/public" },
    { id: 'tan', name: t('colors.beigeFender'), hex: '#000000', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d53c6dbf-f7c7-490f-c1d4-d60f3eb44900/public" },
    { id: 'white', name: t('colors.clear_white'), hex: '#FFFFFF', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/4952bc85-a2df-46ab-081d-d25f6177ce00/public"},
    { id: 'whiteFender', name: t('colors.clear_white_fender'), hex: '#909598', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/4a912299-4456-49f6-05a4-321c33d18e00/public" },
    { id: 'green', name: t('colors.green'), hex: "#565656", chip: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/00e9b9b6-6c5e-446f-6b7a-d9bc41e71a00/public" },
    { id: 'blue', name: t('colors.wave_blue'), hex: '#344f7e', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/a8f7b28b-ff09-42b2-b0ab-3eccbed81500/public" },
    { id: 'red', name: t('colors.fiery_red'), hex: '#ae2736', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/15311daf-6c93-409c-f457-e8c1867d7600/public" },
    { id: 'gray', name: t('colors.gray'), hex: "#565656", chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2ec05ee8-5a4d-4bcd-0aa7-1d0308c8e300/public" },
    { id: 'snow', name: t('colors.snow_white_pearl'), hex: '#f6f6f6', chip:"https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/ad847c7a-3269-443f-42f4-db56d986c600/public" },
    { id: 'steel', name: t('colors.steel_gray'), hex: "#565656", chip: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/34c49397-583e-4209-7ef7-06d6e17d4b00/public" },
    { id: 'black', name: t('colors.black'), hex: "#565656", chip: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/b969f132-bf2b-4e32-1373-f54363d4ed00/public" },
  ];

  const preloadColorImages = async colorId => {
    const urls = colorId === 'snow' ?
      CDN_SNOW : colorId === 'white' ?
        CDN_WHITE : colorId === 'whiteFender' ?
          CDN_WHITE_FENDER : colorId === 'tan' ?
            CDN_TAN_BEIGE : colorId === 'beige' ?
              CDN_BEIGE_STATIC : colorId === 'blue' ?
                CDN_BLUE : colorId === 'red' ?
                  CDN_RED : colorId === 'steel' ?
                    CDN_STEEL_GRAY : colorId === 'gray' ? CDN_INTERSTELLAR : colorId =='green'?CDN_GREEN: CDN_BLACK;

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
        [colorId]: urls,
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

        const initialSuccess = await preloadColorImages('white');
        if (initialSuccess) {
          setIsLoaded(true);

          COLORS.forEach(color => {
            if (color.id !== 'white') {
              preloadColorImages(color.id).catch(console.error);
            }
          });
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

  const handleColorChange = async colorId => {
    setCurrentFrame(0)
    setIsOn(false)
    if (!loadedImages[colorId]) {
      stopAutoRotate();
      await preloadColorImages(colorId);
    }

    const currentPosition = framePositionRef.current;
    setCurrentColor(colorId);
    setColorTextKey(prev => prev + 1);
    framePositionRef.current = currentPosition;
  };

  const handleImageError = e => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = e.target.src;
  };

  if (!isLoaded || !loadedImages[currentColor]) {
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
      <p id='vrShowroomText' className={`text-white text-lg  md:text-[28px] z-[50] drop-shadow-2xl [text-shadow:_2px_2px_2px_rgba(0,0,0,0.4)] !absolute start-0 text-center lg:text-start lg:start-10 !top-22  w-full leading-1   ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>
        {i18n?.language == 'ar' ? showControl ? `استكشف تفاصيل تاسمان من الداخل والخارج` : `كيا تاسمان تلبي جميع الأذواق` : showControl ?`Discover Kia Tasman's Exterior & Interior in 360°`: 'The Tasman Meets All Tastes'}
      </p>
      <div
          className='mt-0 lg:mt-12.5 absolute bottom-3 lg:bottom-12.5 w-full text-white text-sm z-50 flex flex-col justify-end ps-0 lg:ps-[70px] gap-2 lg:gap-4 items-center'
        
      >
      

       
        {view == 'exterior' ?
          <div className='flex items-center flex-row-reverse gap-2'>

            {showControl ? null : <div className='flex flex-col items-center gap-2 lg:gap-4'>
              <p
                key={colorTextKey}
                className={`text-white text-base lg:text-2xl animate-fadeInUp ${i18n?.language == 'ar' ? 'font-[GSSMedium]' : 'font-[InterBold]'}`}
              >
                {COLORS?.filter?.((item) => item?.id == currentColor)?.[0]?.name}
              </p>
              <div className='flex  gap-1.5 lg:gap-3' dir='ltr' >
                {COLORS.map(color => (
                  <div
                    key={color.id}
                    className='flex items-center gap-2 '
                  >
                    <button
                      key={color.name}
                      className=' rounded-sm w-7 btn-color-showRoom h-7 md:w-[50px] md:h-[50px] hover:scale-110 cursor-pointer '
                      onClick={() => handleColorChange(color.id)}
                      style={{
                        background: `url(${color.chip}) no-repeat center center`,

                        backgroundSize: 'cover',
                      }}


                    />


                  </div>
                ))}
              </div>
            </div>}
         
          </div> : <p className={`text-white text-lg md:text-xl btn-showRoom mt-2 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>        {t('colors.onyx_black')}</p>
        }
        {showControl ? <VRControls

          onViewChange={setView}
          view={view}

        /> :null}
      </div>
      {/* {(currentColor == 'beige' && view == 'exterior' && showControl) ?
        <div className='absolute left-10 group bottom-[112px] cursor-pointer z-[200]' onClick={() => {
        setIsOn(true)
        }}>
          <button
            className={` px-6 py-0 cursor-pointer h-[45px] gap-3   text-[#05141F] bg-white hover:bg-[#05141F] hover:text-white flex items-center justify-center rounded-lg shadow-[5px] font-semibold    transition-all duration-1000 ease-out`}
            style={{ zIndex: 1000 }}
          >
            <img src='/assets/360Black.png' className='group-hover:hidden' width={25} height={25} />
            <img src='/assets/360White.png' className='hidden group-hover:block' width={25} height={25} />
            <p>{i18n?.language == 'ar' ? 'عرض 360 درجة':'360 view'}</p>
          </button>
      </div>:null} */}
     
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          cursor:isOn? isDragging.current ? 'grabbing' : 'grab':'',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onMouseDown={isOn?handleMouseDown:null}
        onMouseMove={isOn?handleMouseMove:null}
        onMouseUp={isOn?handleMouseUp:null}
        onMouseLeave={isOn?handleMouseUp:null}
        onTouchStart={isOn?handleTouchStart:null}
        onTouchMove={isOn?handleTouchMove:null}
        onTouchEnd={isOn?handleMouseUp:null}
      >
        
        {view == 'exterior' ? <img
          src={isOn ? CDN_BEIGE_FENDER?.[currentFrame] :loadedImages[currentColor][currentFrame]}
          alt={`360° View Frame ${currentFrame + 1}`}
          onError={handleImageError}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'cover',
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

export default VRShowroom;
