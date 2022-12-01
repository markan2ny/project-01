/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {},
        fontFamily: {
            squada: ["Squada One", "cursive"],
            montserrat: ["Montserrat", "sans - serif"],
        },
    },
    plugins: [],
};
