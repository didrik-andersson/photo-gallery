import { styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledItemImage = styled("img", {
    shouldForwardProp: (prop) => prop !== "maxHeight" && prop !== "maxWidth",
  })(({ theme, maxHeight, maxWidth }) => ({
    maxHeight: maxHeight ?? "100%",
    maxWidth: maxWidth ?? "100%",
    width: "auto!important",
    display: "block!important",
    margin: "0px auto",
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
    display: "flex",
    flexDirection: "column",
    // maxHeight: "20%",
    marginLeft: 24,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 0,
    },
  }));

  const ItemImageCarouselImageWrapper = styled("div")(({ theme }) => ({
    width: 100,
    background: "#f2f2f2",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    [`&:last-child`]: {
      marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
      width: 120,
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

  const ItemImageWrapper = styled("div")(({ theme }) => ({
    marginBottom: 18,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      marginBottom: 0,
      maxWidth: 504,
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
      maxHeight: 800,
    },
  }));

  const LeftPane = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
    },
  }));

  const RightPane = styled("div")(({ theme }) => ({
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      paddingLeft: 40,
      width: "50%",
    },
  }));
  return {
    StyledItemImage,
    StyledReferralButton,
    ItemWrapper,
    ItemImageWrapper,
    ItemImageCarouselWrapper,
    ItemImageCarouselImageWrapper,
    ItemImageCarouselImage,
    LeftPane,
    RightPane,
  };
}
