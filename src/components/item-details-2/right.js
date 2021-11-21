import { Box } from "@mui/system";
import { Retailer } from "./index";

export default function Right({ retailers }) {
  return (
    <Box sx={{ flex: 1.5 }}>
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
