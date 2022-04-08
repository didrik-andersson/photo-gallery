import { Box, IconButton, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ItemSearch } from "../index";
import { Link as RouterLink } from "react-router-dom";
import { Gutter } from "../styled-components/content";

export default function Header() {
  return (
    <>
      <Box
        sx={{
          height: 70,
          width: "100%",
          background: "#232a34",
        }}
      >
        <Gutter style={{ height: "100%" }}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <Box sx={{ mr: 2, mt: 0.8 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
              >
                <path
                  d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                  fill="#05A081"
                ></path>
                <path
                  d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                  fill="#fff"
                ></path>
              </svg>
            </Box>
            <Box sx={{ maxWidth: 500, width: "100%"}}>
              <ItemSearch />
            </Box>
          </Box>
            <IconButton
              size="large"
              aria-label="menu"
              sx={{ color: "white", ml: 0.5, display: { md: "none"} }}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Link
                component={RouterLink}
                to="/gallery"
                underline="none"
                color="white"
                variant="subtitle1"
                sx={{ ml: 2 }}
              >
                Hem
              </Link>
              <Link
                component={RouterLink}
                to="/inner"
                underline="none"
                color="white"
                variant="subtitle1"
                sx={{ ml: 2 }}
              >
                Utforska
              </Link>{" "}
              <Link
                component={RouterLink}
                to="/inner"
                underline="none"
                color="white"
                variant="subtitle1"
                sx={{ ml: 2 }}
              >
                Om oss
              </Link>
            </Box>
        </Box>
        </Gutter>
      </Box>
    </>
  );
}
