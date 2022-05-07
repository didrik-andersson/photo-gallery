import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Hero } from "../components";
import { Gutter } from "../components/styled-components/content";
import posterImg from "../utils/posters-category.jpg";
import { Link as RouterLink } from "react-router-dom";

export default function Discover() {
  return (
    <Box>
      <Hero
        background="#ffffff"
        title="Utforska"
        body="Designder hjälper dig att få inspiration samt hitta den perfekta detaljen till hemmet bland flera sajter samtidigt. Välj någon av kategorierna nedan för att komma igång!"
      />
      <Gutter>
        <Grid container alignItems="stretch" spacing={4}>
          <Grid item xs={6} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{ boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)" }}
            >
              <CardActionArea component={RouterLink} to="/utforska/posters">
                <CardMedia
                  component="img"
                  image="https://didrikimages.blob.core.windows.net/images/1502995646523.jpg"
                  alt="bild på posters"
                />
              </CardActionArea>
            </Card>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Link component={RouterLink} to="/utforska/posters" color="#000" variant="h6">
                Posters
              </Link>
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{
                  background: "#fbfbfb",
                  width: "100%",
                  maxHeight: "389.3px",
                  height: "100%",
                  boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
                }}
              ></Card>
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Link component={RouterLink} to="/" color="#000" variant="h6">
                  
                </Link>
              </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{
                background: "#fbfbfb",
                width: "100%",
                maxHeight: "389.3px",
                height: "100%",
                boxShadow: "0 6px 18px 0 rgb(0 0 0 / 10%)",
              }}
            >
              {/* <CardActionArea component={Link} to="/utforska/posters">
                <CardMedia
                  component="img"
                  image={posterImg}
                  alt="bild på posters"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Posters
                  </Typography>
                </CardContent>
              </CardActionArea> */}
            </Card>
            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Link component={RouterLink} to="/" color="#000" variant="h6">
                
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Gutter>
    </Box>
  );
}
