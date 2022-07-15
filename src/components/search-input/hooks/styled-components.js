import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/system";

export const SearchWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "background",
})(({ theme, background }) => ({
  position: "relative",
  borderRadius: 50,
  background: background ? background : "white",
  width: "100%",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#515151",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "10px 10px 10px 0px",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("backgroundColor"),
    width: "100%",
  },
}));
