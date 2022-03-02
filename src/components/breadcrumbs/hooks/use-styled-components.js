import { Breadcrumbs } from "@mui/material";
import { styled } from "@mui/system";

export default function useStyledComponents() {
  const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
    "& .MuiBreadcrumbs-ol": {
      flexWrap: "nowrap",
    },
    "& .MuiBreadcrumbs-li": {
      [`&:last-child`]: {
        overflow: "hidden",
      },
    },
  }));
  return {
    StyledBreadcrumbs,
  };
}
