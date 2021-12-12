import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Retailer } from "./index";

export default function ItemInformation({ retailers }) {
  return (
    <Box sx={{ p: 2 }}>
      {retailers && (
        <Box sx={{ mb: 4 }}>
          {retailers.map((retailer) => (
            <Retailer
              key={retailer.name}
              name={retailer.name}
              originalPrice={retailer.originalPrice}
              price={retailer.price}
              logo={retailer.logo}
            />
          ))}
        </Box>
      )}
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </Typography>
      </Box>
    </Box>
  );
}
