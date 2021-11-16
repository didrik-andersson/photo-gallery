import { useState } from "react";

export default function useDialog() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialogOpen = () => {
    setDialogOpen(!dialogOpen);
  };

  return {
    dialogOpen,
    toggleDialogOpen,
  };
}
