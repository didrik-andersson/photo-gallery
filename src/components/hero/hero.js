import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ItemSearch } from "../index";
import { Gutter } from "../styled-components/content";

export default function Hero() {
  return (
    <>
      <Box sx={{ height: 450, background: "#f4ccdb" }}>
        <Gutter>
        <Typography variant="h1">Posters</Typography>
        <Typography>
          Sök efter poster motiv från 24 olika hemsidor på ett ställe. Eller
          bläddra bland i våra kollage för att få inspiration! Vi länkar till
          butiken som säljer postern så du enkelt kan köpa dina favoriter.
        </Typography>
        <ItemSearch />
        </Gutter>
      </Box>
    </>
  );
}
