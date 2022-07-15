import React from "react";
import Box from "@mui/material/Box";
import SwipeableViews from "react-swipeable-views";
import { useStyledComponents } from "../index";

export default function ContentSlider({
  children,
  stepper,
  activeStepColor,
  transparent,
  maxSteps,
  activeImageIndex,
  handleImageIndexChange,
}) {
  const { StyledMobileStepper } = useStyledComponents();

  return (
    <Box>
      <SwipeableViews
        index={activeImageIndex}
        onChangeIndex={handleImageIndexChange}
        slideStyle={{
          margin: "auto 0px",
        }}
        enableMouseEvents
      >
        {children}
      </SwipeableViews>
      {stepper && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <StyledMobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeImageIndex}
            activeStepColor={activeStepColor}
          />
        </Box>
      )}
    </Box>
  );
}
