const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: "#111119",
                primary: "#00ff94",
                main: "#ffffff",
                mainDark: "#606061",
            },
            fontFamily: {
                Hack: ["Hack", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("tailwindcss-magic")],
};
