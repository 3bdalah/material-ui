import {
  Button,
  IconButton,
  Stack,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";
export default function ButtonMui() {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string
  ) => {
    setFormats(updatedFormats);
  };
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
      <Stack direction="row">
        <ToggleButtonGroup
          arial-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
