import { Box } from "@mui/material"
import ResponsiveAppBar from "../../components/navbar"
import AlterarSenhaPaper from "../../components/altt_senha"

export default function AlterarSenha(){
    return (
        <Box sx={{}}>
            <ResponsiveAppBar/>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column'}}>
                <AlterarSenhaPaper />
            </Box>
        </Box>
    )
}