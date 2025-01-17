import Cadastro from "../pages/cadastro"
import { Home } from "../pages/home"
import Login from "../pages/login"
import RecuperacaoSenha from "../pages/recuperacao_senha"
import InsercaoCodigo from "../pages/insercao_codigo"
import AdSenha from "../pages/ad_senha"
import AlterarSenha from "../pages/alt_senha"
import ConfirmaçãoSenha from "../pages/conf_senha"

export const RoutesPath = {

    '/':Home,
    '/login':Login,
    '/cadastro':Cadastro,
    '/recuperacao_senha': RecuperacaoSenha,
    '/insercao_codigo': InsercaoCodigo,
    '/ad_senha': AdSenha, 
    'alt_senha': AlterarSenha,
    'conf_senha': ConfirmaçãoSenha

}