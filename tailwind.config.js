/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui" // require এর বদলে import ব্যবহার করা ভালো

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // আপনার কাস্টম ভায়োলেট কালার
        bannerBtn: "#E7FE29", // আপনার প্রজেক্টের সেই হলুদ কালারটি এখানে সেট করে রাখতে পারেন
      }
    },
  },
  plugins: [daisyui],
}