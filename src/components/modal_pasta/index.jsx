import * as React from "react";
import Modal from "@mui/joy/Modal";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { IconButton } from "@mui/joy";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import FolderIcon from "@mui/icons-material/Folder";

export default function ModalPasta() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpen(true)}
        aria-label="delete"
        size="large"
        sx={{
          border: "3px solid black",
          borderRadius: "30px",
          padding: "12px",
          mr: 1,
          color: "gray",
        }}
      >
        <FolderIcon />
      </IconButton>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            border: "3px solid black",
            borderRadius: "30px",
            p: 2,
            boxShadow: "lg",
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            id="modal-title"
            level="h2"
            textColor="inherit"
            sx={{ fontWeight: "lg", mb: 1, ml: 2, mr: 2 }}
          >
            Adicionar Pasta
          </Typography>

          <Typography pb={2}>Digite sua nova Pasta</Typography>

          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Nome da Pasta</FormLabel>
              <Input required placeholder="Digite aqui" />
            </FormControl>

            <FormControl>
              <FormLabel>Descrição da Pasta</FormLabel>
              <Input required placeholder="Digite aqui" />
            </FormControl>
          </Stack>
          <Button
            sx={{
              mt: "20px",
              borderRadius: "30px",
              backgroundColor: "white",
              border: "2px solid black",
              color: "black",
            }}
          >
            Adicionar
          </Button>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
