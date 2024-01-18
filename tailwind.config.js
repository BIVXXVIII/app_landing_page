/** @type {import('tailwindcss').Config} */
// const deafaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            blue: "#5956E9",
            black: "#232233",
            gray: "#6C6C72",
            purple: "#7572FF",
            white: "#ffffff",
            transparent: "transparent",
        },
        fontFamily: {
            josefin: ['"Josefin Sans"'],
        },
        fontSize: {
            // 12.8 px
            sm: "0.8rem",
            // 16 px
            base: "1rem",
            // 20 px
            md: "1.25rem",
            // 25 px
            lg: "1.563rem",
            //31 px
            xl: "1.953rem",
            // 39 px
            "2xl": "2.441rem",
            // 48 px
            "3xl": "3.052rem",
            // 60 px
            "4xl": "3.81rem",
        },
        extend: {
            backgroundImage: {
                "rectangle-patern": "assets",
            },
        },
    },
    plugins: [],
};
