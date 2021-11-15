import { Block } from "@mui/icons-material";
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
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  }));
  const StyledDialogPanel = styled(Box)(({ theme }) => ({
    width: "100%",
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
