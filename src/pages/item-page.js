import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { Item } from "../components/index";

export default function ItemPage() {
  const { id } = useParams();

  return (
    <Box>
      <Item />
    </Box>
  );
}
