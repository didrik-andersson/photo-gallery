import { Box } from "@mui/system";
import { Right, Left } from "./index";
import { DialogTitle } from "../index";

export default function ItemDetails2({ toggleFunction, item }) {
  return (
    <Box sx={{ maxHeight: "100%" }}>
      {/* <DialogTitle
        id="customized-dialog-title"
        onClose={toggleFunction}
        title={item.title}
      /> */}
      <Box sx={{ display: "flex", maxHeight: "100%" }}>
        <Left item={item} />
        <Right retailers={item.retailers} />
      </Box>
    </Box>
  );
}
