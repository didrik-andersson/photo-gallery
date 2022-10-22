import { styled } from "@mui/system";

export const ListItemWrapper = styled("div")(({ theme }) => ({
  //   marginRight: 12,
  flexBasis: "calc(50% - 12px)",
  height: 200,

  [theme.breakpoints.up("sm")]: {
    height: 300,
  },

  [theme.breakpoints.down("md")]: {
    "&.hidden-md": {
      display: "none",
    },
  },

  [theme.breakpoints.up("md")]: {
    height: 350,
    flexBasis: "calc(33.3% - 16px)",
    // [`&:nth-child(3n)`]: {
    //   marginRight: 0,
    // },
  },

  [theme.breakpoints.up("lg")]: {
    height: 400,
  },
}));

export const ListWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
}));
