import React from 'react';
import Lottie from 'lottie-react';

/**
 * LottieIcon renders a Lottie JSON animation.
 * Place your JSON files under `public/lottie/` and pass `src` as a public path, e.g. "/lottie/sun.json".
 */
const LottieIcon = ({ src, loop = true, autoplay = true, className = '', width = 48, height = 48 }) => {
    // Next.js can fetch JSON from public/ via a URL. lottie-react accepts either data or path via fetch.
    // We'll use fetch to load the JSON so this component stays simple to reuse.
    const [animationData, setAnimationData] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        let aborted = false;
        async function load () {
            try {
                setError(null);
                const response = await fetch(src, { cache: 'force-cache' });
                if (!response.ok) throw new Error(`Failed to load Lottie JSON: ${response.status}`);
                const json = await response.json();
                if (!aborted) setAnimationData(json);
            } catch (e) {
                if (!aborted) setError(e);
            }
        }
        load();
        return () => {
            aborted = true;
        };
    }, [src]);

    if (error) return null;
    if (!animationData) return <div style={{ width, height }} className={className} />;

    return (
        <div style={{ width, height }} className={className}>
            <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
        </div>
    );
};

export default LottieIcon;


