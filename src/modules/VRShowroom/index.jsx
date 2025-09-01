'use client';;
import { useEffect, useState, useRef } from 'react';
import VRControls from './VRControls';
import { useTranslation } from 'next-i18next';
import PanoramaViewer from '@src/components/ImageViewer360';
import { useRouter } from 'next/router';
import { CDN_BEIGE_FENDER, FRAME_COUNT } from '@src/constants/imageSequence';
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
  const [currentColor, setCurrentColor] = useState('redBlack');
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
    { id: 'redBlack', name: t('redBlack'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6b7c3968-3447-445e-e77e-28625d4b1800/semi',  },
    { id: 'red', name: t('red'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/e761a673-7623-48e1-6f40-3742e9ff1c00/semi',},
    { id: 'whiteBlack', name: t('whiteBlack'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/a89978a6-ecd9-4dbe-dd8e-c7a5905c4e00/semi', },
    { id: 'white', name: t('white'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2a918d82-a0d6-4175-799d-3dfce4273c00/semi', },
    { id: 'blue', name: t('blue'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/5a558746-8b2f-4a00-31da-3fa289d6b500/semi', },
    { id: 'silver', name: t('silver'), hex: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/0c84d20c-c5f6-4157-f39d-28735d263300/semi", },
    { id: 'olive', name: t('olive'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6d05405c-c9b1-4c89-5fd0-ae7135ca3200/semi',},
    { id: 'clearWhite', name: t('clear'), hex: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2a918d82-a0d6-4175-799d-3dfce4273c00/semi", },
    { id: 'gravityGray', name: t('gray'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/aa6cbd59-b0d1-4dac-fb9c-a18eea1d6000/semi', },
    { id: 'black', name: t('black'), hex: 'https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/3f58e7a1-25ba-4c7a-f91c-c5efda182f00/semi', },
  
  
     ];
  const CDN_IMAGES = [
    "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/a03568f0-8636-4532-9f97-6405f674af00/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/d09a29bc-7441-4b6a-39c7-cc2d236d3400/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2c602b08-6686-4090-d547-b7a1e1c43100/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/60aefd73-aa96-492e-729c-1636950e5f00/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/67c5adc0-91ed-4d15-e788-e7fc31bb7100/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/6b9043e3-62a9-43c9-656a-4829c762bf00/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/e688f8fb-dda0-43b0-e7cf-5e418e7df600/public",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/9faac0ed-432e-418d-a063-3385f3264e00/semi",
  "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/aa64315a-f3b5-42c9-0134-bb44db391d00/semi",
    "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/2f015972-b918-41bb-04fc-7f9139a87700/semi",
]
  const preloadColorImages = async colorId => {
    const urls = colorId === 'redBlack' ?
      [CDN_IMAGES[0]] : colorId === 'red' ?
        [CDN_IMAGES[1]] : colorId === 'whiteBlack' ?
          [CDN_IMAGES[2]] : colorId === 'white' ?
            [CDN_IMAGES[3]] : colorId === 'blue' ?
              [CDN_IMAGES[4]] : colorId === 'silver' ?
                [CDN_IMAGES[5]] : colorId === 'olive' ?
                  [CDN_IMAGES[6]] : colorId === 'clearWhite' ?
                    [CDN_IMAGES[7]] : colorId === 'gravityGray' ?
                      [CDN_IMAGES[8]] : colorId == 'black' ?
                        [CDN_IMAGES[9]] : '';
    

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
                    <img
                      onClick={() => handleColorChange(color.id)}

                      src={color.hex} width={50} height={50} className={`cursor-pointer  ${color.id==currentColor?'border border-white rounded-full':''}`} />

                  </div>
                ))}
              </div>
            </div>}

          </div> : <p className={`text-white text-lg md:text-xl btn-showRoom mt-2 ${locale == 'ar' ? 'font-["GSSBold"]' : 'font-["InterBold"]'}`}>        {t('colors.onyx_black')}</p>
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
          height: '100% !important',
          position: 'relative',
          overflow: 'hidden',
          cursor:isOn? isDragging.current ? 'grabbing' : 'grab':'',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight:'100vh !important'
        }}
        onMouseDown={isOn?handleMouseDown:null}
        onMouseMove={isOn?handleMouseMove:null}
        onMouseUp={isOn?handleMouseUp:null}
        onMouseLeave={isOn?handleMouseUp:null}
        onTouchStart={isOn?handleTouchStart:null}
        onTouchMove={isOn?handleTouchMove:null}
        onTouchEnd={isOn?handleMouseUp:null}
      >
        
        <img
          src={loadedImages[currentColor][currentFrame]}
          alt={`360° View Frame ${currentFrame + 1}`}
          onError={handleImageError}
          style={{
            maxWidth: '100vw',
            maxHeight: '100vh',
            objectFit: 'cover',
            minWidth: '100vw',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            pointerEvents: 'none',
            minHeight:'100vh'
          }}
          draggable={false}
        /> 
      </div>

    

     
   

    
    </div>
  );
};

export default VRShowroom;
