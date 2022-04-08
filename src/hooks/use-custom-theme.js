import { createTheme } from "@mui/material/styles";

export default function useCustomTheme() {
  const customTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 850,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  customTheme.typography.h1 = {
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "34px",
    letterSpacing: "-.015em",
    [customTheme.breakpoints.up("md")]: {
      fontSize: "49px",
      lineHeight: "65px",
      letterSpacing: "-.02em"
    },
  };

  return {
    customTheme,
  };
}
