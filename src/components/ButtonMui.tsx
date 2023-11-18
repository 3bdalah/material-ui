import { Button, IconButton, Stack, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function ButtonMui() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button variant="text">test </Button>
        <Button variant="contained">test </Button>
        <Button variant="outlined">test </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="primary">
          test{" "}
        </Button>
        <Button variant="contained" color="success">
          test{" "}
        </Button>
        <Button variant="contained" color="error">
          test{" "}
        </Button>
        <Button variant="contained" color="info">
          test{" "}
        </Button>
        <Button variant="contained" color="warning">
          test{" "}
        </Button>
        <Button variant="contained" color="secondary">
          test{" "}
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          {" "}
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          {" "}
          send
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} size="large">
          {" "}
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} size="medium">
          {" "}
          send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} size="small">
          {" "}
          send
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <IconButton arial-label="send" color="info" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
        >
          <Button onClick={() => {}}>Left </Button>
          <Button>Center </Button>
          <Button>Right </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}
