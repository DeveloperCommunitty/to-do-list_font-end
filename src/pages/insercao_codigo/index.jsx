import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import SimplePaper4 from "../../components/ins_codigo";

export default function InsercaoCodigo(){
    return(
        <Box sx={{}}>
            <ResponsiveAppBar />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', flexDirection: 'column'}}>
            <SimplePaper4 />
        </Box>
        </Box>

    )
}