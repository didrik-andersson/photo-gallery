import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutEffect, useState } from "react";
import { StyledReferralButton } from "./styled-components";
import dummyLogo from "../../utils/posterton_logo_black.svg";

export default function Retailer({ name, retailer, selectedSize }) {
  const [currentPrice, setCurrentPrice] = useState(null);

  useLayoutEffect(() => {
    let selectedSizePrice = retailer.sizes.find(
      ({ size }) => size === selectedSize
    )?.price;

    selectedSizePrice && setCurrentPrice(selectedSizePrice);
  }, [selectedSize, retailer, setCurrentPrice]);

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
            // src={retailer.logo}
            src={dummyLogo}
          />
        </Box>
        <Typography component="div"></Typography>
        <Box sx={{ fontSize: 16, fontWeight: 500 }}>
          {currentPrice && <>{currentPrice}&nbsp;kr</>}
        </Box>
      </Box>
      <StyledReferralButton>Till butiken</StyledReferralButton>
    </Box>
  );
}
