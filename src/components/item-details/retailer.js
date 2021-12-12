import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyledComponents } from "./index";

export default function Retailer({ name, originalPrice, price, logo }) {
  const { StyledReferralButton } = useStyledComponents();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: 60, mr: 3, display: "flex" }}>
          <img height="100%" width="100%" alt={`${name} logo`} src={logo} />
        </Box>
        <Typography variant="body2" component="div" color="textSecondary">
          {price}&nbsp;kr
        </Typography>
      </Box>
      <StyledReferralButton>Till butiken</StyledReferralButton>
    </Box>
  );
}
