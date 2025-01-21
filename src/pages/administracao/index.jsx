import { Box } from "@mui/material"
import ResponsiveAppBar from "../../components/navbar"
import AdminPage from "../../components/admin"

export default function Admin(){
    return (
        <Box sx={{}}>
            <ResponsiveAppBar/>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column'}}>
                <AdminPage/>
            </Box>
        </Box>
    )
}