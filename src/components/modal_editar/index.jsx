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
import { useEditTaskMutation } from "../../server/api";

// eslint-disable-next-line react/prop-types
export default function ModalEditar({ taskId }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const editTaskMutation = useEditTaskMutation();

  const handleEditTask = async () => {
      await editTaskMutation.mutateAsync({ id: taskId, title, description });

      setOpen(false)
      setTitle("");
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
            Modificar Tarefa
          </Typography>

          <Typography pb={2}>Altere sua tarefa</Typography>

          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Nome da Tarefa</FormLabel>
              <Input
                required
                placeholder="Digite aqui"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Descrição da Tarefa</FormLabel>
              <Input
                required
                placeholder="Digite aqui"
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
            onClick={handleEditTask}
          >
            Atualizar
          </Button>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
