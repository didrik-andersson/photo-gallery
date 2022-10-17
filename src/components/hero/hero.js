import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ItemSearch } from "../index";
import { Gutter } from "../styled-components/content";

// Todo: Gör denna komponent återanvändbar för andra kategorier.
export default function Hero({
  searchBar,
  title,
  body,
  background,
  color,
  children,
}) {
  return (
    <>
      <Box
        sx={{
          height: 450,
          display: "flex",
          background: background ?? "#dddcda",
          alignItems: "center",
        }}
      >
        <Gutter style={{ width: "100%" }}>
          <Typography
            variant="h1"
            color={color ?? "#000"}
            sx={{
              fontSize: { xs: "40px", md: "64px" },
              lineHeight: { xs: "44px", md: "70px" },
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ my: 3 }} />
          <Typography
            sx={{
              maxWidth: 500,
              fontSize: "16px",
              lineHeight: "25px",
              fontWeight: 400,
            }}
            variant="body1"
            color={color ?? "#000"}
          >
            {body}
          </Typography>
          {searchBar && (
            <>
              <Box sx={{ my: 2 }} />
              <Box sx={{ maxWidth: 700 }}>
                <ItemSearch />
              </Box>
            </>
          )}
          {children}
        </Gutter>
      </Box>
    </>
  );
}
