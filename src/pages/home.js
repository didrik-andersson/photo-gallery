import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Hero } from "../components";
import { useNavigate } from "react-router-dom";

const CtaButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#05a081",
  borderColor: "#05a081",
  "&:hover": {
    backgroundColor: "#16af90",
    boxShadow: "none",
  },
});

export default function Home() {
  let navigate = useNavigate();

  return (
    <Box>
      <Hero
        background="#232a34"
        color="#fff"
        title="Hitta inredning till hemmet."
        body="Designder är skapat för att ge inspiration kring ditt hem och på samma gång
              göra det enkelt att hitta mellan olika hemsidor."
        contentPadding={[0, 0, 0, 8, 0]}
      >
        <Box sx={{ py: 2 }} />
        <CtaButton
          disableRipple
          variant="contained"
          onClick={() => navigate("/utforska")}
        >
          Utforska kategorier
        </CtaButton>
      </Hero>
    </Box>
  );
}
