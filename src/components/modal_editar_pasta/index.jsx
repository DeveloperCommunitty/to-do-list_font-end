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
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useEditPlaylistMutation } from "../../server/api";

// eslint-disable-next-line react/prop-types
export default function ModalEditarPasta({playlistId}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  
    const editPlaylistMutation = useEditPlaylistMutation();
  
    const handleEditPlaylist = async () => {
        await editPlaylistMutation.mutateAsync({ id: playlistId, name, description });
  
        setOpen(false)
        setName("");
        setDescription("");
    };
  return (
    <React.Fragment>
      <IconButton
        onClick={() => setOpen(true)}
        aria-label="delete"
        size="large"
        sx={{
          border: "2px solid black",
          borderRadius: "30px",
          padding: "8px",
          ml: 1,
          color: "gray",
        }}
      >
        <BorderColorIcon />
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
            Modificar Pasta
          </Typography>

          <Typography pb={2}>Altere sua Pasta</Typography>

          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Nome da Pasta</FormLabel>
              <Input required placeholder="Digite aqui"
              value={name}
              onChange={(e) => setName(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>Descrição da Pasta</FormLabel>
              <Input required placeholder="Digite aqui"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
               />
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
            onClick={handleEditPlaylist}
          >
            Adicionar
          </Button>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
