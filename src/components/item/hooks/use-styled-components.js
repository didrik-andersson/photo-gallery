import { Box, styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img")(({ theme }) => ({
    maxHeight: "80vh",
    maxWidth: "100%",
    width: "auto",
    display: "block",
    margin: "0px auto",
    [theme.breakpoints.up("md")]: {
      maxHeight: "100%",
    },
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

  const ItemWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: 32,
    [theme.breakpoints.up("md")]: {
      justifyContent: "center",
      flexDirection: "row",
    },
  }));

  const LeftPane = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
    },
  }));

  const RightPane = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  }));
  return {
    StyledItemImage,
    StyledReferralButton,
    ItemWrapper,
    LeftPane,
    RightPane,
  };
}
