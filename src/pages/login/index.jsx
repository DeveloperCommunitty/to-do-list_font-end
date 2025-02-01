import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import SimplePaper from "../../components/Login";
import SimplePaper2 from "../../components/image";

export default function Login() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "80vh",
          padding: "1rem"
        }}
      >
        <SimplePaper2 />
        <SimplePaper />
      </Box>
    </Box>
  );
}
