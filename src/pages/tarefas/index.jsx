import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import SimplePaper from "../../components/todo";

export default function Tarefa() {
  return (
    <Box sx={{}}>
      <ResponsiveAppBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <SimplePaper />
      </Box>
    </Box>
  );
}
