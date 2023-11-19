import { InputAdornment, Stack, TextField } from "@mui/material";

export default function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="standard" variant="standard" />
        <TextField label="filled" variant="filled" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          size="small"
        />
        <TextField
          label="Name"
          variant="outlined"
          color="info"
          size="small"
          required
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          variant="outlined"
          color="secondary"
          size="small"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        {/* <Number label="num"/> */}
        <TextField
          label="price"
          variant="outlined"
          color="info"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">EGP</InputAdornment>,
          }}
        />
        <TextField
          label="price"
          variant="outlined"
          color="info"
          type="number"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">EGP</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
