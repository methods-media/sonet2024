import { useRef, useEffect, useState } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';
import { useTranslation } from 'react-i18next';

const PanoramaViewer = ({ imageUrl }) => {
    const viewerRef = useRef(null);
    const viewer = useRef(null);
    const { t, i18n } = useTranslation('common');
const [on,setOn]=useState(false)
    useEffect(() => {
        if (viewerRef.current) {
            viewer.current = new Viewer({
                container: viewerRef.current,
                panorama: imageUrl,
                navbar: false,
                defaultZoomLvl: 0,
                minFov: 50,
                maxFov: 90,
                mousewheel: false,
                mousewheelCtrlKey: true,
                mousewheelSpeed: 1,
                sphereCorrection: {
                    pan: 0,
                    tilt: 0,
                    roll: 0
                },
                defaultLat: 0,
                defaultLong: 0,
                panoData: {
                    fullWidth: 4096,
                    fullHeight: 2048,
                    croppedWidth: 4096,
                    croppedHeight: 2048,
                    croppedX: 0,
                    croppedY: 0,
                },
            });

            viewer.current.addEventListener('mousewheel', (e) => {
                if (!e.ctrlKey) {
                    e.preventDefault();
                }
            });
        }

        return () => {
            if (viewer.current) {
                viewer.current.destroy();
            }
        };
    }, [imageUrl]);

    return (
        
        <div className='relative w-screen h-screen'>
            <p className={`z-[100] text-white absolute top-[3%] w-full text-center text-[32px] [text-shadow:2px_2px_5px_rgba(0,0,0,0.45)] ${i18n?.language == 'en' ? 'font-[InterBold]' : 'font-[GSSMedium]'}`}>
              
                {t('discover2')?.split('360')?.[0]}
                <span className='font-[InterBold]'>{'360°'}</span>
                {t('discover2')?.split('360')?.[1]}
            </p>

            {!on ? <div onClick={()=>setOn(true)} className=' cursor-pointer absolute left-0 top-0 min-h-screen min-w-screen bg-black/30 gap-6 flex flex-col items-center justify-center z-[100]'
            >
                <img src={'/assets/icons8-360-degrees-96.png'} width={120} height={120} />
                <p className='text-white  w-full text-center text-[24px]'>

                    {t('click')}
                </p>
            </div>:null}
            <div ref={viewerRef}
                style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: '9/3',
                    maxWidth: '100vw',
                    maxHeight: '100vh',
                    backgroundColor: '#fff',
                    position: 'relative',
                    overflow: 'hidden',
                    margin: '0 auto',
                    padding: 0,
                }} />;
        </div>
    )
   
};

export default PanoramaViewer;

