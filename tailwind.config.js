/** @type {import('tailwindcss').Config} */
import { colors } from "./src/constants/styles/colors";
import { boxShadow } from "./src/constants/styles/boxShadows";
import { fontFamily } from "./src/constants/styles/fontFamily";
import { spacing } from "./src/constants/styles/spacing";
import { borderRadius } from "./src/constants/styles/borderRadius";
import { zIndex } from "./src/constants/styles/zIndex";
import { lineHeight } from "./src/constants/styles/lineHeights";
import { flex } from "./src/constants/styles/flex";
import { transitionProperty } from "./src/constants/styles/transitionProperties";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      boxShadow,
      fontFamily,
      spacing,
      borderRadius,
      zIndex,
      lineHeight,
      flex,
      transitionProperty
    },
  },
  plugins: [],
};
