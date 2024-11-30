import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TextData() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="section" sx={style}>
          <div>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Altitude"
                variant="outlined"
                value={"altitude"}
              />
            </Box>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Compass"
                variant="outlined"
                value={"adi"}
              />
            </Box>
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Horizontal angle"
                variant="outlined"
                value={"Angel"}
              />
            </Box>
            <Button variant="contained" size="small" onClick={handleClose}>
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
