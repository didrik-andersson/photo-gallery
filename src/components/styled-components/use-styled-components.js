import { styled } from "@mui/system";
import MobileStepper from "@mui/material/MobileStepper";

export default function useStyledComponents() {
  const StyledReferralButton = styled("button")(({ theme }) => ({
    background: "rgb(65 167 119)",
    color: "#fff",
    fontSize: 14,
    borderRadius: 25,
    padding: "6px 16px",
    border: "none",
    cursor: "pointer",
    outline: "inherit",
  }));

  const StyledMobileStepper = styled(MobileStepper, {
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
  return {
    StyledReferralButton,
    StyledMobileStepper,
  };
}
