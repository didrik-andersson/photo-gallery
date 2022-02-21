import { Box, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Arrows({
  maxSteps,
  activeStep,
  handlePrevious,
  handleNext,
}) {
  const firstStep = activeStep === 0;
  let lastStep = activeStep === maxSteps - 1;

  return (
    <Box>
      <IconButton
        aria-label="Next slide"
        size="large"
        sx={{
          color: "#fff",
          position: "fixed",
          top: "50%",
          left: 10,
          zIndex: 1000000,
        }}
        onClick={handlePrevious}
        disabled={firstStep}
      >
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <IconButton
        aria-label="Next slide"
        size="large"
        sx={{
          color: "#fff",
          position: "fixed",
          top: "50%",
          right: 10,
          zIndex: 1000000,
        }}
        onClick={handleNext}
        disabled={lastStep}
      >
        <ArrowForwardIosIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}
