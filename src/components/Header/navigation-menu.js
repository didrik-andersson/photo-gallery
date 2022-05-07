import {
  List,
  ListItem,
  Link,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Panel } from "../index";
import { Box } from "@mui/system";

export default function NavigationMenu({ open, toggleOpen }) {
  const navigationTree = [
    { label: "Hem", link: "/" },
    { label: "Utforska", link: "/utforska" },
  ];

  return (
    <>
      <Panel open={open} toggleOpen={toggleOpen} anchor="right">
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <Typography variant="h5" sx={{ ml: 1 }}>
              Designder
            </Typography>
          </Box>
          <IconButton
            color="inherit"
            aria-label="stäng sorteringslista"
            onClick={toggleOpen}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <List>
          {navigationTree.map((navigationNode) => (
            <ListItem key={navigationNode.label}>
              <Link
                component={RouterLink}
                to={navigationNode.link}
                underline="none"
                color="inherit"
                variant="h6"
                onClick={toggleOpen}
              >
                {navigationNode.label}
              </Link>
            </ListItem>
          ))}
        </List>
      </Panel>
    </>
  );
}
