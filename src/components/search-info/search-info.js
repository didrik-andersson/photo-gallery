import { Box, Typography } from "@mui/material";
import { ItemsContext } from "../../contexts";
import { useContext } from "../../hooks";
import noResultsSvg from "../../utils/no-search-results.svg";
import { SearchTermText } from "./styled-components";

export default function SearchInfo({ searchTerm }) {
  const { totalHits } = useContext(ItemsContext);

  console.log(totalHits);

  return (
    <>
      <Box>
        <SearchTermText
          sx={{ mt: 4 }}
        >
          {searchTerm}
        </SearchTermText>
        <Typography>Totalt {totalHits} träffar</Typography>
      </Box>

      {totalHits !== null && totalHits < 1 ? (
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <img src={noResultsSvg} width={300} />
          <Box sx={{ mt: 5 }}>
            <p>
              Hmm... vi kunde tyvärr inte hitta något som matchar din sökning.
              Dubbelkolla efter stavfel eller försök på nytt.
            </p>
          </Box>
        </Box>
      ) : null}
    </>
  );
}
