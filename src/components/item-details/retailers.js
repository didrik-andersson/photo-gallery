import { Box } from "@mui/system";
import { Retailer } from "./index";

export default function Retailers({ retailers }) {
  return (
    <Box sx={{ width: "100%" }}>
      {retailers &&
        retailers.map((retailer) => (
          <Retailer
            key={retailer.name}
            name={retailer.name}
            originalPrice={retailer.originalPrice}
            price={retailer.price}
            logo={retailer.logo}
          />
        ))}
    </Box>
  );
}
