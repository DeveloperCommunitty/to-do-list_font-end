import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import Paper_Pasta_Tarefa from "../../components/pasta_tarefa"

export default function Pasta_Tarefa() {
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
        <Paper_Pasta_Tarefa />
      </Box>
    </Box>
  );
}
