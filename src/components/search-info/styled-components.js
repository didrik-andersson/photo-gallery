import { styled } from "@mui/system";

export const SearchTermText = styled("h1")(({theme}) => ({
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "34px",
    letterSpacing: "-.015em",
    [theme.breakpoints.up("md")]: {
      fontSize: "49px",
      lineHeight: "65px",
      letterSpacing: "-.02em"
    },
  }));