/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: '#000811',
                blue: {
                    500: '#0096FB',
                    600: '#0099FF'
                }
            },
            fontFamily: {
                figtree: ['var(--figtree)']
            },
            fontSize: {
                lg: ['16px', '26px'],
                '2xl': ['28px', '34px'],
                '3xl': ['38px', '38px'],
                '4xl': ['40px', '43px'],
                '5xl': ['48px', '43px']
            }
        }
    },
    plugins: []
}
