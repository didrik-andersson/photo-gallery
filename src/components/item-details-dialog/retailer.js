import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Retailer({ name, originalPrice, price, logo }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "30%",
        }}
      >
        <Box sx={{ width: 60, mr: 3, display: "flex" }}>
          <img height="100%" width="100%" alt={`${name} logo`} src={logo} />
        </Box>
        <Typography variant="body2" component="div" color="textSecondary">
          {price}&nbsp;kr
        </Typography>
      </Box>
      <Button disableFocusRipple variant="contained">
        Köp mig
      </Button>
    </Box>
  );
}
