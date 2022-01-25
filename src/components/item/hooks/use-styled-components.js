import { Box, styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img")(({ theme }) => ({
    maxHeight: "calc(80vh - 32px)",
    maxWidth: "100%",
    width: "auto",
    display: "block",
    margin: "0px auto",
    // [theme.breakpoints.up("md")]: {
    //   maxHeight: "100%",
    // },
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

  const ItemImageCarouselWrapper = styled("div")(({ theme }) => ({
    display: "none",
    maxHeight: "calc(20vh - 40px)",
    flexDirection: "column",
    marginLeft: 24,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 0,
    },
  }));

  const ItemImageCarouselImageWrapper = styled("div")(({ theme }) => ({
    width: 100,
    marginBottom: 8,
    [`&:last-child`]: {
      marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
      marginRight: 8,
      marginBottom: 0,
      [`&:last-child`]: {
        marginRight: 0,
      },
    },
  }));

  const ItemImageCarouselImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "auto",
    display: "block",
  }));

  const LeftPane = styled("div")(({ theme }) => ({
    display: "flex",
    marginBottom: 18,
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      maxWidth: "50%",
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
    },
  }));

  const RightPane = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingLeft: 40,
      width: "50%",
    },
  }));
  return {
    StyledItemImage,
    StyledReferralButton,
    ItemWrapper,
    ItemImageCarouselWrapper,
    ItemImageCarouselImageWrapper,
    ItemImageCarouselImage,
    LeftPane,
    RightPane,
  };
}
