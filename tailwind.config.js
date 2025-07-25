/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-cormorant)", "serif"],
            },
            colors: {
                workWhite: "#eae9ee",
                workBlue: "#8eb6dc",
            },
        },
    },
    plugins: [],
};
