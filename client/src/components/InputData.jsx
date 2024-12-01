import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import axios from "axios";

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

export default function InputData(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [altitude, setAltitude] = useState("");
  const [compass, setCompass] = useState("");
  const [horizontalAngle, setHorizontalAngle] = useState("");

  const handleSubmit = async () => {
    props.altitude(altitude);
    props.compass(compass);
    props.horizontalAngle(horizontalAngle);

    let data = {
      altitude: altitude,
      compass: compass,
      horizontalAngle: horizontalAngle,
    };
    try {
      const response = await axios.post("http://localhost:3000/sendData", data);
      console.log("Server Response:", response.data);
    } catch (error) {
      console.log(error);
    }

    console.log("Altitude:", altitude);
    console.log("Compass:", compass);
    console.log("Horizontal Angle:", horizontalAngle);

    handleClose();
  };

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
                value={altitude}
                onChange={(e) => setAltitude(e.target.value)}
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
                value={compass}
                onChange={(e) => setCompass(e.target.value)}
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
                value={horizontalAngle}
                onChange={(e) => setHorizontalAngle(e.target.value)}
              />
            </Box>
            <Button variant="contained" size="small" onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
