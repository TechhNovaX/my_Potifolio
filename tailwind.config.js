/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1e293b", // Dark Slate (Text)
                secondary: "#64748b", // Slate Grey (Subtext)
                accent: "#2563eb", // Royal Blue (Highlights/buttons)
                background: "#f8fafc", // Off-white/Porcelain (Page bg)
                surface: "#ffffff", // White (Cards/Navbar)
            },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                signature: ["Great Vibes"],
            },
        },
    },
    plugins: [],
}
