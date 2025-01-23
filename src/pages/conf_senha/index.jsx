import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import CheckIcon from "../../components/icon_conf";

export default function ConfirmaçãoSenha(){
    return(
        <Box sx={{}}>
            <ResponsiveAppBar />
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', flexDirection: 'column'}}>
            <CheckIcon />
        </Box>
        </Box>
    )
}