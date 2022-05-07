import { Box } from "@mui/system";
import { Item } from "../components/index";
import { Gutter } from "../components/styled-components/content";
import { ItemImageProvider, ItemProviderTest } from "../contexts/index";

export default function ItemPage() {
  return (
    <>
      <Gutter>
        <ItemProviderTest>
          <ItemImageProvider>
            <Box sx={{ py: { xs: 2, md: 4 } }} />
            <Item />
            <Box sx={{ py: 6 }} />
            {/* <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ background: "lightGrey", width: 270, height: 350 }}
              ></Box>
              <Box
                sx={{ background: "lightGrey", width: 270, height: 350 }}
              ></Box>
              <Box
                sx={{ background: "lightGrey", width: 270, height: 350 }}
              ></Box>
              <Box
                sx={{ background: "lightGrey", width: 270, height: 350 }}
              ></Box>
            </Box>
            <Box sx={{ py: 4 }} /> */}
          </ItemImageProvider>
        </ItemProviderTest>
      </Gutter>
    </>
  );
}
