import { Box } from "@mui/system";
import { useStyledComponents, ItemInformation } from "./index";
import { DialogTitle } from "../index";

export default function ItemDetails({ toggleFunction, item }) {
  const { StyledItemImage, StyledItemInformationWrapper } =
    useStyledComponents();

  return (
    <Box
      sx={{
        display: "flex",
        maxHeight: "calc(100vh - 140px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <figure style={{ margin: 0 }}>
          <StyledItemImage src={item.img} alt="test" />
        </figure>
      </Box>
      <StyledItemInformationWrapper>
        <DialogTitle
          id="customized-dialog-title"
          onClose={toggleFunction}
          title={item.title}
        />
        <ItemInformation retailers={item.retailers} />
      </StyledItemInformationWrapper>
    </Box>
  );
}
