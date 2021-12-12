import { Box } from "@mui/system";
import { useStyledComponents, ItemInformation } from "./index";
import { DialogTitle } from "../index";
import { Typography } from "@mui/material";

export default function ItemDetails({ toggleFunction, item }) {
  const { StyledItemImage } = useStyledComponents();

  return (
    <Box sx={{ display: "flex", maxHeight: "calc(100vh - 140px)" }}>
      <figure style={{ margin: 0 }}>
        <StyledItemImage src={item.img} alt="test" />
      </figure>
      <Box sx={{ maxWidth: 400, overflowY: "auto" }}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={toggleFunction}
          title={item.title}
        />
        <ItemInformation retailers={item.retailers} />
      </Box>
    </Box>
  );
}
