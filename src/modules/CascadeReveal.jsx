// app/components/MaskWipeReveal.tsx
"use client";

import { motion } from "framer-motion";

export default function MaskWipeReveal ({
    children,
    as: Tag = "h2",
    delay = 0,
    duration = 0.8,
    className = "",
}) {
    return (
        <p className={`relative inline-block ${className}`}>
            {/* Text */}
            <motion.span
                initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: delay + 0.05, duration, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                className="relative"
            >
                {children}
            </motion.span>

            {/* Wipe (reveals from left to right) */}
            <motion.span
                aria-hidden
                initial={{ clipPath: "inset(0 0 0 0)" }}     // fully covers text
                whileInView={{ clipPath: "inset(0 100% 0 0)" }} // slide off to right
                transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
                className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/0"
            />
        </p>
    );
}
