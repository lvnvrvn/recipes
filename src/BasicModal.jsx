import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth <= 600 ? '90%' : '600px',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (localStorage.getItem('recipes__wasSeen')) {
        return;
    } else {
        handleOpen();
    }
  }, []);

  function markAsSeen() {
    localStorage.setItem('recipes__wasSeen', true);
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Привет!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, margin: "20px 0", textAlign: 'center' }}
          >
            Здесь ты сможешь найти рецепты по имеющимся у тебя ингридиентам.
            Успехов!
          </Typography>
          <Button onClick={() => {handleClose(); markAsSeen()}} variant="outlined">
            Понятно
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
