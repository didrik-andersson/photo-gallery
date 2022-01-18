import { styled } from "@mui/system";

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
  return {
    StyledReferralButton,
  };
}
