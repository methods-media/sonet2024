import { useRef, useEffect } from 'react';
import { Viewer } from '@photo-sphere-viewer/core';
import '@photo-sphere-viewer/core/index.css';

const PanoramaViewer = ({ imageUrl }) => {
    const viewerRef = useRef(null);
    const viewer = useRef(null);

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

    return <div ref={viewerRef}
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
};

export default PanoramaViewer;

