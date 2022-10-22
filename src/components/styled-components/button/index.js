import clsx from "clsx";
import React from "react";
import { StyledButton } from "./wrappers";

export default function Button(props) {
  const { circle, size, tone, rounded, full, wide } = props;

  const className = clsx(
    props.className,
    size && `size-${size}`,
    tone && `tone-${tone}`,
    rounded && "rounded",
    circle && "circle",
    full && "full",
    wide && "wide"
  );

  return <StyledButton {...props} className={className} />;
}
