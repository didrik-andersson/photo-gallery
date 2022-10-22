import { styled } from "@mui/system";
import Breadcrumbs from "./breadcrumbs";

export const StyledBreadcrumbs = styled(Breadcrumbs)(() => ({
    "& .MuiBreadcrumbs-ol": {
      flexWrap: "nowrap",
    },
    "& .MuiBreadcrumbs-li": {
      [`&:last-child`]: {
        overflow: "hidden",
      },
    },
  }));