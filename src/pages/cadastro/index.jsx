import SimplePaper3 from "../../components/cadastrar";
import ResponsiveAppBar from "../../components/navbar";

export default function Cadastro(){
    return (
        <div>
            <ResponsiveAppBar/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",flexDirection:"column"}}>
            <SimplePaper3/>
            </div>
        </div>
        
    )
}