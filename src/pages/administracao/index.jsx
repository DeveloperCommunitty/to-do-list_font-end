import { Box } from "@mui/material"
import ResponsiveAppBar from "../../components/navbar_profile"
import AdminPage from "../../components/admin"

export default function Admin(){
    return (
        <Box>
            <ResponsiveAppBar/>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: 'column'}}>
                <AdminPage/>
            </Box>
        </Box>
    )
}