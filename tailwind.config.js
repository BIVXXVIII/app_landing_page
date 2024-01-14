/** @type {import('tailwindcss').Config} */
// const deafaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            blue: "#5956E9",
            black: "#232233",
            gray: "#6C6C72",
            white: "#ffffff",
        },
        fontFamily: {
            jos: ['"Josefin Sans"'],
        },
        fontSize: {
            sm: "0.8rem",
            base: "1rem",
            md: "1.25rem",
            xl: "1.563rem",
            "2xl": "1.953rem",
            "3xl": "2.441rem",
            "4xl": "3.052rem",
            "5xl": "3.81rem",
        },
    },
    plugins: [],
};
