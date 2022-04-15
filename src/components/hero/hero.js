import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ItemSearch } from "../index";
import { Gutter } from "../styled-components/content";

// Todo: Gör denna komponent återanvändbar för andra kategorier.
export default function Hero() {
  return (
    <>
      <Box
        sx={{
          height: 450,
          display: "flex",
          background: "#edecea",
          alignItems: "center",
        }}
      >
        <Gutter style={{ width: "100%" }}>
          <Typography
            variant="h1"
            color="textPrimary"
            style={{ fontSize: "48px", lineHeight: "48px", fontWeight: 700 }}
          >
            Posters
          </Typography>
          <Box sx={{ my: 3 }} />
          <Typography
            sx={{ maxWidth: 500 }}
            variant="body1"
            color="textSecondary"
          >
            Sök efter poster motiv från 24 olika hemsidor på ett ställe. Eller
            bläddra bland i våra kollage för att få inspiration! Vi länkar till
            butiken som säljer postern så du enkelt kan köpa dina favoriter.
          </Typography>
          <Box sx={{ my: 2 }} />
          <Box sx={{ maxWidth: 700 }}>
            <ItemSearch />
          </Box>
        </Gutter>
      </Box>
    </>
  );
}
