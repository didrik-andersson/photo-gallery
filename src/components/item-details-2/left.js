import { Box, maxHeight } from "@mui/system";
import { useStyledComponents } from "./index";

export default function Left({ item }) {
  const { StyledItemImage } = useStyledComponents();

  return (
    <Box sx={{ maxHeight: "100%" }}>
      <StyledItemImage src={item.img} alt={item.title} />
    </Box>
  );
}
