import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [country, setCountry] = useState<string[]>([]);
  console.log("country", country);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="CA">Cairo</MenuItem>
        <MenuItem value="MU">Menfouia</MenuItem>
        <MenuItem value="AS">Assuit</MenuItem>
      </TextField>
    </Box>
  );
}
