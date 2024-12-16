/** @type {import('tailwindcss').Config} */
import { colors } from "./src/constants/colors";
import { boxShadow } from "./src/constants/boxShadows";
import { fontFamily } from "./src/constants/fontFamily";
import { spacing } from "./src/constants/spacing";
import { borderRadius } from "./src/constants/borderRadius";
import { zIndex } from "./src/constants/zIndex";
import { lineHeight } from "./src/constants/lineHeights";
import { flex } from "./src/constants/flex";
import { transitionProperty } from "./src/constants/transitionProperties";

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
