"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
    {
        id: 1,
        title: "Amazing Sunset",
        description: "Experience the beauty of a golden sunset over the ocean.",
        image: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/1f416b3d-92eb-4800-966d-9d66f4213b00/public",
    },
    {
        id: 2,
        title: "Mountain Adventure",
        description: "Explore the breathtaking peaks and valleys of the mountains.",
        image: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/bd4665c6-2174-49de-ef2f-205ba311d200/public",
    },
    {
        id: 3,
        title: "City Lights",
        description: "Discover the dazzling lights and energy of the city at night.",
        image: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/a8cdfd93-34ad-4732-f7bf-f7fe2f5a5000/public",
    },
    {
        id: 4,
        title: "Serene Forest",
        description: "Immerse yourself in the tranquility of a lush green forest.",
        image: "https://imagedelivery.net/2Dh6erMZ0IA4Y2r-mRikDg/947b9419-cf07-43a6-12a6-f38a623a8900/public",
    },
];

export default function VerticalCardSlider () {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % cards.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

    return (
        <div className="relative w-screen max-w-screen   h-screen flex items-center justify-center bg-gray-100 overflow-hidden">

            <div className="relative !w-[100%] h-auto min-h-[70%] md:!h-[90%]  sm:w-[40vw] sm:h-[75vh] flex flex-row justify-center">
                <button
                    onClick={prevSlide}
                    className="absolute left-5 z-30 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                    <ChevronLeft size={24} />
                </button>
                <AnimatePresence mode="popLayout">
                    {cards.map((card, i) => {
                        const offset = (i - index + cards.length) % cards.length;
                        const isActive = offset === 0;

                        return (
                            <motion.div
                                key={card.id}
                                className="absolute w-full rounded-2xl shadow-lg flex flex-col items-center justify-between text-white p-6 transition-all"
                                style={{
                                    zIndex: isActive ? 10 : 4,
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: "90%",
                                    width: isActive ? "95%" : '93%',
                                    top: isActive ? "10%" : `${(offset) * 2}%`,
                                }}
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: 50
                                }}
                                animate={{
                                    opacity: isActive ? 1 : 0.7,
                                    scale: isActive ? 1 : 0.95,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 24,
                                        duration: 0.5
                                    }
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.8,
                                    y: -50,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                            >
                                {/* Title */}
                                {isActive && (
                                    <motion.h2
                                        className="text-3xl font-bold bg-black/50 px-4 py-2 rounded-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.4
                                            }
                                        }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        {card.title}
                                    </motion.h2>
                                )}

                                {/* Description */}
                                {isActive && (
                                    <motion.p
                                        className="text-lg bg-black/50 px-4 py-2 rounded-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                delay: 0.3,
                                                duration: 0.4
                                            }
                                        }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        {card.description}
                                    </motion.p>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
                <button
                    onClick={nextSlide}
                    className="absolute right-5 z-30 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center"
                >
                    <ChevronRight size={24} />
                </button>
            </div>


        </div>
    );
}
