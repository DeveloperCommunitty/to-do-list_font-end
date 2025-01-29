import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import PaperPasta from "../../components/paper_pasta";


export default function Pasta() {
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
        <PaperPasta />
      </Box>
    </Box>
  );
}
