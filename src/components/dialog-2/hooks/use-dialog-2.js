import { useState } from "react";

export default function useDialog2() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialogOpen = () => {
    setDialogOpen(!dialogOpen);
  };

  return {
    dialogOpen,
    toggleDialogOpen,
  };
}
