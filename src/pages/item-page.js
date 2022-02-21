import { Box } from "@mui/system";
import { Item } from "../components/index";
import { ItemImageProvider } from "../contexts/index";

export default function ItemPage() {
  return (
    <Box sx={{ maxWidth: 1250, mx: "auto" }}>
      <Box>
        <ItemImageProvider>
          <Item />
        </ItemImageProvider>
      </Box>
    </Box>
  );
}
