import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function Discover() {
  return (
    <Box>
        <Typography variant="h1">Utforska</Typography>
        <Box>
        <Link to="/utforska/posters">Posters</Link>
        </Box>
    </Box>
  );
}
