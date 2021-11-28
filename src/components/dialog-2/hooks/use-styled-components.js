import { styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledDialog = styled("div")(() => ({
    // position: "fixed",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    margin: 30,
    zIndex: 1000,
    height: "calc(100% - 100px)",
    // width: "100%",
  }));

  const StyledBackdrop = styled("div")(() => ({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .5)",
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
