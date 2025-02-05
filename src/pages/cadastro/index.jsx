import SimplePaper3 from "../../components/cadastrar";
import ResponsiveAppBarLogin from "../../components/navbar_login";

export default function Cadastro(){
    return (
        <div>
            <ResponsiveAppBarLogin/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh",flexDirection:"column"}}>
            <SimplePaper3/>
            </div>
        </div>
        
    )
}