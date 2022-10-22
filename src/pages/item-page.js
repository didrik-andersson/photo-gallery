import { Box } from "@mui/system";
import { Item } from "../components/index";
import { Gutter } from "../components/styled-components/content";
import { ItemImageProvider, ItemProvider } from "../contexts/index";

export default function ItemPage() {
  return (
    <>
      <Gutter>
        <ItemProvider>
          <ItemImageProvider>
            <Box sx={{ py: { xs: 2, md: 4 } }} />
            <Item />
            <Box sx={{ py: 6 }} />
          </ItemImageProvider>
        </ItemProvider>
      </Gutter>
    </>
  );
}
