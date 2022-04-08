import { styled } from "@mui/system";

export const Gutter = styled("div")(({theme}) => ({
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 24,
    paddingRight: 24,
    maxWidth: 1300,
    [theme.breakpoints.up("md")]: {
        paddingLeft: 34,
        paddingRight: 34
      },
  }));