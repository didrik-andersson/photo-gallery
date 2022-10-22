import { styled } from "@mui/system";

export const StyledItemImage = styled("img", {
    shouldForwardProp: (prop) => prop !== "maxHeight" && prop !== "maxWidth",
})(({ theme, maxHeight, maxWidth }) => ({
    maxHeight: maxHeight ?? "100%",
    maxWidth: maxWidth ?? "100%",
    width: "auto!important",
    display: "block!important",
    margin: "0px auto",
    boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
    border: "solid 1px rgb(0 0 0 / 3%)",
    [theme.breakpoints.up("sm")]: {
        borderBottom: "none"
    },
}));

export const StyledReferralButton = styled("button")(({ theme }) => ({
    background: "rgb(65 167 119)",
    color: "#fff",
    fontSize: 14,
    borderRadius: 25,
    padding: "6px 16px",
    border: "none",
    cursor: "pointer",
    outline: "inherit",
}));

export const ItemWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // padding: 32,
    [theme.breakpoints.up("md")]: {
        justifyContent: "center",
        flexDirection: "row",
    },
}));

export const ItemImageCarouselWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    // maxHeight: "20%",
    marginLeft: 24,
    [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        marginTop: 16,
        marginLeft: 0,
    },
}));

export const ItemImageCarouselImageWrapper = styled("div")(({ theme }) => ({
    width: 100,
    background: "#f9f9f9",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    [`&:last-child`]: {
        marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
        maxWidth: 120,
        width: "100%",
        marginRight: 8,
        marginBottom: 0,
        [`&:last-child`]: {
            marginRight: 0,
        },
    },
}));

export const ItemImageCarouselImage = styled("img")(({ theme }) => ({
    width: "100%",
    height: "auto",
    display: "block",
    boxShadow: "0 3px 5px 0 rgb(0 0 0 / 8%)",
    border: "solid 1px rgb(0 0 0 / 3%)",
    borderBottom: "none"
}));

export const ItemImageWrapper = styled("div")(({ theme }) => ({
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

export const LeftPane = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        // maxWidth: "50%",
        width: "50%",
        display: "flex",
        justifyContent: "center"
    },
}));

export const RightPane = styled("div")(({ theme }) => ({
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
        paddingLeft: 40,
        width: "50%",
    },
}));