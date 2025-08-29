/** @type {import('tailwindcss').Config} */
const rtl = require('tailwindcss-rtl');

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                // "max-taplet-rotate": { max: "1180px" },
                xs: "400px",
                sm: "640px",
                md: "820px",
                lg: "1024px",
                md: "1130px",
                mini: "1200px",
                xl: "1280px",
                "2xl": "1440px",
               
            },
        },
    },
    plugins: [
        rtl, // Add the plugin here
    ],
} 