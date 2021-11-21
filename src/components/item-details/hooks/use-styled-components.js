import { Box, styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img")(({ theme }) => ({
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  }));
  const StyledDialogContent = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      maxHeight: "85vh",
    },
  }));
  const StyledDialogPanel = styled(Box)(({ theme }) => ({
    width: "100%",
    maxHeight: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  }));
  return {
    StyledItemImage,
    StyledDialogContent,
    StyledDialogPanel,
  };
}
