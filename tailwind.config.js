/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html"],
   theme: {
      container: {
         center: true,
         padding: "20px",
      },
      extend: {
         fontFamily: {
            poppins: "Poppins",
            jakarta: "Plus Jakarta Sans",
         },
         colors: {
            primary: "#0ea5e9",
            secondary: "#64748b",
            dark: "#0f172a",
            semiDark: "#1e293b",
         },
         screens: {
            "2xl": "1360px",
         },
      },
   },
   plugins: [],
};
