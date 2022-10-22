import { MobileStepper } from "@mui/material";
import { styled } from "@mui/system";

export const StyledMobileStepper = styled(MobileStepper, {
    shouldForwardProp: (prop) => prop !== "activeStepColor",
  })(({ activeStepColor }) => ({
    "& .MuiMobileStepper-dotActive": {
      background: activeStepColor ?? "#000",
    },
    "& .MuiMobileStepper-dot": {
      height: 7,
      width: 7,
    },
    "& .MuiMobileStepper-root": {
      background: "none",
    },
  }));
