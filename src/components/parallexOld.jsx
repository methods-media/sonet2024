import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

gsap.registerPlugin(ScrollTrigger);

const ParallexOLD = ({
    image,
    images = [], // Array of images to cycle through
    id
}) => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const { t } = useTranslation('common');
    const { locale } = useRouter();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const textElement = textRef.current;

        // Use provided images array or fallback to single image
        const imageArray = images.length > 0 ? images : [image];
        const maxImages = Math.min(imageArray.length, 3); // Limit to 3 images

        let ctx = gsap.context(() => {
            let pinRemoved = false;
            let lastImageIndex = 0;
            let lastFlipState = false;
            let isProcessing = false;
            let lastScrollTop = 0;

            // Create timeline for the animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: `+=${(maxImages - 1) * 100}vh`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        if (isProcessing || pinRemoved) return;

                        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const scrollDelta = currentScrollTop - lastScrollTop;
                        const sectionHeight = window.innerHeight;

                        // Only process if scroll delta is significant (more than 50% of viewport height)
                        if (Math.abs(scrollDelta) > sectionHeight * 0.5) {
                            isProcessing = true;

                            const scrollDirection = scrollDelta > 0 ? 'down' : 'up';
                            let newIndex = lastImageIndex;

                            if (scrollDirection === 'down') {
                                // Scrolling down - increment index
                                newIndex = Math.min(lastImageIndex + 1, 2);
                                console.log("NEW IDNDd",newIndex)
                                // If we're at max index, remove pin
                                if (newIndex === 2 && !pinRemoved) {
                                    pinRemoved = true;
                                    self.disable();
                                    gsap.set(section, { clearProps: "all" });
                                }
                            } else {
                                // Scrolling up - decrement index
                                if (lastImageIndex > 0) {
                                    newIndex = Math.max(lastImageIndex - 1, 0);
                                } else {
                                    // At index 0 and scrolling up - allow scrolling over
                                    if (!pinRemoved) {
                                        pinRemoved = true;
                                        self.disable();
                                        gsap.set(section, { clearProps: "all" });
                                    }
                                }
                            }

                            // Update index if it changed
                            if (newIndex !== lastImageIndex) {
                                lastImageIndex = newIndex;
                                setCurrentImageIndex(newIndex);

                                // Text flip animation - flip every time we change images
                                const shouldFlip = newIndex % 2 === 1;
                                if (shouldFlip !== lastFlipState) {
                                    lastFlipState = shouldFlip;
                                    setIsFlipped(shouldFlip);
                                }

                                // Force scroll to 100vh increment using native scroll
                                const targetScrollTop = newIndex * sectionHeight;
                                window.scrollTo({
                                    top: targetScrollTop,
                                    behavior: 'smooth'
                                });
                            }

                            lastScrollTop = currentScrollTop;

                            // Reset processing flag after a delay
                            setTimeout(() => {
                                isProcessing = false;
                            }, 500);
                        } else {
                            lastScrollTop = currentScrollTop;
                        }
                    },
                },
            });

        }, section);

        return () => {
            ctx.revert();
        };
    }, [images, image]);

    // Get current image to display
    const imageArray = images.length > 0 ? images : [image];
    const currentImage = imageArray[currentImageIndex];
    console.log("currentImageIndex", currentImageIndex)
    console.log("currentImage", currentImage)
    return (
        <div
            id={id}
            ref={sectionRef}
            className="relative w-screen overflow-hidden"
            style={{
                height: '100vh',
                backgroundImage: `url(${imageArray[currentImageIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="absolute inset-0 bg-black/50 flex items-start justify-center pt-20">
                <motion.div
                    ref={textRef}
                    className="text-white text-center px-4"
                    style={{
                        transformStyle: 'preserve-3d',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <h2
                        className={`text-[35px] md:text-[62px] leading-[53px] md:leading-[72px] w-full ${locale == 'ar' ? "font-['GSSBold']" : "font-['InterBold']"}`}

                        style={{
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    >HELLO</h2>
                </motion.div>
            </div>
        </div>
    );
};

export default ParallexOLD;