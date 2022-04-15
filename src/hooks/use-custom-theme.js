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

  return {
    customTheme,
  };
}
