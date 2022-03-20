import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

export default function MainLayout() {
  return (
    <div>
      <Box sx={{ height: 63, width: "100%", background: "#232a34"}}>
      </Box>
      <Outlet />
    </div>
  );
}
