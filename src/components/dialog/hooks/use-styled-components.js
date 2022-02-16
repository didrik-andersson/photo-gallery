import { styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledDialog = styled("div")(() => ({
    // backgroundColor: "#FFF",
    zIndex: 1000,
    position: "relative",
  }));

  const StyledBackdrop = styled("div", {
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
  return {
    StyledDialog,
    StyledBackdrop,
  };
}
