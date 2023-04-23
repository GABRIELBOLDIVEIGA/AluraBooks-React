import { useCategorias } from "../../graphQL/categorias/hooks";
import ModalCadastroUsuario from "../ModalCadastroUsuario";
import ModalLoginUsuario from "../ModalLoginUsuario";
import { Link, useNavigate } from "react-router-dom";
import BotaoNavegacao from "../BotaoNavegacao";
import usuario from "./assets/usuario.svg";
import logo from "./assets/logo.png";
import { useState } from "react";
import "./BarraNavegacao.css";

const BarraNavegacao = () => {
    const [modalCadastroAberta, setModalCadastroAberta] = useState(false);
    const [modalLoginAberta, setModalLoginAberta] = useState(false);

    const { data } = useCategorias();

    let navigate = useNavigate();

    const token = sessionStorage.getItem("token");

    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(token != null);

    const aoEfetuarLogin = () => {
        setModalLoginAberta(false);
        setUsuarioEstaLogado(true);
    };

    const efetuarLogout = () => {
        setUsuarioEstaLogado(false);
        sessionStorage.removeItem("token");
        navigate("/");
    };

    return (
        <nav className="ab-navbar">
            <h1 className="logo">
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo da AluraBooks" />
                </Link>
            </h1>
            <ul className="navegacao">
                <li>
                    <a href="#!">Categorias</a>
                    <ul className="submenu">
                        {data?.categorias.map((categoria) => (
                            <li key={categoria.id}>
                                <Link to={`/categorias/${categoria.slug}`}>{categoria.nome}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
            <ul className="acoes">
                {!usuarioEstaLogado && (
                    <>
                        <li>
                            <BotaoNavegacao texto="Login" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} onClick={() => setModalLoginAberta(true)} />
                            <ModalLoginUsuario aberta={modalLoginAberta} aoFechar={() => setModalLoginAberta(false)} aoEfetuarLogin={aoEfetuarLogin} />
                        </li>
                        <li>
                            <BotaoNavegacao texto="Cadastrar-se" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} onClick={() => setModalCadastroAberta(true)} />
                            <ModalCadastroUsuario aberta={modalCadastroAberta} aoFechar={() => setModalCadastroAberta(false)} />
                        </li>
                    </>
                )}
                {usuarioEstaLogado && (
                    <>
                        <li>
                            <Link to="/minha-conta/pedidos">Minha conta</Link>
                        </li>
                        <li>
                            <BotaoNavegacao texto="Logout" textoAltSrc="Icone representando um usuário" imagemSrc={usuario} onClick={efetuarLogout} />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default BarraNavegacao;
