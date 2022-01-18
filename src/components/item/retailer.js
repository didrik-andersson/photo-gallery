import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useStyledComponents } from "../index";

export default function Retailer({ name, retailer, selectedSize }) {
  const { StyledReferralButton } = useStyledComponents();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: 86, height: 26, mr: 5, display: "flex" }}>
          <img
            height="100%"
            width="100%"
            alt={`${name} logo`}
            src={retailer.logo}
          />
        </Box>
        <Typography component="div"></Typography>
        <Box sx={{ fontSize: 16, fontWeight: 500 }}>
          {retailer.sizes[selectedSize]?.price}&nbsp;kr
        </Box>
      </Box>
      <StyledReferralButton>Till butiken</StyledReferralButton>
    </Box>
  );
}
