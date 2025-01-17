import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import AddSenha from "../../components/add_senha";

export default function AdSenha(){
    return(
        <Box sx={{}}>
            <ResponsiveAppBar/>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', flexDirection: 'column'}}>
                <AddSenha />
            </Box>
        </Box>
    )
}