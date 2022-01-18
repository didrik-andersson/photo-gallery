import { Box } from "@mui/system";
import { Item } from "../components/index";

export default function ItemPage() {
  return (
    <Box sx={{ maxWidth: 1250, mx: "auto" }}>
      <Box>
        <Item />
      </Box>
    </Box>
  );
}
