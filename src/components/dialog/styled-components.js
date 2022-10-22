import { styled } from "@mui/system";

export const StyledDialog = styled("div")(() => ({
  zIndex: 1000,
  position: "relative",
}));

export const StyledBackdrop = styled("div", {
  shouldForwardProp: (prop) => prop !== "opacity",
})(({ theme, opacity }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: `rgba(0, 0, 0, ${opacity ?? 0.5})`,
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
