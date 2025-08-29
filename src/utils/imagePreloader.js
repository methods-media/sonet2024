import { IMAGE_URLS } from '../constants/imageSequence';

export const preloadImages = async () => {
    const imagePromises = IMAGE_URLS.map((url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
                reject(new Error(`Failed to load image: ${url}`));
            };
        });
    });

    try {
        await Promise.all(imagePromises);
        return true;
    } catch (error) {
        console.error('Failed to preload images:', error);
        return false;
    }
}; 