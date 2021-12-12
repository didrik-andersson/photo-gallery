import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Retailer } from "./index";

export default function ItemInformation({ retailers }) {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Typography variant="subtitle2">
          Hello dude :P Hello dude :P Hello dude :P Hello dude :P Hello dude :P
          Hello dude :P Hello dude :P Hello dude :P Hello dude :P Hello dude
          :PHello dude :P Hello dude :P Hello dude :P Hello dude :P Hello dude
          :PHello dude :P Hello dude.
        </Typography>
      </Box>
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
