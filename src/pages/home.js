import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box>
      <p>Hello :P </p>
      <Link to="/utforska">Utforska kategorier</Link>
    </Box>
  );
}
