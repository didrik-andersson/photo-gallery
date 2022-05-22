import { Box } from "@mui/system";
import { CategoryList, Hero } from "../components";
import { Gutter } from "../components/styled-components/content";

export default function Discover() {
  return (
    <Box>
      <Hero
        background="#ffffff"
        title="Utforska"
        body="Designder hjälper dig att få inspiration samt hitta den perfekta detaljen till hemmet bland flera sajter samtidigt. Välj någon av kategorierna nedan för att komma igång!"
      />
      <Gutter>
        <CategoryList />
        <Box sx={{ my: 20 }} />
      </Gutter>
    </Box>
  );
}
