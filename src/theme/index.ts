import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  xs: "400px",
  sm: "600px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  breakpoints,
  config,
});
