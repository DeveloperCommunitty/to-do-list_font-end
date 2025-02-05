import { Box } from "@mui/material";
import ResponsiveAppBarLogin from "../../components/navbar_login";
import SimplePaper from "../../components/Login";
import SimplePaper2 from "../../components/image";

export default function Login() {
  return (
    <Box>
      <ResponsiveAppBarLogin />
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
