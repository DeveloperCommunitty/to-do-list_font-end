import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import SimplePaper from "../../components/rec_senha";
import SimpleTextArea from "../../components/text_area";

export default function RecuperacaoSenha(){
    return(
        <Box sx={{}}>
            <ResponsiveAppBar/>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh', flexDirection: 'column'}}>
            <SimplePaper/>
            <SimpleTextArea/>
        </Box>            
        </Box>
    )
}