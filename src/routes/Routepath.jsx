import Cadastro from "../pages/cadastro"
import Login from "../pages/login"
import RecuperacaoSenha from "../pages/recuperacao_senha"
import InsercaoCodigo from "../pages/insercao_codigo"
import AdSenha from "../pages/ad_senha"
import AlterarSenha from "../pages/alt_senha"
import ConfirmaçãoSenha from "../pages/conf_senha"
import Administracao from "../pages/administracao"
import Tarefa from "../pages/tarefas";
import Pasta from "../pages/Pastas"
import Unauthorized from "../pages/unauthorized"
import Pasta_Tarefa from "../pages/pasta_tarefa"


export const AdminRoutesPath = {

    '/administracao': Administracao,
}

export const PrivateRoutesPath = {

    "/tarefas": Tarefa,
    "/pasta":Pasta,
    "/pasta_tarefa/:playlistId":Pasta_Tarefa
}


export const RoutesPath = {
  
    '/alt_senha': AlterarSenha,
    '/conf_senha': ConfirmaçãoSenha,
    '/':Login,
    '/cadastro':Cadastro,
    '/recuperacao_senha': RecuperacaoSenha,
    '/insercao_codigo': InsercaoCodigo,
    '/ad_senha': AdSenha, 
    '/unauthorized':Unauthorized,
}
