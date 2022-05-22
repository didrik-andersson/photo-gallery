import { Button, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Hero } from "../components";
import { useNavigate } from "react-router-dom";
import { Gutter } from "../components/styled-components/content";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
      <Gutter>
        <Box sx={{ py: { xs: 5, md: 8 } }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "25px", md: "50px" },
          }}
        >
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "calc(50% - 12.5px)",
                md: "calc(33.33% - 33.33px)",
              },
            }}
          >
            <Card
              elevation={0}
              sx={{
                boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
                p: 4,
                borderRadius: 5,
              }}
            >
              <Box sx={{ mb: 1 }}>
                <SearchIcon sx={{ fontSize: 40, color: "#05a081" }} />
              </Box>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Hitta det du söker
              </Typography>
              <Typography variant="body1">
                Bestäm själv om du vill betala dina köp direkt, senare eller en
                gång i månaden. Med Klarna-appen väljer du enkelt det sätt som
                passar dig, och du kan när som helst ändra dig.
              </Typography>
            </Card>
          </Box>
          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "calc(50% - 12.5px)",
                md: "calc(33.33% - 33.33px)",
              },
            }}
          >
            <Card
              elevation={0}
              sx={{
                boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
                p: 4,
                borderRadius: 5,
              }}
            >
              <Box sx={{ mb: 1 }}>
                <FilterListIcon sx={{ fontSize: 40, color: "#05a081" }} />
              </Box>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Filtrera
              </Typography>
              <Typography variant="body1">
                Bestäm själv om du vill betala dina köp direkt, senare eller en
                gång i månaden. Med Klarna-appen väljer du enkelt det sätt som
                passar dig, och du kan när som helst ändra dig.
              </Typography>
            </Card>
          </Box>

          <Box
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "calc(50% - 12.5px)",
                md: "calc(33.33% - 33.33px)",
              },
            }}
          >
            <Card
              elevation={0}
              sx={{
                boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
                p: 4,
                borderRadius: 5,
              }}
            >
              <Box sx={{ mb: 1 }}>
                <FavoriteBorderIcon sx={{ fontSize: 40, color: "#05a081" }} />
              </Box>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Spara dina favoriter
              </Typography>
              <Typography variant="body1">
                Bestäm själv om du vill betala dina köp direkt, senare eller en
                gång i månaden. Med Klarna-appen väljer du enkelt det sätt som
                passar dig, och du kan när som helst ändra dig.
              </Typography>
            </Card>
          </Box>
        </Box>
        <Box sx={{ py: { xs: 8, md: 11 } }} />
        <Box>
          <Typography
            variant="h2"
            fontWeight="600"
            textAlign="center"
            sx={{
              maxWidth: 1000,
              mx: "auto",
              fontSize: { xs: "24px", sm: "32px" },
            }}
          >
            Vi vill förenkla shopping för hemindredning genom att samla
            produktinformation från flera olika hemsidor för att sedan kunna
            köra opp det i räva
          </Typography>
        </Box>
        <Box sx={{ py: { xs: 8, md: 11 } }} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: "25px", md: "50px" },
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "calc(50% - 25px)" },
            }}
          >
            <img
              src="https://didrikimages.blob.core.windows.net/images/1502995646523.jpg"
              alt="inredning inspiration"
              width="100%"
              height="100%"
              style={{ display: "block", maxHeight: 500, objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              flexBasis: { xs: "100%", md: "calc(50% - 25px)" },
            }}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ fontSize: { xs: "24px", sm: "32px" }, mb: 2 }}
            >
              Inspiration som kan fisa
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              När man inte vet vad en fis kan åstakomma så bör man helt enkelt
              hålla tätt. Man kan ju aldrig veta detta i förväg men då tycker
              jag det är bättre att vara på den säkra sidan.
            </Typography>
            <Typography variant="body1">
              Jag har hellre ont i magen än bruna byxor, det är inte bra för
              någon. Hopp o lek för nu är det kul att vara basketbollsproffs
              säger dem på radion har jag hört och så vidare, kom inte nära!
            </Typography>
            <Box sx={{ py: 2 }} />
            <CtaButton
              disableRipple
              variant="contained"
              onClick={() => navigate("/utforska")}
            >
              Utforska kategorier
            </CtaButton>
          </Box>
        </Box>
        <Box sx={{ py: { xs: 8, md: 11 } }} />
      </Gutter>
    </Box>
  );
}
