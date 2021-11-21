import { Box, styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img")(({ theme }) => ({
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  }));
  return {
    StyledItemImage,
  };
}
