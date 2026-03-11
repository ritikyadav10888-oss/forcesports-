/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                force: {
                    primary: "#00FFCC",
                    dark: "#0F172A",
                    accent: "#FF6B00",
                },
                wears: {
                    primary: "#1A1A1A",
                    gold: "#D4AF37",
                    ivory: "#F5F5F5",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-slow': 'marquee 50s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
}
