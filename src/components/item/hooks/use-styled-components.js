import { Box, styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img")(({ theme }) => ({
    maxHeight: "calc(100vh - 140px)",
    maxWidth: "100%",
    height: "auto",
    width: "auto",
    verticalAlign: "middle",
    display: "block",
    margin: 0,
    userSelect: "none",
    opacity: 1,
    transition: "opacity 0.3s",
  }));

  const StyledReferralButton = styled("button")(({ theme }) => ({
    background: "rgb(65 167 119)",
    color: "#fff",
    fontSize: 14,
    borderRadius: 8,
    padding: "3px 15px",
    border: "none",
    cursor: "pointer",
    outline: "inherit",
  }));
  return {
    StyledItemImage,
    StyledReferralButton,
  };
}
