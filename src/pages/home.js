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

const GridItem = ({ icon, title }) => {
  return (
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
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="600" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </Typography>
      </Card>
    </Box>
  );
}

export default function Home() {
  let navigate = useNavigate();

  return (
    <Box>
      <Hero
        background="#232a34"
        color="#fff"
        title="Hitta inredning till hemmet."
        body="Designder är skapat för att ge inspiration kring ditt hem och på samma gång
              göra det enkelt att hitta produkter mellan olika hemsidor."
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
          <GridItem title="Hitta det du söker" icon={
            <SearchIcon sx={{ fontSize: 40, color: "#05a081" }} />
          } />
          <GridItem title="Filtrera" icon={
            <FilterListIcon sx={{ fontSize: 40, color: "#05a081" }} />
          } />
          <GridItem title="Spara dina favoriter" icon={
            <FavoriteBorderIcon sx={{ fontSize: 40, color: "#05a081" }} />
          } />
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
            produktinformation från flera olika hemsidor
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
              Inspireras och shoppa samtidigt
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography variant="body1">
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
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
