import { Box } from "@mui/system";
import { Item } from "../components/index";
import { ItemImageProvider, ItemProviderTest } from "../contexts/index";

export default function ItemPage() {
  return (
    <Box sx={{ maxWidth: 1250, mx: "auto" }}>
      <Box>
        <ItemProviderTest>
          <ItemImageProvider>
            <Item />
          </ItemImageProvider>
        </ItemProviderTest>
      </Box>
    </Box>
  );
}
