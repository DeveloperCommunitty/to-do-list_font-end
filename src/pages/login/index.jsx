import { Box } from "@mui/material";
import ResponsiveAppBar from "../../components/navbar";
import SimplePaper from "../../components/Login";
import SimplePaper2 from "../../components/image";


export default function Login (){
    return (
        <Box sx={{}}>
            <ResponsiveAppBar/>
        <Box sx={{display:'flex',justifyContent:"space-between",alignItems:'end',height:"80vh"}}>
            <SimplePaper2/>
             <SimplePaper/>
        </Box>
        </Box>

        
    )

}