import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputAdornment } from "@mui/material";

export default function SelectInput({
  adornmentPosition,
  adornmentValue,
  label,
  fullWidth,
}) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.log(adornmentValue);

  return (
    <Box>
      <FormControl fullWidth={fullWidth}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label && label}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>50 x 30</MenuItem>
          <MenuItem value={20}>70 x 120</MenuItem>
          <MenuItem value={30}>100 x 130</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
