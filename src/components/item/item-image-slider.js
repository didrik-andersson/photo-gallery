import { Box } from "@mui/system";
import React from "react";
import { ItemImageContext } from "../../contexts/index";
import { useContext } from "../../hooks/index";
import { ContentSlider } from "../index";
import { useStyledComponents, Arrows } from "./index";

export default function ItemImageSlider({
  images,
  stepper,
  arrows,
  activeStepColor,
  maxWidth,
  maxHeight,
  transparent,
}) {
  const { StyledItemImage } = useStyledComponents();
  const {
    activeImageIndex,
    handleImageIndexChange,
    handleNextImageIndex,
    handlePrevImageIndex,
  } = useContext(ItemImageContext);

  return (
    <Box>
      {arrows && (
        <Arrows
          activeStep={activeImageIndex}
          maxSteps={images.length}
          handlePrevious={handlePrevImageIndex}
          handleNext={handleNextImageIndex}
        />
      )}
      <ContentSlider
        stepper={stepper}
        activeStepColor={activeStepColor}
        maxSteps={images.length}
        transparent={transparent}
        activeImageIndex={activeImageIndex}
        handleImageIndexChange={handleImageIndexChange}
      >
        {images.map((step, index) => (
          <div key={step + index}>
            {/* Below method returns current slide and 2 prev/next slides. 
                This limits the rendered slides */}
            {Math.abs(activeImageIndex - index) <= 2 ? (
              <Box sx={{ display: "flex"}}>
                <StyledItemImage
                  src={step}
                  maxHeight={maxHeight}
                  maxWidth={maxWidth}
                />
              </Box>
            ) : null}
          </div>
        ))}
      </ContentSlider>
    </Box>
  );
}
